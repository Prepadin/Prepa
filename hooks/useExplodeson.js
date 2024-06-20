import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from "three";
import { MathUtils } from 'three'

export const useExplode = (group, { distance = 3, enableRotation = true }) => {
  useEffect(() => {
    const groupWorldPosition = new THREE.Vector3();
    group.current.getWorldPosition(groupWorldPosition);

    group.current.children.forEach((mesh) => {
      mesh.originalPosition = mesh.position.clone();
      const meshWorldPosition = new THREE.Vector3();
      mesh.getWorldPosition(meshWorldPosition);

      mesh.directionVector = meshWorldPosition
        .clone()
        .sub(groupWorldPosition)
        .normalize();

      mesh.originalRotation = mesh.rotation.clone();
      mesh.targetRotation = new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
    });
  }, []);

  useEffect(() => {
    group.current.children.forEach((mesh) => {
      mesh.targetPosition = mesh.originalPosition
        .clone()
        .add(mesh.directionVector.clone().multiplyScalar(distance));
    });
  }, [distance]);

  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useFrame((state, delta) => {
    group.current?.rotateY(MathUtils.degToRad(0.2))
    setOffset((prevOffset) => {
      const newOffset = prevOffset + direction * delta * 0.05; // Adjust the speed by changing the multiplier
      if (newOffset > 0.1 || newOffset < 0) {
        setDirection(-direction); // Reverse the direction
        return THREE.MathUtils.clamp(newOffset, 0, 1); // Clamp the offset between 0 and 1
      }
      return newOffset;
    });

    group.current.children.forEach((mesh) => {
      if (offset < 0.0001) {
        if (mesh.name === "origin") {
          mesh.visible = true;
        } else {
          mesh.visible = false;
        }
      } else {
        if (mesh.name === "origin") {
          mesh.visible = false;
        } else {
          mesh.visible = true;
        }
      }

      mesh.position.x = THREE.MathUtils.lerp(
        mesh.originalPosition.x,
        mesh.targetPosition.x,
        offset // Use the state offset for animation progress
      );
      mesh.position.y = THREE.MathUtils.lerp(
        mesh.originalPosition.y,
        mesh.targetPosition.y,
        offset // Use the state offset for animation progress
      );
      mesh.position.z = THREE.MathUtils.lerp(
        mesh.originalPosition.z,
        mesh.targetPosition.z,
        offset // Use the state offset for animation progress
      );

      if (enableRotation) {
        mesh.rotation.x = THREE.MathUtils.lerp(
          mesh.originalRotation.x,
          mesh.targetRotation.x,
          offset // Use the state offset for animation progress
        );
        mesh.rotation.y = THREE.MathUtils.lerp(
          mesh.originalRotation.y,
          mesh.targetRotation.y,
          offset // Use the state offset for animation progress
        );
        mesh.rotation.z = THREE.MathUtils.lerp(
          mesh.originalRotation.z,
          mesh.targetRotation.z,
          offset // Use the state offset for animation progress
        );
      }
    });
  });
};
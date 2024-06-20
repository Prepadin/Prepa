// "use client";

// import React, {useState, useRef, useEffect} from 'react'
// import "./menu.css";
// import Link from "next/link";
// import {gsap} from "gsap";
// import {useGSAP} from "@gsap/react";




// const menuLinks = [
//     {path: "/", label: "Home"},
//     {path: "/services", label: "Services"},
//     {path: "/about", label: "About"},
//     {path: "/contact", label: "Contact"},
// ];

// const Menu = () => {
  
//     const container = useRef();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const tl = useRef();


//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
  
//     useGSAP(() => {
//         gsap.set(".menu-link-item-holder", { y: 75});

//         tl.current = gsap.timeline({ paused:true }).to(".menu-overlay", {
//             duration: 1.25,
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             ease: "power4.inOut"
//         })
//         .to(".menu-link-item-holder", {
//             y: 0,
//             duration: 1,
//             stagger: 0.1,
//             ease: "power4.inOut",
//             delay: -0.75,
//         });
//     }, 
//     { scope: container}
// );

//   useEffect(() => {
//     if (isMenuOpen) {
//         tl.current.play()
//     } else {
//         tl.current.reverse();
//     }
//   }, [isMenuOpen]);




//     return (
//     <div className='menu-container' ref={container}>
//       <div className='menu-bar'> 
//         <div className='menu-logo'>
//             <Link href="/">Prepad</Link>
//         </div>
//         <div className='menu-open' onClick={toggleMenu}>
//         <p>Menu</p>
//       </div>
//       </div>
//       <div className='menu-overlay'>
//       <div className='menu-overlay-bar'>
//         <div className='menu-logo'>
//             <Link href="/">Prepad</Link>
//         </div>
//         <div className='menu-close'>
//             <p>Close</p>
//         </div>
//       </div>
//       <div className='menu-close-icon' onClick={toggleMenu}>
//         <p>&#x2715;</p>
//       </div>
//       <div className='menu-copy'>
//         <div className='menu-links'>
//             {menuLinks.map((link, index) => (
//               <div className='menu-link-item' key={index}>
//                 <div className='menu-link-item-holder' onClick={toggleMenu}>
//                     <Link href={link.path} className='menu-link'>
//                         {link.label}
//                     </Link>
//                 </div>
//               </div>


//             ))}
//             </div>
//             <div className='menu-info'>
//                 <div className='menu-info-col'>
//                     <a href='#'>X &#8599;</a>
//                     <a href='#'>Instagram &#8599;</a>
//                     <a href='#'>LinkedIn &#8599;</a>
//                     <a href='#'>Facebook &#8599;</a>
//                 </div>
//                 <div className='menu-info-col'>
//                     <p>info@prepad.si</p>
//                     <p>069334902</p>
//                 </div>
//             </div>
//         </div>
//       <div className='menu-preview'>
//         <p>View Showreel</p>
//       </div>
//     </div>
//     </div>
//   )
// };

// export default Menu


// "use client"

// import React, { useState, useRef, useEffect } from 'react'
// import s from './menu.module.scss'
// import Link from "next/link"
// import { gsap } from "gsap"
// import { useGSAP } from "@gsap/react"

// const menuLinks = [
//      { path: "/", label: "Home" },
//      { path: "/services", label: "Services" },
//      { path: "/about", label: "About" },
//      { path: "/contact", label: "Contact" }
// ];




// export default function () {
   
//     const container = useRef();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const tl = useRef();


//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };
  
//     useGSAP(() => {
//         gsap.set(".menu-link-item-holder", { y: 75});

//         tl.current = gsap.timeline({ paused:true }).to(".menu-overlay", {
//             duration: 1.25,
//             clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
//             ease: "power4.inOut"
//         })
//         .to(".menu-link-item-holder", {
//             y: 0,
//             duration: 1,
//             stagger: 0.1,
//             ease: "power4.inOut",
//             delay: -0.75,
//         });
//     }, 
//     { scope: container}
// );

//   useEffect(() => {
//     if (isMenuOpen) {
//         tl.current.play()
//     } else {
//         tl.current.reverse();
//     }
//   }, [isMenuOpen]);
    
  
//   return (
//    <div className={s.menucontainer} ref={container}>
//     <div className={s.menubar}>
//         <div className={s.menulogo}>
//             <Link href="/">Prepad</Link>
//         </div>
//         <div className={s.menuopen} onClick={toggleMenu}>
//             <p>Menu</p>
//             </div>        
//      </div>
//      <div className={s.menuoverlay}>
//         <div className={s.menuoverlaybar}>
//             <div className={s.menulogo}>
//                 <Link href="/">Prepad</Link>
//             </div>
//             <div className={s.menuclose} onClick={toggleMenu}>
//                 <p>Close</p>
//             </div>
//         </div>
//         <div className={s.menucloseicon}>
//             <p>&#x2715;</p>
//         </div>
//         <div className={s.menucopy}>
//             <div className={s.menulinks}>
//                 {menuLinks.map((link, index) => (
//                     <div className={s.menulinkitem} key={index}>
//                         <div className={s.menulinkitemholder} onClick={toggleMenu}>
//                             <Link href={link.path} className={s.menulink}>
//                             {link.label}
//                             </Link>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <div className={s.menuinfo}>
//                 <div className={s.menuinfocol}>
//                     <a href="#"> X &#8599;</a>
//                     <a href="#"> Instagram &#8599;</a>
//                     <a href="#"> LinkedIn &#8599;</a>
//                     <a href="#"> Facebook &#8599;</a>
//                     <a href="#"> Mutijeza &#8599;</a>
//                 </div>
//                 <div className={s.menuinfocol}>
//                     <p>info@prepad.si</p>
//                     <p>0698332843</p>
//                 </div>
//             </div>
//         </div>
//         <div className={s.menupreview}>
//             <p>View Showreel</p>
//         </div>
//      </div>
//    </div>
//    ) 
// }
'use client'

import React, {useEffect, useRef} from 'react';
import styles from "./home.module.scss";
import { useScroll, motion } from 'framer-motion';

export default function Paragraph ({value})  {


    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'start 0.25']
   })

   useEffect( () => {
       scrollYProgress.on("change", e => console.log(e))
   }, [])
    
   

     return (
        <motion.p 
         className={styles.paragraph}
         ref={element}
         style={{opacity: scrollYProgress}}
         >
         {value}
        </motion.p>

     )



}
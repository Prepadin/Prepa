'use client'

import React, { useRef} from 'react';
import styles from "./home.module.scss";
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Paragraph ({value})  {


    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.7', 'start 0.25']
   })

  
   const words = value.split(" ");

     return (
        <p 
         className={styles.paragraph}
         ref={element}
         style={{opacity: scrollYProgress}}
         >
         {
             words.map( (word, i) => {
                const start = i / words.length;
                const end = start + ( 1 / words.length);
                console.log([start, end]);
                return <Word key={i} range={[start, end]} progress={scrollYProgress}>{word}</Word>
             })
         }
        </p>

     )

}

const Word = ({children, range, progress}) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <spam  className={styles.word} >
            <spam className={styles.shadow}>{children}</spam>
        <motion.span style={{opacity: opacity}} >
        {children}
        </motion.span>
        </spam>
    )
}
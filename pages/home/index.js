//import Rock from "components/rock"
import { Layout } from 'layouts/default'
import s from './home.module.scss'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import cn from 'clsx'


const Rock = dynamic(() => import('/components/rock'), {
   ssr:false
  })


  const WebGL = dynamic(
    () => import('components/webglos').then(({ WebGL }) => WebGL),
    { ssr: false }
  )


export default function Home () {
    const container =  useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    
    })

   
return (
  
       <Layout>
        <main className={s.main}>
            <div className={s.canvas}>
                <WebGL/>
                </div>
        <div className={s.rock}>
        <Rock />
        </div>
        <div style={{height: "10vh"}}></div>
        <div>
        <div ref={container}>
        <Slider progress={scrollYProgress} direction="left"/>  
        <Slider1 progress={scrollYProgress} direction="right"/>
        {/* <Slider3 progress={scrollYProgress} direction="left"/>  */}
        </div>
        </div>
        <div style={{height: "40vh"}}></div>
       <div className={s.provide} >
        <p className={cn(s.title, 'h3')}>
            We provide our partners with exceptional digital solutions that bring strategic value and make their businesses thrive.
        </p>
       </div>
       <div style={{height: "60vh"}}></div>
        </main>
        </Layout>
       
        
    )
}


const Slider = (({progress, direction}) => {
    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-350 * dir, 150 * dir])
    return (
    <motion.div className={s.vision2} style={{x}}>

    <Phrase/> 
    
    

    </motion.div>
   )

}) 

const Slider1 = (({progress, direction}) => {
    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [50 * dir, 250 * dir])
    return (
    <motion.div className={s.vision2} style={{x}}>

    <Phrase1/> 
    
    

    </motion.div>
   )
}) 

// const Slider3 = (({progress, direction}) => {
//     const dir = direction == "left" ? -1 : 1;
//     const x = useTransform(progress, [0, 1], [-350 * dir, 150 * dir])
//     return (
//     <motion.div className={s.vision2} style={{x}}>

//     <Phrase2/> 
    
    

//     </motion.div>
//    )

// }) 


const Phrase = (() => {
      return(
        
        
        <div className={s.vision}>
            <p>
            We design robust    
               <span className={s.titis} > websites, apps, </span>
               
            </p>
        </div>
        

        
      )
    })


    const Phrase1 = (() => {
        return(
          
          
          <div className={s.vision}>
              <p>
              and other      
                 <span className={s.titis} > brand  </span>
                 experiences.
              </p>
          </div>
          
  
          
        )
      })

      const Phrase2 = (() => {
        return(
          
          
          <div className={s.vision}>
              <p>
              based on an adaptive technological vision
                 <span className={s.titis} >  </span>
                 
              </p>
          </div>
          
  
          
        )
      })
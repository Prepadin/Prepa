"use client"
import dynamic from 'next/dynamic'
import React from 'react';
//import Word from "components/word"
//import styles from "./home.module.scss";
//import Paragraph from "components/paragraph"
import Character from "components/character";
import s from './home.module.scss'
import { Layout } from 'layouts/default';
import cn from 'clsx'
import gsap from "gsap";

import { useEffect } from "react";




const WebGL = dynamic(
   () => import('components/webglos').then(({ WebGL }) => WebGL),
   { ssr: false }
 )

//const paragraph = "We build better businesses by creating joyful digital ideas,products and experiences that connect the hearts of brands to the hearts of their consumers."
const paragraph = "We blend technology, strategy, design & content to elevate brands in the digital space."
                  
                  
export default function Services ()  {
  let mm = gsap.matchMedia();

  
  
  useEffect(() => {
    mm.add('(max-width: 800px)', () => {
    gsap.to("#thirdCircle", {
      y: 130,
      duration: 5,
      scrollTrigger: {
        trigger: "#thirdCircle",
        markers: true,
        start: "top center",
        end: "bottom 80px",
        scrub: true
      }
    });
  });

  mm.add('(min-width: 800px)', () => {
    gsap.to("#thirdCircle", {
      y: 290,
      duration: 5,
      scrollTrigger: {
        trigger: "#thirdCircle",
        markers: true,
        start: "top center",
        end: "bottom 80px",
        scrub: true
      }
    });
  });


  }, []);

  useEffect(() => {
    
    mm.add('(max-width: 800px)', () => {
    gsap.to("#firstCircle", {
      y: 130,
      duration: 5,
      scrollTrigger: {
        trigger: "#firstCircle",
        markers: true,
        start: "top center",
        end: "bottom 80px",
        scrub: true
      }
    });
  });

  mm.add('(min-width: 850px)', () => {
    gsap.to("#firstCircle", {
      y: 290,
      duration: 5,
      scrollTrigger: {
        trigger: "#firstCircle",
        markers: true,
        start: "top center",
        end: "bottom 80px",
        scrub: true
      }
    });
  });

    }, []);

   
  useEffect(() => {
    let mm = gsap.matchMedia();
    
    mm.add('(max-width: 800px)', () => {
      gsap.to("#secondCircle", {
        y: 130,
        duration: 5,
        scrollTrigger: {
          trigger: "#secondCircle",
          markers: true,
          start: "top center",
          end: "bottom 80px",
          scrub: true
        }
      });
    });

    mm.add('(min-width: 850px)', () => {
      gsap.to("#secondCircle", {
        y: 250,
        duration: 5,
        scrollTrigger: {
          trigger: "#secondCircle",
          markers: true,
          start: "top center",
          end: "bottom 80px",
          scrub: true
        }
      });
    });

    // gsap.to("#secondCircle", {
    //   y: 20,
    //   duration: 5,
    //   scrollTrigger: {
    //     trigger: "#secondCircle",
    //     markers: true,
    //     start: "top center",
    //     end: "bottom 80px",
    //     scrub: true
    //   }
    // });
  }, []);
 


     return (
      <Layout className={s.home} >
        <main>
        <div>
          <h1  className="about">Services</h1>
        </div>
        <div className={s.canvas}>
        <WebGL />
      </div>
         <div className='redos' style={{height: "50vh"}}></div>
         {/* <Paragraph value={paragraph}/> */}
         {/* <Word value={paragraph} /> */}
         <Character value={paragraph}/>
         <div style={{height: "50vh"}}></div>
        <div className={s.containerweb}>
          <div id='firstCircle' className='prvo'>
          <h2 className={cn(s.sticky, 'h3')}>
          DESIGN
            </h2>          
        </div>
        <div className='drugo'>
        <div>
        <p className="p">
          For each project, we combine technical and methodological skills with creative insight and a profound sensitivity toward content. In our office and in our studio we are able to develop both the executive and the artistic aspects of every project.
        </p>
          </div>
          <div>
        <div className={s.separate}>
          <div className={s.leviblok}>
            <div>
            <h3 className={cn(s.title, 'h5')}>
              Animation
              </h3>
             
              </div>
              <div style={{height: "2vh"}}></div>
            <div>
            <h3 className={cn(s.title, 'h5')}>
              Graphic Design
              </h3>
              </div>
            <div>
            <div style={{height: "2vh"}}></div>
            <h3 className={cn(s.title, 'h5')}>
              Motion Design
              </h3>
              </div>
            </div>
            <div>
          <div>
          <h3 className={cn(s.title, 'h5')}>
            Art Direction
            </h3>
            </div>
          <div>
          <div style={{height: "2vh"}}></div>
          <h3 className={cn(s.title, 'h5')}>
            Social Content
            </h3>
            </div>
            <div style={{height: "2vh"}}></div>
          <div>
          <h3 className={cn(s.title, 'h5')}>
            Products Design
            </h3>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        
        <div style={{height: "10vh"}}></div>
        <div className={s.containerweb}>
          <div id="thirdCircle" className='prvo'>
          <h2 className={cn(s.sticky, 'h3')}>
          development
            </h2>          
        </div>
        <div className='drugo'>
        <div>
        <p className="p">
        We create advanced web products that resonate with audiences while providing our partners with a competitive edge. Everything we create is made from scratch, so your online presence will be spectacularly unique.
           </p>
          </div>
          <div>
        <div className={s.separate}>
          <div className={s.leviblok}>
            <div>
            <h3 className={cn(s.title, 'h5')}>
            Frontend Development
              </h3>
             
              </div>
              <div style={{height: "2vh"}}></div>
            <div>
            <h3 className={cn(s.title, 'h5')}>
            Backend Development
              </h3>
              </div>
            <div>
            <div style={{height: "2vh"}}></div>
            <h3 className={cn(s.title, 'h5')}>
            Campaign Development
              </h3>
              </div>
            </div>
            <div>
          <div>
          <h3 className={cn(s.title, 'h5')}>
          Motion Graphics
            </h3>
            </div>
          <div>
          <div style={{height: "2vh"}}></div>
          <h3 className={cn(s.title, 'h5')}>
          iOS/Android Apps
            </h3>
            </div>
            <div style={{height: "2vh"}}></div>
          <div>
            
          <h3 className={cn(s.title, 'h5')}>
            Products Design
            </h3>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        <div style={{height: "10vh"}}></div>
        <div className={s.containerweb}>
          <div id='secondCircle' className='prvo'>
          <h2 className={cn(s.sticky, 'h3')}>
          Content
            </h2>          
        </div>
        <div className='drugo'>
        <div>
        <p className="p">
        Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.
        </p>
          </div>
          <div>
        <div className={s.separate}>
          <div className={s.leviblok}>
            <div>
            <h3 className={cn(s.title, 'h5')}>
            Brand and Campaign
              </h3>
             
              </div>
              <div style={{height: "2vh"}}></div>
            <div>
            <h3 className={cn(s.title, 'h5')}>
            Illustration & Graphic 
              </h3>
              </div>
            <div>
            <div style={{height: "2vh"}}></div>
            <h3 className={cn(s.title, 'h5')}>
            Iconography
              </h3>
              </div>
            </div>
            <div>
          <div>
          <h3 className={cn(s.title, 'h5')}>
          Animation
            </h3>
            </div>
          <div>
          <div style={{height: "2vh"}}></div>
          <h3 className={cn(s.title, 'h5')}>
          Photo & Video
            </h3>
            </div>
            <div style={{height: "2vh"}}></div>
          <div>
          <h3 className={cn(s.title, 'h5')}>
          3D
            </h3>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
          
        <div style={{height: "100vh"}}></div>
        </main>
        </Layout>
     )



}

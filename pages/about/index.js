"use client"
import dynamic from 'next/dynamic'
import React from 'react';
import { useRef, useState } from 'react';
//import gsap from 'gsap';
//import { gsap } from 'gsap/react';
//import { button, useControls } from 'leva'
import s from './home.module.scss'
//import { Title } from 'components/intro'
import cn from 'clsx'
import { useStore } from 'lib/store'
//import { Button } from 'components/button'
//import { Layout } from '@/components/dom/Layout';
import { useFrame, useRect } from '@studio-freight/hamo'
import { Layout } from 'layouts/default'
import { useEffect } from 'react'
import { useIntersection, useWindowSize } from 'react-use'
//import { Link } from 'components/link'
import { Card } from 'components/card'
import { useScroll } from 'hooks/use-scroll'


// const Webgl = dynamic(() => import('@/components/webgl'), { ssr: false, });

const HorizontalSlides = dynamic(
    () =>
      import('components/horizontal-slides').then((mod) => mod.HorizontalSlides),
    { ssr: false }
  )

const WebGL = dynamic(
  () => import('components/webgl').then(({ WebGL }) => WebGL),
  { ssr: false }
)

// const HeroTextIn = ({ children, introOut }) => {
//     return (
//         <div className={cn(s['hide-text'], introOut && s['show-text'])}>
//             {children}
//         </div>
//     )
// }

const AppearTitle = dynamic(
    () => import('components/appear-title').then((mod) => mod.AppearTitle),
    { ssr: false }
)

const Parallax = dynamic(
    () => import('components/parallax').then((mod) => mod.Parallax),
    { ssr: false }
  )

// gsap.registerPlugin(useGSAP);


  
  // const thresholds = [0, 1000, 2000, 3000, 4000, 5000]
  


export default function About() {
  const [hasScrolled ] = useState()
  //const zoomRef = useRef(null)
  //const [zoomWrapperRectRef, zoomWrapperRect] = useRect()
  const { height: windowHeight } = useWindowSize()
  const introOut = useStore(({ introOut }) => introOut)

  //const [theme, setTheme] = useState('dark')
  const lenis = useStore(({ lenis }) => lenis)

 

  const [whyRectRef, whyRect] = useRect()
  const [cardsRectRef, cardsRect] = useRect()
  const [ whiteRect] = useRect()
  const [ featuresRect] = useRect()
  const [ inuseRect] = useRect()

  const addThreshold = useStore(({ addThreshold }) => addThreshold)

  useEffect(() => {
    addThreshold({ id: 'top', value: 0 })
  }, [])

  useEffect(() => {
    const top = whyRect.top - windowHeight / 2
    addThreshold({ id: 'why-start', value: top })
    addThreshold({
      id: 'why-end',
      value: top + whyRect.height,
    })
  }, [whyRect])


  useEffect(() => {
    const top = cardsRect.top - windowHeight / 2
    addThreshold({ id: 'cards-start', value: top })
    addThreshold({ id: 'cards-end', value: top + cardsRect.height })
    addThreshold({
      id: 'red-end',
      value: top + cardsRect.height + windowHeight,
    })
  }, [cardsRect])

  useEffect(() => {
    const top = whiteRect.top - windowHeight
    addThreshold({ id: 'light-start', value: top })
  }, [whiteRect])

  useEffect(() => {
    const top = featuresRect.top
    addThreshold({ id: 'features', value: top })
  }, [featuresRect])

  useEffect(() => {
    const top = inuseRect.top
    addThreshold({ id: 'in-use', value: top })
  }, [inuseRect])

  useEffect(() => {
    const top = lenis?.limit
    addThreshold({ id: 'end', value: top })
  }, [lenis?.limit])

  useScroll((e) => {
    console.log(window.scrollY, e.scroll, e.isScrolling, e.velocity, e.isLocked)
  })

  useFrame(() => {
    console.log('frame', window.scrollY, lenis?.scroll, lenis?.isScrolling)
  }, 1)

  const inUseRef = useRef()

  const [ setIsVisible] = useState(false)
  const intersection = useIntersection(inUseRef, {
    threshold: 0.2,
  })
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setIsVisible(true)
    }
  }, [intersection])
    
    return (
        <>
        
            <Layout className={s.home} >
            <div>
          <h1  className="about">About</h1>
        </div>
         <div className={s.canvas}>
        <WebGL />
      </div>
     
                <section className={s.hero}>
                    <div className="layout-grid-inner">
                      
                        {/* <SFDR className={cn(s.icon, introOut && s.show)} /> */}
                        <span className={cn(s.sub)}>
                            
                            
                        </span>
                    </div>

                    <div className={cn(s.bottom, 'layout-grid')}>
                        <div
                            className={cn(
                                'hide-on-mobile',
                                s['scroll-hint'],
                                hasScrolled && s.hide,
                                introOut && s.show
                            )}
                        >
                           
                        </div>
                       
                        {/* <Button
                        className={cn(s.cta, introOut && s.in)}
                        arrow

                        href="https://github.com/darkroomengineering/lenis"
                    >
                        Check it out on github
                    </Button> */}
                    </div>
                </section>
                <section className={s.why} data-lenis-scroll-snap-align="start">
                    <div className="layout-grid">
                        <h2 className={cn(s.sticky, 'h2')}>
                            <AppearTitle>Who we are</AppearTitle>
                        </h2>
                        <aside className={s.features} ref={whyRectRef}>
                            <div className={s.feature}>
                                <p className="p">
                                We makes digital ideas, products and experiences. We are on a mission to explore, create meaning and provoke emotions through design and storytelling.
                                </p>
                            </div>
                            <div className={s.feature}>
                                <h3 className={cn(s.title, 'h4')}>
                                Believe
                                </h3>
                                <p className="p">
                                Our goal is to deliver amazing experiences that make people talk, and build strategic value for brands, tech, entertainment, arts & culture.
                                </p>
                            </div>
                            <div className={s.feature}>
                                <h3 className={cn(s.title, 'h4')}>
                                Good to know
                                </h3>
                                <p className="p">
                                We are driven by the ambition of a project rather than its scale. We believe that good ideas can grow anywhere.
                                </p>
                            </div>
                            <div className={s.feature}>
                                <h3 className={cn(s.title, 'h4')}>
                                Get it done !
                                </h3>
                                <p className="p">
                                Our ultimate goal is to create seamless and intuitive experiences that leave a lasting impression.
                                As a talented team of creatives, designers and developers, we pride ourselves on getting the job done.
                                </p>
                            </div>
                        </aside>
                    </div>
                </section>
                <section className={s.rethink}>
        <div className={cn('layout-grid', s.pre)}>
          <div className={s.highlight} data-lenis-scroll-snap-align="start">
            <Parallax speed={-0.5}>
              <p className="h2">
                <AppearTitle>We love what we do</AppearTitle>
              </p>
            </Parallax>
          </div>
          <div className={s.comparison}>
            <Parallax speed={0.5}>
              <p className="p">
              We are grateful for the freedom to grow as an agency, grateful for our team, and grateful for our clients. We love what we do. And we rock at it. 
              </p>
            </Parallax>
          </div>
        </div>
        <div className={s.cards} ref={cardsRectRef}>
          <HorizontalSlides>
            <Card
              className={s.card}
              number="01"
              text="Growing
              together through
              collaboration"
            />
            <Card
              className={s.card}
              number="02"
              text="We are all
              accountable for
              our own work"
            />
            <Card
              className={s.card}
              number="03"
              text="Being platform
              agnostic is the
              only way"
            />
            <Card
              className={s.card}
              number="04"
              text="We love long-term
              relationships"
            />
            <Card
              className={s.card}
              number="05"
              text="It’s all about honest
              communication"
            />
          </HorizontalSlides>
        </div>
      </section>
            </Layout>
        </>
    );
}

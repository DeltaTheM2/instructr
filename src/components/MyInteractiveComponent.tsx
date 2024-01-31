import React, { useEffect } from 'react';
import '../Style.scss';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const MyInteractiveComponent = () => {
    useEffect(() => {
        if(typeof window === 'undefined')
        {
            return;
        }
        gsap.registerPlugin(ScrollTrigger);
        gsap.to('header', {
            scale: 0.8,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: 'header',
                scrub: true,
                start: 'center top',
                end: 'bottom top'
            }
        });
        gsap.set('header', {'--opacity': 1});
        gsap.to('header', {
            '--opacity': 0,
            ease: 'power1.in',
            scrollTrigger: {
                trigger: 'header',
                scrub: true,
                start: 'center bottom',
                end: 'bottom bottom'
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <html>
        <header>
            <div className="gradient-bg">
                <svg xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
                </svg>
                <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
            </div>
            </div>
            <span className="text-container">
                Instructr
            </span>
            <span className='sub-text'>
                Moving Education towards the future
            </span>
            
    </header>
    <main>
        <section>
            something
        </section>
    </main>
    </html>
    );
};

export default MyInteractiveComponent;

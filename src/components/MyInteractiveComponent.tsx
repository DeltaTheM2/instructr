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
    <footer>
        Spoti &copy; 2024
    </footer>
    <a className='spoti-link'
    href='https://spotidevelopment.com'
    target="_blank" rel="noreferrer noopener">
        <svg className="w-9" viewBox="0 0 969 955" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="161.191" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle>
    <circle cx="806.809" cy="320.191" r="133.191" stroke="currentColor" stroke-width="20"></circle>
    <circle cx="695.019" cy="587.733" r="31.4016" fill="currentColor"></circle>
    <circle cx="272.981" cy="587.733" r="31.4016" fill="currentColor"></circle>
    <path d="M564.388 712.083C564.388 743.994 526.035 779.911 483.372 779.911C440.709 779.911 402.356 743.994 402.356 712.083C402.356 680.173 440.709 664.353 483.372 664.353C526.035 664.353 564.388 680.173 564.388 712.083Z" fill="currentColor"></path>
    <rect x="310.42" y="448.31" width="343.468" height="51.4986" fill="#FF1E1E"></rect>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M745.643 288.24C815.368 344.185 854.539 432.623 854.539 511.741H614.938V454.652C614.938 433.113 597.477 415.652 575.938 415.652H388.37C366.831 415.652 349.37 433.113 349.37 454.652V511.741L110.949 511.741C110.949 432.623 150.12 344.185 219.845 288.24C289.57 232.295 384.138 200.865 482.744 200.865C581.35 200.865 675.918 232.295 745.643 288.24Z" fill="currentColor"></path>
  </svg>
    </a>
    <a className="x-link" href="https://twitter.com/intent/follow?screen_name=Spoti_Dev" target="_blank" rel="noreferrer noopener">
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" fill="currentColor" />
  </svg>
</a>
    </html>
    );
};

export default MyInteractiveComponent;

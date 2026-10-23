import React, { useRef } from 'react'
import { explore1Img, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section id="experience" className="common-padding experience-section">
      <div className="screen-max-width">
        <div className="flex-center w-full my-20 overflow-hidden">
          <img id="chip" src={explore1Img} alt="Close-up concept render highlighting the camera design" className="experience-image" />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Technology should
            <br /> feel effortless.
          </h2>

          <p className="hiw-subtitle">
            A thoughtful concept for a more intuitive everyday experience.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
                <video className="pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                  <source src={frameVideo} type="video/mp4" />
                </video>
              </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">A glimpse into the experience · concept footage</p>
          </div>

          <div className="hiw-text-container">
                <div className="flex flex-1 justify-center flex-col">
                  <p className="hiw-text g_fadeIn">
                    The best technology often disappears into the background, leaving room for {' '}
                    <span className="text-white">
                      the moments that matter
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   This concept is an exploration of {' '}
                    <span className="text-white">
                      how a phone can fit more naturally into daily life
                    </span>,
                     with design taking a thoughtful step back.
                  </p>
                </div>
              

              <div className="flex-1 flex justify-center flex-col g_fadeIn">
                <p className="hiw-text">NEXORA DESIGN STUDY</p>
                <p className="hiw-bigtext">Made for what’s next</p>
                <p className="hiw-text">An independent iPhone 18 concept</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks
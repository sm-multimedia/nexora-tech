import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section id="top" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> A Nexora concept · 2026</p>
        <h1 id="hero" className="hero-title">iPhone <span>18</span></h1>
        <p className="hero-tagline">A new point of view.</p>
        <p className="hero-description">A vision for what your next iPhone could feel like.</p>
      </div>

      <div className="hero-media">
        <video className="hero-video pointer-events-none" autoPlay muted playsInline loop key={videoSrc} aria-label="Cinematic iPhone concept preview">
            <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      <div id="cta" className="hero-bottom">
        <a href="#highlights" className="hero-button">Discover the concept <span aria-hidden="true">↓</span></a>
        <p>Designed for possibility. Imagined by Nexora.</p>
      </div>
    </section>
  )
}

export default Hero
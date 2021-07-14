import React from 'react';
import Particles, {canvas,grab,push} from 'react-particles-js'; //repulse import maybe
import '../App.css';
import { Button } from './Button';
import '../HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-back.mp4" autoPlay loop muted />
            <Particles
                className='particles-container'
                params={{ 
                particles: { 
                    number: { 
                    value: 200, 
                    density: { 
                        enable: true, 
                        value_area: 1000, 
                    } 
                    }, 
                },
                interactivity: {
                    detect_on: canvas,
                    events: {
                      onhover: {
                        enable: true,
                        mode: grab
                      },
                      onclick: {
                        enable: true,
                        mode: push
                      },
                      resize: true
                    },
                    modes: {
                      grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 800,
                        size: 80,
                        duration: 2,
                        opacity: 0.8,
                        speed: 3
                      },
                      repulse: {
                        distance: 400,
                        duration: 0.4
                      },
                      push: {
                        particles_nb: 4
                      },
                      remove: {
                        particles_nb: 2
                      }
                    }
                  },
                }} 
            />
            <h1>Brandon Palomino</h1>
            <p>Welcome to my portfolio!</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Projects
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    Check out my Github! <i className='fa
                    fa-play-circle' />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;

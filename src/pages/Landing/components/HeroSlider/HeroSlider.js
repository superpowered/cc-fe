import React, {Component} from 'react';

import './HeroSlider.css';

import HeroSlide from './HeroSlide';
import CalloutCard from '../../../../shared/CalloutCard/CalloutCard';

class HeroSlider extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            activeSlide: 0
        }
    }


    render()
    {
        const slides = this.props.slides;

        if(!slides || !slides.length)
            return '';

        return (
            <div className="hero-slider">

                <nav className="hero-slider-nav">

                    <div className="wrapper">
                        <button className="hero-slider-arrow prev">
                            Prev
                        </button>

                        <ul className="hero-slider-dots">

                            {
                                slides.map((slide, index)=>
                                {
                                    return (
                                        <li key={index}>
                                            <button>
                                                {index}
                                            </button>

                                            <CalloutCard
                                                title={slide.preview_title}
                                                image={slide.main_image}
                                            />

                                        </li>
                                    );
                                })
                            }
                        </ul>

                        <button className="hero-slider-arrow next">
                            Next
                        </button>
                    </div>

                </nav>

                <div className="slider-track">

                    {slides.map((slide, index)=> <HeroSlide key={index} slide={slide}/>)}

                </div>

            </div>
        );
    }
}

export default HeroSlider;

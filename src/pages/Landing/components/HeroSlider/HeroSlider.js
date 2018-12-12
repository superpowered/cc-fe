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
        };
        this.interval = null;
    }

    componentDidMount = () =>
    {
        this.resetTimer();
    };

    goToSlide = (slide) =>
    {
        if(slide < 0 || slide > this.props.slides.length -1)
            return;

        this.setState({activeSlide: slide});
        this.resetTimer();
    };

    nextSlide = () =>
    {
        let slide = this.state.activeSlide + 1;
        if(slide >= this.props.slides.length)
            slide = 0;

        this.setState({activeSlide: slide});
        this.resetTimer();
    };

    prevSlide = () =>
    {
        let slide = this.state.activeSlide - 1;
        if(slide < 0)
            slide = this.props.slides.length -1;

        this.setState({activeSlide: slide});
        this.resetTimer();
    };

    resetTimer = () =>
    {
        if(this.interval)
            clearInterval(this.interval);
        this.interval = setInterval(this.nextSlide, 5000);
    };

    render()
    {
        const slides = this.props.slides;

        if(!slides || !slides.length)
            return '';

        return (
            <div className="hero-slider">

                <nav className="hero-slider-nav">

                    <div className="wrapper">
                        <button className="hero-slider-arrow prev" onClick={this.prevSlide} >
                            Prev
                        </button>

                        <ul className="hero-slider-dots">

                            {
                                slides.map((slide, index)=>
                                {
                                    return (
                                        <li key={index}
                                            className={index === this.state.activeSlide ? "active-slide" : ""}
                                            onClick={()=>this.goToSlide(index)}
                                        >
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

                        <button className="hero-slider-arrow next" onClick={this.nextSlide}>
                            Next
                        </button>
                    </div>

                </nav>

                <div className="slider-track">

                    {
                        slides.map((slide, index)=>
                        {
                            return (
                                <HeroSlide
                                    key={index}
                                    slide={slide}
                                    activeSlide={index === this.state.activeSlide}
                                />
                            );
                        })
                    }

                </div>

            </div>
        );
    }
}

export default HeroSlider;

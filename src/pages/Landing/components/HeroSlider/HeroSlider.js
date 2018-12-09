import React, {Component} from 'react';

import HeroSlide from './HeroSlide';

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
            <div className="hero-slider" style={{background:'black'}}>

                <nav className="hero-slider-nav">

                    <button className="hero-slider-arrow prev">
                        Prev
                    </button>

                    <ul className="hero-slider-dots">

                        {
                            slides.map((slide, index)=>
                            {
                                let image = null;
                                if(slide.main_image)
                                {
                                    const imageStyle = {backgroundImage: "url('"+slide.main_image+"')"};
                                    image = ( <div className="image" style={imageStyle}><img src={slide.main_image} /></div>);
                                }

                                return (
                                    <li key={index}>
                                        <button>
                                            {index}
                                        </button>
                                        <div className="slide-preview">
                                            <h3 className="title">
                                                {slide.preview_title}
                                            </h3>
                                            {image}
                                        </div>
                                    </li>
                                );
                            })
                        }
                    </ul>

                    <button className="hero-slider-arrow next">
                        Next
                    </button>

                </nav>

                <div className="slider-track">

                    {slides.map((slide, index)=> <HeroSlide key={index} slide={slide}/>)}

                </div>

            </div>
        );
    }
}

export default HeroSlider;

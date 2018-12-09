import React, {Component} from 'react';

class HeroSlide extends Component
{
    render()
    {
        const slide = this.props.slide;
        let background = null;
        if(slide.main_image)
        {
            const imageStyle = {
                backgroundImage: "url('"+slide.main_image+"')"
            };
            background = (
                <div className="background" style={imageStyle}>
                    <img src={slide.main_image} />
                </div>
            );
        }

        return (
            <div className="hero-slide">

                {background}

                <div className="wrapper">

                    <h4>
                        {slide.sub_title}
                    </h4>
                    <h1>
                        {slide.title}
                    </h1>
                    <div>
                        {slide.text}
                    </div>
                    <a className="button" href={slide.link}>
                        {slide.link_text ? slide.link_text : 'Learn More'}
                    </a>
                </div>

            </div>
        );
    }
}
export default HeroSlide;
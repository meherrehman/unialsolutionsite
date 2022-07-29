import React, { useState } from 'react';
import { TechnologyData } from "./TechnologyData"
import "./Technology.css";
function Technology() {
    const [Technologies] = useState(TechnologyData);
    return (
        <div className='my-4 home-page'>
            <div className=" icon-box-editable icons-4">
                <div className="icon-box-editable-wrapper">
                    <h2 className="icon-box-editable__title">
                        Industry Expertise
                    </h2>
                    <p className="icon-box-editable__description">
                        We’ve excelled our experience in a wide range of industries to bring valuable insights and provide our customers with the truly beneficial solutions.
                    </p>
                    {
                        Technologies.map((item) => {
                            return <a className="icon-box-editable__item hasLink" href="/">
                                <i class="fa-solid fa-arrow-right"></i>
                                <div className="icon-box-editable__wrapper">
                                    <div className="icon-box-editable__image">
                                        <img className="lazy" width="84" height="84" src={item.image} alt="" />
                                    </div>
                                    <p className="icon-box-editable__text">
                                        {item.imageTitle}
                                    </p>
                                </div>
                            </a>
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Technology;
import React from "react";
import "flowbite";
import {Carousel} from 'flowbite-react';
import cssModule from '../assets/styles/components/Carousal.module.scss';
import bannerImage from "../assets/datas/bannerImages";

function Banner(){
    return(
        <section className={cssModule.section__wrapper}>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 section__banner-wrapper">
                <Carousel slide={false}>
                    <img  srcSet={`${bannerImage.small} 570w, ${bannerImage.medium} 1200w,${bannerImage.large} 1920w ` }  alt="Travel banner" />     
                   
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                    />
                    <img
                    src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                    alt="..."
                    />
                </Carousel>
            </div>

        </section>
    )
}

export default Banner;
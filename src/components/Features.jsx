import React from 'react';
import { featuresData } from '../data';
import { BsArrowRight } from 'react-icons/bs';

export default function Features() {
  const {title, subtitle, list } = featuresData;
  

  return (
    <section className='my-[70px] xl:my-[150px]'>
      <div className="container mx-auto">
        <div className="text-center">
          <h2 
            className="h2 mb-5 xl:mb-12"
            data-aos='fade-down'
            data-aos-delay='100'
          >{title}</h2>
          <p 
            className="lead max-w-[585px] mx-16 xl:mb-12"
            data-aos='fade-down'
            data-aos-delay='200'
          >{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 gap-[50px] xl:grid-cols-2">
          {list.map((feature, index) => {
            const { image, bgImage, title, description, linkText, delay } = feature;

            return (
              <div 
                key={index}
                className="w-fullmax-w-[530px] h-[360px] flex flex-col items-center justify-center xl:flex-row xl:justify-start mx-auto"
                data-aos='zoom-in-right'
                data-aos-offset='100'
            data-aos-delay={delay}
              >
                <div className="hidden xl:flex absolute top-0 right-0 -z-10">
                  <img src={bgImage} alt="" />
                </div>
                <div className="">
                  <img src={image} alt="" style={{ width: '150px', height: '150px'}}/>
                </div>
                <div className="max-w-[220px]">
                  <h3 className="h3 mb-4">{title}</h3>
                  <p className="font-light italic gapi-x-2 group">{description}</p>
                <div className="flex items-center gap-x-2 group">
                  <a className='text-primary font-bold' href="#">{linkText}</a>
                  <BsArrowRight className='text-xl text-accent-primary group-hover:ml-[5px] transition-all'/>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import React from 'react';
import {ctaData} from '../data';
import { BsArrowRight } from 'react-icons/bs'


export default function CtaSection() {

  const { title, subtitle, btnText1, btnText2 } = ctaData;

  return (
    <section 
      className='my-[75px] xl:my-[150px] border-t-2'
      data-aos='fade-up'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <div className="py-12 text-center xl:text-left">
            <h2 
              className='h2 mb-5'
              data-aos='fade-up'
              data-aos-delay='300'
            >{title}</h2>
            <p 
              className="lead"
              data-aos='fade-up'
            >{subtitle}</p>
          </div>
          <div className="flex flex-col xl:flex-row gap-y-4 gap-x-[30px]">
            <button className='btn btn-secondary'>{btnText1}</button>
            <button className="btn2 btn-quaternary flex items-center gap-x-[10px] group">
            <p>{btnText2}</p>
            <BsArrowRight className="text-2xl text-red-300 group-hover:text-white transition-all" />
          </button>
          </div>
        </div>
      </div>
    </section>
  )
}

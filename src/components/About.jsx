import React from "react";
import { aboutData } from "../data";

export default function About() {
  const { image, title, subtitle } = aboutData;

  return (
    <section 
      className="my-[30px] xl:mt-[100px]"
      data-aos='fade-up'
      data-aos-offset='350'
    >
      <div className="container mx-auto">
        <div className="bg-green-300 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-[60px]">
          <div className="flex-1"
            data-aos='zoom-in-left'
          >
            <img src={image} alt="" />
          </div>
          <div className="flex-1 xl:-12">
            <h2 
              className="h2 mb-10"
              data-aos='fade-up'
              data-aos-delay='300'
            >{title}</h2>
            <p 
              className="max-w-[474px] mx-auto lx:mx-0"
              data-aos='fade-up'
              data-aos-delay='400'
            >{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

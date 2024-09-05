/* eslint-disable prettier/prettier */
/* eslint-disable import/order */ 
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { TextGenerateEffect } from './ui/text-generate-effect'
import {title, testimonials} from '@/data'
import {Button} from "@nextui-org/button";
import React from 'react';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const hero = () => {
    return (
    <section className='min-h-[89vh]' id='home'>
        <div className="container flex flex-wrap items-center justify-center mx-auto mb-10 pd:flex-row">
            <div className="mb-5 lg:mb-0 lg:w-1/2">
                <TextGenerateEffect words={title.header}/>
                <p className='max-w-2xl mb-0 text-justify lg:text-xl'>{title.subHeader}</p>
                <div className="flex justify-center mt-10 mb-5">
                    <Button color="primary" type='button' variant="shadow">
                        Download CV
                    </Button>
                </div>
            </div>
            <div className="lg:w-1/2 relative w-[300px] h-[300px] lg:h-[400px]">
                <Image 
                    alt="Hero Image"
                    className='ml-auto'
                    height={400}
                    src="/images/hero-image.png"
                    width={400}
                    />
            </div>
        </div>
        <div className='container mx-auto'>
            <h1 className="text-xl font-bold leading-snug tracking-wide text-black lg:text-2xl dark:text-white">
                Kind words from 
                <span className="text-primary"> some testimonials </span>
            </h1>
            <div className="relative flex flex-col items-center justify-center overflow-hidden antialiased rounded-md">
                <InfiniteMovingCards
                    direction="right"
                    items={testimonials}
                    speed="normal"
                />
             </div>      
        </div>
    </section>
  )
}

export default hero
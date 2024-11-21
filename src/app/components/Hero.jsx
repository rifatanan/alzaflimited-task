'use client'
import React, { useState } from 'react'
import hero from '/public/Image/Hero/hero.png'
import Dynamic from './Dynamic';

const Hero = ({value}) => {
	console.log(value);
	
	return (
		<div className="container mx-auto h-[391px] flex justify-center" style={{
			backgroundImage:`url(${hero.src})`,
			backgroundRepeat:'no-repeat',
			backgroundSize: 'cover'
		}}>
			<div className='w-[65%] flex justify-start relative'>
				<Dynamic value={value} lebel={0}/>
			</div>
		</div>
	)
}

export default Hero

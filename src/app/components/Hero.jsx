'use client'
import React from 'react'
import hero from '/public/Image/Hero/hero.png'
import Dynamic from './Dynamic';

const Hero = ({data}) => {
	
	return (
		<div className="container mx-auto h-[391px] flex justify-center" style={{
				backgroundImage:`url(${hero.src})`,
				backgroundRepeat:'no-repeat',
				backgroundSize: '100% 391'
			}}>
			<div className='w-[65%] flex justify-start relative'>
				<Dynamic data={data} level={0}/>
			</div>
			<div></div>
		</div>
	)
}

export default Hero

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/Image/Nav/logo.png'
import search from '../../../public/Image/Nav/search.png'
import { CloudIcon, LoveIcon, ProfileIcon, ShopIcon } from '../../../public/SVG/icon'

const NavBar = () => {
  return (
	<div className='container'>
		<div className='flex justify-center bg-[#F0F1F1] '>
			<div className='w-[65%] h-[25px] flex justify-between items-center font-[400] text-[12px] leading-[15.6px] '>
				<ul className='flex gap-[32px]'>
					<li className='text-[#F97316]'>
						<select name="language" id="language">
							<option>English</option>
							<option>Bangla</option>
						</select>
					</li>
					<li>Help Center</li>
					<li>Helpline: 0964781656</li>
				</ul>
				<ul className='flex gap-[32px]'>
					<li>Become a Seller</li>
					<li>Order Track</li>
					<li className='color-[#F97316]'>
						<Link href="">Sign up</Link>/
						<Link href="">Login</Link>
					</li>
				</ul>
			</div>
		</div>
		<div className='flex justify-center'>
			<div className='bg-[#FFFF] w-[65%] flex justify-between items-center h-[70px] gap-[20px]'>
				<Link href='/'>
					<Image src={logo} height={37.88} width={129} alt='logo'></Image>
				</Link>
				<div className='bg-[#EFF0F5] w-full h-[44px] rounded-[10px] flex justify-end'>
					<input type="text"  className='w-full bg-[#EFF0F5] focus:outline-none rounded-[10px] pl-[10px]' placeholder='Search Product'/>
					<button className='bg-[#F97316] w-[47px] h-[44px] rounded-[10px] flex justify-center items-center'>
						<Image src={search} height={17.46} width={17.46} alt='logo'></Image>
					</button>
				</div>
				<div className='w-[120px] h-[32px] flex gap-[12px] justify-evenly items-center'>
					<button><ProfileIcon></ProfileIcon></button>
					<button><LoveIcon></LoveIcon></button>
					<button><ShopIcon></ShopIcon></button>
				</div>
				<div className='bg-[#F88D43] w-[168px] h-[44px] flex items-center rounded-[10px]'>
					<CloudIcon></CloudIcon>
					<p className='font-[400] text-[#FFFFFF] text-[16px] leading-[24.09px]'>Cloud Service</p>
				</div>
			</div>
		</div>
	</div>
  )
}

export default NavBar

import React, { useState } from 'react'
import { ArrowIcon } from '../../../public/SVG/icon';

const Dynamic = ({data, level}) => {
	const [hoveredIndex,setHoveredIndex] = useState(false);

	return (
		<div className={`h-[381px] w-[230px] bg-white ${level<1?'':'left-[230px]'} pt-[6px] top-0 flex flex-col gap-[11px] absolute hover:border-r-[1px]`}>
			{
				data && data?.map((item,index) => {
					return (
						<div
							key={index}
							className='flex justify-between'
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(false)}
						>
							<div className='hover:text-[#F97316] text-black cursor-pointer w-full flex justify-between items-center px-[10px]'>
								<p className={`font-[400] text-[12px] leading-[15.6px] whitespace-nowrap`}>{item.title}</p>
								<div className={`${hoveredIndex ===index  && item?.childrens?.length>0?'visible':'hidden'}`}>
									<ArrowIcon></ArrowIcon>
								</div>
							</div>
							{
								hoveredIndex === index && item?.childrens?.length>0 ?<Dynamic data={item.childrens} level={level+1}/>:""
							}
						</div>
					)
				})
			}
		</div>
	)
}

export default Dynamic
import React, { useState } from 'react'
import { ArrowIcon } from '../../../public/SVG/icon';

const Dynamic = ({value, lebel}) => {
	const [hoverFirst,setHoverFirst] = useState(false);

	return (
		<div className={`h-[381px] w-[230px] bg-white ${lebel<1?'':'left-[230px]'} top-0 flex flex-col pl-[10px] gap-[11px] absolute  border-r-[2px]`}>
			{
				value && value?.map((item,index) => {
					return (
						<div
							key={index}
							className='flex justify-between'
							onMouseEnter={() => setHoverFirst(index)}
							onMouseLeave={() => setHoverFirst(false)}
						>
							<div className='hover:text-[#F97316] text-black cursor-pointer w-full flex justify-between items-center'>
								<p className={`font-[400] text-[12px] leading-[15.6px] whitespace-nowrap`}>{item.title}</p>
								<div className={`${hoverFirst ===index  && item?.childrens?.length>0?'visible':'hidden'}`}>
									<ArrowIcon></ArrowIcon>
								</div>
							</div>
							{
								hoverFirst === index && item?.childrens?.length>0 ?<Dynamic value={item.childrens} lebel={lebel+1}/>:""
							}
						</div>
					)
				})
			}
			
		</div>
	)
}

export default Dynamic

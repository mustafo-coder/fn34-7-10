import React from 'react';
import image from '../assets/demo.svg';
import check from '../assets/check.svg';

const Demo = () => {
	return (
		<div className='bg-[#0070A0] pb-5'>
			<div className='w-full h-full container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8  items-center px-4'>
				<img
					className='w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] py-4 mx-auto'
					src={image}
					alt='Demo'
				/>
				<div className='text-center lg:text-left'>
					<h2 className='tracking-wide text-3xl sm:text-4xl md:text-5xl text-white font-normal font-franc pt-20 pb-5'>
						Set, forget, and then track.
					</h2>
					<p className='tracking-wider font-inter font-normal text-white leading-7'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<div className='flex flex-col pt-4 text-center lg:text-left'>
						<span className='flex gap-2 items-center justify-center lg:justify-start'>
							<img src={check} alt='check' />
							<p className='tracking-wide font-inter font-normal text-white leading-7'>
								Understand your options
							</p>
						</span>
						<span className='flex gap-2 items-center justify-center lg:justify-start'>
							<img src={check} alt='check' />
							<p className='tracking-wide font-inter font-normal text-white leading-7'>
								No lock-ins
							</p>
						</span>
						<span className='flex gap-2 items-center justify-center lg:justify-start'>
							<img src={check} alt='check' />
							<p className='tracking-wide font-inter font-normal text-white leading-7'>
								You own the shares
							</p>
						</span>
					</div>
					<button className='font-inter font-normal text-white border-none text-lg tracking-wide leading-7 py-6 px-10 mt-6 bg-[#0070A0] hover:bg-[#003D56]'>
						Book a Demo
					</button>
				</div>
			</div>
		</div>
	);
};

export default Demo;

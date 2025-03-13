import React from 'react';

const Hero = () => {
	return (
		<div className='container max-w-[1130px] flex gap-[153px] mt-[75px] mx-auto px-4 sm:px-6 lg:px-8'>
			<div className='w-full md:w-[525px] mt-[56px]'>
				<h1 className='font-franc text-[32px] sm:text-[42px] lg:text-[58px] text-[#1F1F1F] mb-5 tracking-normal leading-[1.2] '>
					Your everyday tasks, automated.
				</h1>
				<p className='font-inter text-[16px] sm:text-[18px] lg:text-[20px] text-[#1F1F1F] mb-7 leading-[1.5] tracking-normal'>
					Whirl lets you design and streamline your everyday tasks and workflows
					in just a few clicks.
				</p>
				<div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
					<button className='font-inter text-[15px] sm:text-[17px] text-white leading-[27px] tracking-normal bg-[#0070A0] hover:bg-[#0050a0] transition-all px-6 sm:px-8 py-2'>
						Book a demo
					</button>
					<button className='font-inter text-[15px] sm:text-[17px] text-[#0070A0] hover:text-[#0045a0] transition-all leading-[27px] tracking-normal py-2'>
						Learn more <i className='fa-solid fa-arrow-right'></i>
					</button>
				</div>
			</div>
			<div className='hidden md:block'>
				<img src='./hero-image.svg' alt='' className='w-full h-auto' />
			</div>
		</div>
	);
};

export default Hero;

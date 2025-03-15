import React from 'react';
import pin from '../assets/pin.svg';
import arrow from '../assets/arror-down.svg';
import smile from '../assets/smile.svg';
import light from '../assets/lightt.svg';
import letter from '../assets/letter.svg';
import tw from '../assets/tw.svg';

const About = () => {
	return (
		<div className='bg-[#F7F9FA]'>
			<div className='container py-20  font-franc mt-8 px-5 md:px-[100px]'>
				<h2 className='font-normal text-[40px] md:text-[60px] max-w-[880px] pb-9'>
					We will take care of everything, so you can get back to relaxing.
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
					<div className='w-full max-w-[550px]'>
						<div className='border-[#C2CDD8] border-y-2'>
							<div className='pt-4 pb-2 flex justify-between'>
								<div className='flex items-center gap-4'>
									<img src={pin} alt='' />
									<span className='text-2xl'>Anti-loss technology</span>
								</div>
								<button>
									<img className='cursor-pointer' src={arrow} alt='' />
								</button>
							</div>
							<h3 className='max-w-[460px] font-inter text-xl text-[#1F1F1F] pl-[50px] pt-4 pb-6'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</h3>
						</div>
						<div className='flex justify-between items-center border-y-2 border-[#C2CDD8] mt-0.5'>
							<div className='flex items-center gap-3'>
								<img src={smile} alt={smile} />
								<span className='text-[20px] text-[#626A72]'>
									Fully encrypted
								</span>
							</div>
							<button>
								<img className='cursor-pointer' src={arrow} alt='' />
							</button>
						</div>
						<div className='flex justify-between items-center border-y-2 border-[#C2CDD8] mt-0.5'>
							<div className='flex items-center gap-3'>
								<img src={letter} alt={letter} />
								<span className='text-[20px] text-[#626A72]'>
									Exchange easily
								</span>
							</div>
							<button>
								<img className='cursor-pointer' src={arrow} alt='' />
							</button>
						</div>
						<div className='flex justify-between items-center border-y-2 border-[#C2CDD8] mt-0.5'>
							<div className='flex items-center gap-3'>
								<img src={light} alt={light} />
								<span className='text-[20px] text-[#626A72]'>
									Plenty of options
								</span>
							</div>
							<button>
								<img className='cursor-pointer' src={arrow} alt='' />
							</button>
						</div>
					</div>
					<div className='flex justify-center'>
						<img src={tw} alt='' className='max-w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

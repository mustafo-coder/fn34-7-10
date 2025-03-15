import React from 'react';
import focus from '../assets/focus.svg';
import now from '../assets/now.svg';
import optimer from '../assets/optimer.svg';
import carded from '../assets/carded.svg';
import light from '../assets/light.svg';
import hand from '../assets/hand.svg';
import dollar from '../assets/dollar.svg';

const Stats = () => {
	return (
		<div>
			<div className='container flex justify-center items-center flex-col'>
				<h2 className='text-[24px] leading-[38px] text-[#1F1F1F] font-inter mt-[39px]'>
					Trusted by 50,000+ companies
				</h2>
				<div className='flex flex-wrap gap-5 sm:gap-15 px-10 justify-center mt-10'>
					<img className='max-sm:w-[100px]' src={focus} alt='focus' />
					<img className='max-sm:w-[100px]' src={now} alt='NowInTech' />
					<img className='max-sm:w-[100px]' src={optimer} alt='Optimer' />
					<img className='max-sm:w-[100px]' src={carded} alt='Carded' />
				</div>

				<div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-[32px] mt-[160px]'>
					<div className='max-w-[355px] bg-[#FAEA73] p-[32px]'>
						<div>
							<img src={light} alt='light' />
						</div>
						<div className='mt-[8px] flex flex-col gap-[8px]'>
							<h2 className='text-[25px] text-[#1F1F1F] leading-[32px] font-franc'>
								Fast. Really fast.
							</h2>
							<p className='font-inter text-[15px] leading-[24px] text-[#1F1F1F]'>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>

					<div className='max-w-[355px] bg-[#CCEFF6] p-[32px]'>
						<div>
							<img src={dollar} alt='dollar' />
						</div>
						<div className='mt-[8px] flex flex-col gap-[8px]'>
							<h2 className='text-[25px] text-[#1F1F1F] leading-[32px] font-franc'>
								More bang for buck.
							</h2>
							<p className='font-inter text-[15px] leading-[24px] text-[#1F1F1F]'>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>

					<div className='max-w-[355px] bg-[#F7CEDC] p-[32px]'>
						<div>
							<img src={hand} alt='hand' />
						</div>
						<div className='mt-[8px] flex flex-col gap-[8px]'>
							<h2 className='text-[25px] text-[#1F1F1F] leading-[32px] font-franc'>
								Safe and secure.
							</h2>
							<p className='font-inter text-[15px] leading-[24px] text-[#1F1F1F]'>
								Ut enim ad minim veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo consequat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;

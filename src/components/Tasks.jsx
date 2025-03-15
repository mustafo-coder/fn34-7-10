import React from 'react';

import icon from '../assets/tasks-icon.svg';
import icon2 from '../assets/tasks-icon2.svg';
import icon3 from '../assets/tasks-icon3.svg';
import icon4 from '../assets/tasks-icon4.svg';

const Tasks = () => {
	return (
		<div className='tasks p-[50px]'>
			<div className='tasks-title max-w-[57%]'>
				<h2 className='font-franc font-normal text-[42px] leading-[50.4px] tracking-[0.2px] text-gray-900'>
					Your tasks, automated.
				</h2>
				<p className='font-intel font-normal text-[18px] leading-[27px] tracking-[0.2px] text-gray-600 mt-[21px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>
			<div className='tasks-cards flex mt-[68px] justify-between flex-wrap gap-6'>
				<div className='tasks-card min-w-[250px] max-w-[20.75%] flex-1'>
					<img src={icon} />
					<h3 className='font-franc font-normal text-[25px] leading-[31.25px] tracking-[0.2px] text-gray-900 mt-[7px]'>
						Learn your options.
					</h3>
					<p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0.2px] text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor.
					</p>
				</div>

				<div className='tasks-card min-w-[250px] max-w-[20.75%] flex-1'>
					<img src={icon2} />
					<h3 className='font-franc font-normal text-[25px] leading-[31.25px] tracking-[0.2px] text-gray-900 mt-[7px]'>
						Stay informed.
					</h3>
					<p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0.2px] text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et doloretro.
					</p>
				</div>

				<div className='tasks-card min-w-[250px] max-w-[20.75%] flex-1'>
					<img src={icon3} />
					<h3 className='font-franc font-normal text-[25px] leading-[31.25px] tracking-[0.2px] text-gray-900 mt-[7px]'>
						Automate it all.
					</h3>
					<p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0.2px] text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor ipsum.
					</p>
				</div>

				<div className='tasks-card min-w-[250px] max-w-[20.75%] flex-1'>
					<img src={icon4} />
					<h3 className='font-franc font-normal text-[25px] leading-[31.25px] tracking-[0.2px] text-gray-900 mt-[7px]'>
						Stay informed.
					</h3>
					<p className='font-inter font-normal text-[16px] leading-[24px] tracking-[0.2px] text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod incididunt ut labore et consectetur.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tasks;

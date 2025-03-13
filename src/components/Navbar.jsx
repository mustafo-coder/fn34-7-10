import React, { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='font-inter text-sm font-light'>
			<div className='w-full h-11 bg-primary flex justify-center items-center gap-1 text-center px-4'>
				<p className='text-white'>A Webflow template for SaaS products.</p>
				<a
					className='text-gray-300 flex justify-center items-center gap-1'
					href='#'
				>
					See all templates <i className='fa-solid fa-angle-right pt-0.5'></i>
				</a>
			</div>

			<nav className='w-full max-w-[1130px] mx-auto mt-6 flex justify-between items-center px-6 lg:px-0 '>
				<div className='flex items-center gap-10'>
					<a href='#'>
						<img src='./logo.svg' alt='error' className='h-10' />
					</a>
					<ul className='hidden md:flex justify-center items-center gap-8'>
						<li>
							<a className='hover:text-primary' href='#'>
								Features
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Pricing
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Integration
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Learn
							</a>
						</li>
					</ul>
				</div>

				<div className='hidden md:flex gap-4 justify-center items-center'>
					<button className='py-2 px-6 text-primary cursor-pointer hover:bg-primary hover:text-white transition-all'>
						Sign In
					</button>
					<button className='bg-primary py-2 px-6 text-white cursor-pointer hover:bg-white hover:text-primary transition-all'>
						Book a demo
					</button>
				</div>

				<div className='md:hidden'>
					<button onClick={() => setIsOpen(!isOpen)}>
						<i className='fa-solid fa-bars text-xl'></i>
					</button>
				</div>
			</nav>

			{isOpen && (
				<div className='md:hidden bg-white shadow-md mt-2 py-4 absolute w-full left-0 top-20 z-10'>
					<ul className='flex flex-col gap-4 items-center'>
						<li>
							<a className='hover:text-primary' href='#'>
								Features
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Pricing
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Integration
							</a>
						</li>
						<li>
							<a className='hover:text-primary' href='#'>
								Learn
							</a>
						</li>
					</ul>
					<div className='flex flex-col gap-2 items-center mt-4'>
						<button className='py-2 px-6 text-primary cursor-pointer hover:bg-primary hover:text-white transition-all w-[80%]'>
							Sign In
						</button>
						<button className='bg-primary py-2 px-6 text-white cursor-pointer hover:bg-white hover:text-primary transition-all w-[80%]'>
							Book a demo
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;

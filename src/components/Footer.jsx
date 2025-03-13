import React from 'react';

const Footer = () => {
	return (
		<div className='container py-5'>
			<div className='flex gap-3 max-md:gap-y-10 max-md:flex-wrap justify-between'>
				<div className='max-[475px]:w-full'>
					<a href='/'>
						<img src='/logo.svg' alt='logo' />
					</a>
					<p className='mt-3'>
						Built by{' '}
						<a className='text-primary' href='/'>
							Nikolai Bain
						</a>
					</p>
					<p>
						Powered by{' '}
						<a className='text-primary' href='/'>
							Webflow
						</a>
					</p>
				</div>
				<div>
					<h3 className='font-semibold sm:text-lg mb-3'>Info</h3>
					<ul className='font-semibold space-y-1'>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Features
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Pricing
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Blog
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Support
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Privacy Policy
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className='font-semibold sm:text-lg mb-3'>Admin</h3>
					<ul className='font-semibold space-y-1'>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Style Guide
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Licenses
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Instructions
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Changelog
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								Password
							</a>
						</li>
						<li>
							<a className='text-[#626A72] hover:text-primary text-sm' href='/'>
								404
							</a>
						</li>
					</ul>
				</div>
				<div className='max-md:w-full'>
					<h3 className='sm:text-lg font-semibold'>Newsletter</h3>
					<h4 className='sm:text-lg font-semibold md:max-w-[250px] mt-3'>
						Sign up for the latest news, company insights, and Whirl updates.
					</h4>
					<form className='max-w-[250px] max-md:max-w-[300px] relative mt-5'>
						<input
							className='w-full h-full p-2 outline-0 border-b border-slate-200'
							type='email'
							placeholder='Your email'
						/>
						<i className='absolute text-primary right-2 top-1/2 -translate-y-1/2 fa fa-chevron-right'></i>
					</form>
				</div>
			</div>
			<div className='border-t border-slate-200 mt-10 py-8 flex justify-between items-center gap-3 max-sm:flex-col max-sm:justify-center'>
				<p className='max-sm:order-2 max-sm:text-center max-sm:mt-5 max-sm:text-sm'>
					© 2022 Whirl. All Rights Reserved. Illustrations by
					<a className='text-primary ms-1' href='/'>
						Streamline.
					</a>
				</p>
				<ul className='flex gap-5 items-center'>
					<li>
						<a className='text-2xl' href='/'>
							<i className='fab fa-twitter'></i>
						</a>
					</li>
					<li>
						<a className='text-2xl' href='/'>
							<i className='fab fa-linkedin'></i>
						</a>
					</li>
					<li>
						<a className='text-2xl' href='/'>
							<i className='fab fa-facebook'></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;

// ! git clone https://github.com/mustafo-coder/fn34-7-10.git

// !! git add . --- o'zgargan fayllarni gitga qo'ish olish
// !! git commit -m "comment here" --- izoh yozish
// !! git branch --- qaysi branchda ekanligizni ko'rsatadi

// ? Agar branch main da bo'lsa pastagi kod yoziladi
// ! git checkout -b your-name --- yangi branch yaratish

// !! git push origin your-name

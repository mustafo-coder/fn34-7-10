import React from 'react';
import img_improv from '/blog_improvments.png';
import img_tips from '/blog_tips_tricks.png';
import img_news from '/blog_news.png';

const Blog = () => {
	return (
		<div className='bg-[#F7F9FA] font-franc'>
			<div className='container bg-[#F7F9FA] w-full lg:max-w-[1130px] mx-auto py-14 lg:py-20 md:py-18 px-4'>
				{/* Section Title */}
				<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 md:pb-6 lg:pb-8'>
					<h2 className='text-[#1F1F1F] text-[28px] md:text-[36px] lg:text-[42px]'>
						Get smarter, with our blog.
					</h2>
					<a href='#'>
						<p className='text-[#0070A0] text-[10px] md:text-[12px] lg:text-xl'>
							See All Posts
						</p>
					</a>
				</div>

				{/* Card */}
				<div className='flex flex-wrap md:flex-nowrap justify-center gap-6'>
					{/* Card: Improvements */}
					<div className='card bg-white w-full sm:w-1/3'>
						<img
							className='w-full h-auto block'
							src={img_improv}
							alt='blog about improvements'
						/>
						<div className='mt-6 pb-6 px-4 lg:px-6'>
							<p className='text-[#2C90C9] inline text-xs pt-1 pb-1 px-4 bg-[#E6F7FF]'>
								Improvements
							</p>
							<h4 className='text-[#1F1F1F] pt-2 pb-3 text-[16px] md:text-[18px] lg:text-[22px]'>
								Automating Daily Tasks from Your Phone
							</h4>
							<p className='text-[#1F1F1F] text-xs lg:text-sm'>
								Dicta nihil ratione corrupti. Aut dolorem dolores omnis
								laboriosam ratione sequi.
							</p>
							<p className='text-[#1F1F1F] text-[10px] md:text-xs lg:text-sm mt-3'>
								April 24, 2022
							</p>
						</div>
					</div>
					{/* Card: Tips & Tricks */}
					<div className='card bg-white w-full sm:w-1/3'>
						<img
							className='w-full h-auto block'
							src={img_tips}
							alt='blog about tips & tricks'
						/>
						<div className='mt-6 pb-6 px-4 lg:px-6'>
							<p className='text-[#2C90C9] inline text-xs pt-1 pb-1 px-4 bg-[#E6F7FF]'>
								Tips & Tricks
							</p>
							<h4 className='text-[#1F1F1F] pt-2 pb-3 text-[16px] md:text-[18px] lg:text-[22px]'>
								Can You Automate Group Learning?
							</h4>
							<p className='text-[#1F1F1F] text-xs lg:text-sm'>
								Dicta nihil ratione corrupti. Aut dolorem dolores omnis
								laboriosam ratione sequi.
							</p>
							<p className='text-[#1F1F1F] text-[10px] md:text-xs lg:text-sm mt-3'>
								April 24, 2022
							</p>
						</div>
					</div>

					{/* card-news */}
					<div className='card bg-white w-[355px]'>
						<img src={img_news} alt='blog about news' />
						<div className='mt-6 ml-6 pb-[26px]'>
							<p className='text-[#2C90C9] inline text-xs space-[0.4px] pt-0.5 pb-1 px-4 bg-[#E6F7FF]'>
								News
							</p>
							<h4 className='text-[#1F1F1F] text-[25px] pt-2 pb-[11px] space-[0.2px]'>
								Our $3,000,000 B Round Investors
							</h4>
							<p className='text-[#1F1F1F] text-sm space-[0.2px] font-inter '>
								Eos ipsum et est quis neque cum. Quis autem est eligendi amet
								animi eaque. Itaque minus illo delectus vel vitae dolores minus.
							</p>
							<p className='text-[#1F1F1F] text-xs font-inter mt-4'>
								April 24, 2022
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;

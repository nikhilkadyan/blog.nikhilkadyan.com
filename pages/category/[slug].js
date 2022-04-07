import Link from 'next/link';
import Layout from '../../components/layout';

const blogs = [
	{
		slug: 'elements',
		date: '4/2/22',
		tags: ['Wallpaper'],
		name: 'Elements',
		excerpt: 'Introducing Elements, a minimal wallpaper pack for your devices.',
		imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1648860243627-6SAYDZ51BVK398V1H290/Pickup3x2.png?format=1500w',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		slug: 'apple-pixel-park-night',
		date: '4/2/22',
		tags: ['Wallpaper', 'Design', 'Apple Park'],
		name: 'Apple Pixel Park (But Night)',
		excerpt: 'Nighttime descends on Apple Pixel Park.',
		imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1647959022243-DPXKLSDW3UHCCSKKZDZE/AppleNightPixel.png?format=1500w',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		slug: 'trust-the-process',
		date: '4/2/22',
		tags: ['Design', 'Merch', 'Wallpaper'],
		name: 'Trust the Process(or)',
		excerpt: 'Live long, and compute.',
		imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1647102753212-3S8LLIUIWHZ4P0C3B8MH/TrusttheProcess3x2.png?format=1500w',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
	{
		slug: 'apple-pixel-park',
		date: '4/2/22',
		tags: ['Design', 'Apple Park', 'Wallpaper'],
		name: 'Apple Pixel Park',
		excerpt: '173,250 itty bitty rainbow pixels come together to form the iconic Apple Arch inside the courtyard of Apple Park.',
		imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1645813511641-D3CCLYL2RV7OYRDXTC5B/PixelPark3x2.png?format=1500w',
		imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
	},
]

export default function Category() {
	return (
		<Layout>
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-8 sm:pt-4 sm:pb-8 lg:max-w-7xl">
					<h2 className="sr-only">Blogs</h2>

					<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
						{blogs.map((blog) => (
							<div key={blog.slug}>
								<Link href={`/blog/${blog.slug}`} passHref>
									<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
										<img
											src={blog.imageSrc}
											alt={blog.imageAlt}
											className="w-full h-full object-center object-cover cursor-pointer"
										/>
									</div>
								</Link>
								<p className="mt-6 text-sm font-thin text-gray-900">
									{blog.date} | {blog.tags.map(tag => {
										let text = tag;
										if (blog.tags.length > 0 && blog.tags.indexOf(tag) !== blog.tags.length - 1) text = text + ', '
										return (
											<span key={tag} href={`/category/${tag}`} passHref>{text}</span>
										)
									})}
								</p>
								<Link href={`/blog/${blog.slug}`} passHref>
									<div className="mt-3 text-3xl text-gray-700 cursor-pointer inline-block">{blog.name}</div>
								</Link>
								<p className='font-thin mt-3'>{blog.excerpt}</p>
								<Link href={`/blog/${blog.slug}`} passHref>
									<p className='mt-3 inline-block border-b border-black font-thin cursor-pointer'>Read More</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

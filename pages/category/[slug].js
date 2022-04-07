import Link from 'next/link';
import Layout from '../../components/layout';

const blogs = [
	// {
	// 	id: 2,
	// 	name: 'Nomad Tumbler',
	// 	href: '#',
	// 	price: '$35',
	// 	imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
	// 	imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
	// },
	// {
	// 	id: 3,
	// 	name: 'Focus Paper Refill',
	// 	href: '#',
	// 	price: '$89',
	// 	imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
	// 	imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
	// },
	// More products...
	{
		slug: 1,
		date: '4/2/22',
		tags: ['Wallpaper'],
		name: 'Elements',
		excerpt: 'Introducing Elements, a minimal wallpaper pack for your devices.',
		imageSrc: 'https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1648860243627-6SAYDZ51BVK398V1H290/Pickup3x2.png?format=1500w',
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
								<Link href={`/blog/${blog.slug}`} >
									<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
										<img
											src={blog.imageSrc}
											alt={blog.imageAlt}
											className="w-full h-full object-center object-cover cursor-pointer"
										/>
									</div>
								</Link>
								<p className="mt-6 text-sm font-thin text-gray-900">
									{blog.date} | {blog.tags.map(tag => <>{tag}</>)}
								</p>
								<Link href={`/blog/${blog.slug}`}>
									<div className="mt-4 text-3xl text-gray-700 cursor-pointer inline-block">{blog.name}</div>
								</Link>
								<p className='font-thin'>{blog.excerpt}</p>
								<Link href={`/blog/${blog.slug}`}>
									<p className='mt-4 text-thin text-lg hover:underline cursor-pointer inline-block'>Read More</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

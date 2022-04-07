import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<div className='lg:max-w-3xl'>
				<h1 className="text-4xl uppercase pt-16">
					About.
				</h1>
				<p className='mt-8 font-thin'>
					<span className='font-bold'>BASIC ('ber.sIk'; Adj)</span>: lover of all things mainstream, popular, and trending in the world of .
				</p>
				<p className='mt-8 font-thin'>
					Ever since I used my first iPhone to click those stunning pictures and being able to run just about everything with max performance, I've had an incredible affinity for Apple - from the iMac to their iPod socks. Their products gave a then young me tools that pushed the boundaries of what I felt capable of and provided me with a creative reach that I didn't know was possible.
				</p>
				<p className='mt-8 font-thin'>
					Decades later I decided to become a Web Developer due to the appreciation of the facinating tech world.
				</p>
			</div>

		</Layout>
	)
}

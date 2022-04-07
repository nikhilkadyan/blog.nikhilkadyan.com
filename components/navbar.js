import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiTwitter, FiInstagram, FiMail, FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const NavigationLinks = ({ showDesktopOnly }) => {
    const router = useRouter();
    return (
        <div className={showDesktopOnly ? 'hidden sm:flex sm:space-x-4' : 'animate__animated animate__fadeInUp'}>
            <div className={router.pathname === '/' ? 'sm:border-b border-black' : ''}>
                <Link href={'/'}>Blog</Link>
            </div>
            <div className={router.pathname === '/archive' ? 'sm:border-b border-black' : ''}>
                <Link href={'/archive'}>Archive</Link>
            </div>
            <div className={router.pathname === '/about' ? 'sm:border-b border-black' : ''}>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    )
}

const SocialLinks = () => {
    const instagramUsername = 'kadyan.sol';
    const emailAddress = 'hi@nikhilkadyan.com';
    const twitterUsername = 'kadyanikhil';
    return (
        <div className='h-full flex space-x-5 items-center justify-center text-xl'>
            <a href={'https://instagram.com/' + instagramUsername} target='_blank' rel="noreferrer">
                <FiInstagram />
            </a>
            <a href={'mailto:' + emailAddress} target='_blank' rel="noreferrer">
                <FiMail />
            </a>
            <a href={'https://twitter.com/' + twitterUsername} target='_blank' rel="noreferrer">
                <FiTwitter />
            </a>
        </div>
    )
}

export default function Navbar() {
    const [openMenu, setMenu] = useState(false);
    return (
        <nav className={`fixed top-0 left-0 z-50 bg-white w-screen sm:h-auto sm:px-20 ${openMenu ? 'h-screen' : 'h-auto'}`}>
            <div className='flex uppercase justify-between py-6 sm:py-8 px-6 '>
                <div className='flex items-center space-x-4'>
                    <div className='text-3xl -mt-2'>🍿</div>
                    <NavigationLinks showDesktopOnly={true} />
                </div>
                <div className='hidden sm:block'>
                    <SocialLinks />
                </div>
                <button className='sm:hidden text-3xl' onClick={() => setMenu(prev => !prev)}>
                    {openMenu ? <GrClose /> : <FiMenu />}
                </button>
            </div>
            {openMenu &&
                <div className='flex items-center space-evenly flex-wrap bg-white h-full -mt-24'>
                    <div className='w-full' />
                    <div className='text-5xl space-y-2 text-center w-full'>
                        <NavigationLinks />
                    </div>
                    <div className='text-center w-full'>
                        <SocialLinks />
                    </div>
                </div>
            }
        </nav>
    )
}

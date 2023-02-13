import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AkiraImage from '../../public/images/akira-pill.png';
import ThemeSwitcher from './ThemeSwitcher';
import { MenuIcon } from './icons';

export default function Navbar(): ReactElement<'nav'> {
  return (
    <nav className='bg-peach dark:bg-medium-slate-blue h-12 flex items-center lg:pr-64 lg:pl-64'>
      <div className='lg:pl-4'>
        <Link href='/'>
          <div className='flex items-center justify-center [&>img]:hover:rotate-12 gap-1'>
            <Image width={40} height={20} className='pl-4' src={AkiraImage.src} alt='Akira Logo' />
            <h2 className='text-xl'>Akira</h2>
          </div>
        </Link>
      </div>
      <div className='hidden lg:flex lg:gap-12 lg:pl-12'>
        <Link href='/about'>About</Link>
        <Link href='/works'>Works</Link>
        <Link href='/other'>Other</Link>
        <Link href='/other'>Contact</Link>
      </div>
      <div className='flex flex-row ml-auto pr-4 pl-4 md:ml-auto md:pr-8'>
        <ThemeSwitcher />
        <div className="lg:hidden pl-4">
          <button className="flex items-center px-3 py-3 border-2 rounded">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}

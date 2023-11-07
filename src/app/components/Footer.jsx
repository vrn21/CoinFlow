import Image from 'next/image'
import React from 'react'
import {Link} from "@nextui-org/react"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    
    <div className=" bg-gradient-to-tr from-black to-gray-900 h-[350px] w-screen mt-32 shadow-lg">
            <div className="flex items-center sm:justify-around sm:pt-20 sm:flex-row flex-col pt-10 ">
                <Image src="/Vector.svg" width={550} height={82} className="max-w-[200px] sm:max-w-none pb-5" alt="logo"/>
                <div className="flex gap-9">
                    <div className="flex flex-col justify-center gap-3 text-center">
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Pricing</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Docs</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Careers</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Developer</Link>
                    </div>
                    <div className="flex flex-col justify-center gap-3 text-center">
                        <Link href="#" color="foreground" className="text-slate-300 hover:text-slate-300 sm:text-base text-sm">Socials</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Github</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Twitter/X</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300 sm:text-base text-sm">Linkedin</Link>
                    </div>
                </div>
                
            </div>
            <hr className="w-50vw bg-white sm:m-10 m-6" />
            <div className='flex sm:justify-around sm:flex-row flex-col items-center gap-2'>
                <span className=' font-bold sm:text-3xl text-xl'>CoinFlow</span>
                <p className='sm:text-base text-xs text-gray-500 '>Made with ❤️ by vrn21 </p>
                <div className='flex gap-3 '>
                    <Link href="https://github.com/vrn21/" color="foreground" className=" gap-1">
                        <GitHubIcon />
                    </Link>
                    <Link href="https://x.com/theVRN21" color="foreground" className="gap-1">
                        <TwitterIcon />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hi-from-varun-/" color="foreground" className="gap-1">
                        <LinkedInIcon />
                    </Link>
                </div>
            </div>
        </div>
        

    
  )
}

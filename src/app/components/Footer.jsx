import Image from 'next/image'
import React from 'react'
import {Link} from "@nextui-org/react"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    
    <div className=" bg-gradient-to-tr from-black to-gray-900 h-[350px] w-full mt-32 shadow-lg">
            <div className="flex justify-around pt-20">
                <Image src="/Vector.svg" width={550} height={82} fclassName="" alt="logo"/>
                <div className="flex gap-9">
                    <div className="flex flex-col justify-center gap-3 text-center">
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Pricing</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Docs</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Careers</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Developer</Link>
                    </div>
                    <div className="flex flex-col justify-center gap-3 text-center">
                        <Link href="#" color="foreground" className="text-slate-200 hover:text-slate-300">Socials</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Github</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Twitter/X</Link>
                        <Link href="#" color="foreground" className="text-slate-500 hover:text-slate-300">Linkedin</Link>
                    </div>
                </div>
                
            </div>
            <hr className="w-50vw bg-white m-10 " />
            <div className='flex justify-around'>
                <span className=' font-bold text-3xl'>CoinFlow</span>
                <p>Made with ❤️ by vrn21 </p>
                <div className='flex gap-3'>
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

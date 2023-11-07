import React from 'react'
import {Checkbox} from "@nextui-org/react";



export default function Checkboxes() {
  return (
    <div className=" flex flex-col sm:mt-32  sm:ml-20 gap-2 mt-56 ml-5">

    <Checkbox defaultSelected size='lg' className="font-bold max-w-[300px] sm:max-w-none">We get all your transactions in one place</Checkbox>
    <p className="text-xs pl-10 sm:max-w-md text-gray-500 max-w-xs sm:text-base">Our platform offers comprehensive wallet scanning for a wide range of blockchains,
       including <span className="font-bold italic ">Solana</span>, Ethereum, Polygon, and more. 
       Get all your transactions in one centralized hub,  
       simplifying the way you manage your digital assets.</p>

    <Checkbox defaultSelected size='lg' className="font-bold">Real-time Transaction Tracking</Checkbox>
    <p className="text-xs pl-10 sm:max-w-md text-gray-500 max-w-xs sm:text-base">With our real-time tracking, you can monitor your cryptocurrency transactions as they happen. Whether it&rsquo;s on Solana, Ethereum, Polygon, or other blockchains, we keep you up-to-date and in control, so you never miss a beat in the fast-paced world of digital assets.</p>

    <Checkbox defaultSelected size='lg' className="font-bold">Enhanced Security Measures</Checkbox>
    <p className="text-xs pl-10 sm:max-w-md text-gray-500 max-w-xs sm:text-base"> We take security seriously. With advanced encryption and robust security measures, your digital assets are safe and sound. Rest easy while we safeguard your transactions across various blockchains, including Solana, Ethereum, Polygon, and more.</p>

    <Checkbox defaultSelected size='lg' className="font-bold">User-Friendly Interface </Checkbox>
    <p className="text-xs pl-10 sm:max-w-md text-gray-500 max-w-xs sm:text-base">Who needs a user-friendly interface, anyway? Our platform is designed to baffle even the savviest users. Just kidding! We&rsquo;ve got an interface so easy even your grandma could navigate it. Say goodbye to tech nightmares!</p>
    <Checkbox defaultSelected size='lg' className="font-bold">Comprehensive Transaction Insights</Checkbox>
    <p className="text-xs pl-10 sm:max-w-md text-gray-500 max-w-xs sm:text-base">Who wants in-depth insights into their transactions? Boring! We offer comprehensive transaction insights that will have you drowning in data. But hey, you asked for it! Get ready to be the Sherlock Holmes of your wallet.</p>
    </div>
  );
} 

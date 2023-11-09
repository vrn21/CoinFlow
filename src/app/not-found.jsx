import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className=' flex justify-center align-center gap-4 w-auto h-auto'>
        <p className='font-bold text-lg '>Are you lost?</p>
        <Link href="/">
          <Button color='primary'>Go Home</Button>
        </Link>
    </div>
  )
}

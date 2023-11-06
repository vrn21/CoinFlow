import { Button } from "@nextui-org/react";


export default function Hero() {
  return (
    <div className="flex justify-center p-[185px] flex-col"> 
    <div>
      <p className=" text-8xl font-bold leading-72 text-center block">Not your ordinary <br/> Blockchain  
            <span className="italic font-semibold"> scanner</span>
      </p>
    </div>
    <div className="flex justify-center">
      <Button radius="full" className="bg-gradient-to-tr from-yellow-400 to-orange-400 text-white shadow-lg text-2xl  p-7 mt-10 hover:bg-orange-400">
      Lets start scanning &#8594;
    </Button>
    </div>
    </div>
  )
}

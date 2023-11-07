import { Button } from "@nextui-org/react";


export default function Hero() {
  return (
    <div className="flex justify-center flex-col sm:p-[185px] pt-24"> 
    <div>
      <p className="sm:text-8xl sm:leading-72 text-5xl leading-10 font-bold  text-center block">Not your ordinary <br/> Blockchain  
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

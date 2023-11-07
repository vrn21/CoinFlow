import {Popover, PopoverTrigger, PopoverContent,Button } from "@nextui-org/react";


export default function DocsNavbar(){
    return(
    <Popover placement="bottom" showArrow={true} color="foreground">
        <PopoverTrigger color="foreground">
          <Button>Docs</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <div className="text-small font-bold">Docs?</div>
            <div className="text-tiny">
                <p>When life gives you lemons,</p>
                <p>you take &rsquo;em, so here&rsquo;s a lemon🍋</p>
            </div>
          </div>
        </PopoverContent>
      </Popover> 
    )
}
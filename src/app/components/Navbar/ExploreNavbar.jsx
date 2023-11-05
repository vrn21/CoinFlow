import {Tooltip,Button} from "@nextui-org/react";


export default function ExploreNavbar(){
    return(
        <Tooltip  color="default" offset={-7} content="Lets Explore the blockchain world together" className="capitalize">
            <Button variant="flat" color="foreground" className="capitalize">
                Explore
            </Button>
          </Tooltip>
    )
}
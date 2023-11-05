import {Dropdown, DropdownMenu, DropdownTrigger, DropdownItem,Button } from "@nextui-org/react";


export default function ContactNavbar(){
    return(
        <Dropdown>
        <DropdownTrigger>
            <Button variant="light">Contact</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Link Actions">
            <DropdownItem key="X" href="https://x.com/theVRN21">
            X / Twitter
            </DropdownItem>
            <DropdownItem key="github" href="https://github.com/vrn21">
            GitHub
            </DropdownItem>
            <DropdownItem key="linkedin" href="https://www.linkedin.com/in/hi-from-varun-/">
            Linkedin
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    )
}
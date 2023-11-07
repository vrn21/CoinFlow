'use client';
import React from "react" ;
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle} from "@nextui-org/react";
import AboutNavbar from "./Navbar/AboutNavbar";
import ContactNavbar from "./Navbar/ContactNavbar";
import DocsNavbar from "./Navbar/DocsNavbar";
import ExploreNavbar from "./Navbar/ExploreNavbar";
import ConnectWalletButton from "./ConnectWalletButton";



export default function NavbarC(){
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
            </NavbarContent>
            <NavbarBrand>
                <h1 className="text-3xl font-bold">CoinFlow</h1>
            </NavbarBrand>
            <NavbarContent className=" hidden gap-4 justify-center sm:flex" >
                <NavbarItem>
                    <AboutNavbar />
                </NavbarItem>
                <NavbarItem>
                    <ContactNavbar />
                </NavbarItem>
            <NavbarItem>
                <ExploreNavbar />
            </NavbarItem>
            <NavbarItem>
                <DocsNavbar />
            </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
            <NavbarItem>
                <ConnectWalletButton />
            </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                <NavbarItem>
                    <AboutNavbar />
                </NavbarItem>
                <NavbarItem>
                    <ContactNavbar />
                </NavbarItem>
                <NavbarItem>
                    <ExploreNavbar />
                </NavbarItem>
                <NavbarItem>
                    <DocsNavbar />
                </NavbarItem>
            </NavbarMenu>
        </Navbar>
        )


}
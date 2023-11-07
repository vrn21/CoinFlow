'use client';
import React from "react" ;
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import AboutNavbar from "./Navbar/AboutNavbar";
import ContactNavbar from "./Navbar/ContactNavbar";
import DocsNavbar from "./Navbar/DocsNavbar";
import ExploreNavbar from "./Navbar/ExploreNavbar";
import ConnectWalletButton from "./ConnectWalletButton";



export default function NavbarC(){
    
    return (
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand>
                <h1 className="text-3xl font-bold">CoinFlow</h1>
            </NavbarBrand>
            <NavbarContent className=" sm:flex gap-10 justify-center " >
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
        </Navbar>
        )


}
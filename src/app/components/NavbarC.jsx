'use client';
import React from "react" ;
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, button, ButtonGroup} from "@nextui-org/react";
import AboutNavbar from "./Navbar/AboutNavbar";
import ContactNavbar from "./Navbar/ContactNavbar";
import DocsNavbar from "./Navbar/DocsNavbar";
import ExploreNavbar from "./Navbar/ExploreNavbar";


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
                <Button as={Link} color="primary" href="#" variant="flat">
                Connect Wallet
                </Button>
            </NavbarItem>
            </NavbarContent>
        </Navbar>
        )


}
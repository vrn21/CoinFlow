import React from 'react'
import {Navbar, NavbarBrand, Link } from "@nextui-org/react";

export default function Scanner() {
  return (
    <div>
        <div>
        <Navbar shouldHideOnScroll isBordered>
            <NavbarBrand >
                <Link href="/" color='foreground'>
                    <h1 className="text-3xl font-bold">CoinFlow</h1>
                </Link>
            </NavbarBrand>
        </Navbar>
        </div>
    </div>
  )
}

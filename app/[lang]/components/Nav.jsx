"use client";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "react-scroll";
import { useState } from "react";

const Nav = ({ lang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: lang.navigation.home,
            href: "home",
        },
        {
            name: lang.navigation.about,
            href: "about-me",
        },
        {
            name: lang.navigation.projects,
            href: "projects",
        },
        {
            name: lang.navigation.contact,
            href: "contact",
        },
    ];

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth="xl"
            className={`${
                isMenuOpen
                    ? "bg-black-pearl fixed border-none"
                    : "bg-transparent fixed border-none pb-4"
            }`}
            isBordered={false}
            isBlurred={isMenuOpen}
        >
            <NavbarContent>
                <NavbarBrand>
                    <h1 className="font-bold cyberpunk-font-og text-3xl">
                        Merce
                    </h1>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex gap-2" justify="end">
                {menuItems.map((item) => (
                    <NavbarItem key={item.name} className="h-full px-1">
                        <Link
                            to={item.href}
                            smooth
                            duration={500}
                            spy={true}
                            className="link"
                            activeClass="border-cyan-300 h-full inline-flex items-center border-b-2 text-cyan-300 font-medium"
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden pr-2 text-yellow-300"
            />

            <NavbarMenu className="bg-black-pearl gap-6 flex justify-center items-center">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem
                        key={item.name}
                        className={`${index === 0 ? "pt-4" : ""}`}
                    >
                        <Link
                            to={item.href}
                            smooth
                            duration={500}
                            spy={true}
                            onClick={() => setIsMenuOpen(false)}
                            className="link"
                            activeClass="border-cyan-300 h-full inline-flex items-center border-b-2 text-cyan-300 font-medium"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default Nav;

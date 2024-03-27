"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

const Navbar: React.FC = () => {
    const navMenuRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const expandNavMenu = () => {
        if (navMenuRef.current) {
            navMenuRef.current.style.transition = "";
            navMenuRef.current.classList.replace(
                "translate-x-full",
                "translate-x-0",
            );
        }
    };

    const collapseNavMenu = () => {
        if (navMenuRef.current) {
            navMenuRef.current.classList.replace(
                "translate-x-0",
                "translate-x-full",
            );
            setTimeout(() => {
                if (navMenuRef.current) {
                    navMenuRef.current.style.transition = "none";
                }
            }, 510);
        }
    };

    return (
        <nav className="fixed left-0 right-0 top-0 z-10 flex items-center justify-center bg-blue-950 py-3 text-white">
            {/* nav container */}
            <div className="flex w-[90%] max-w-[1200px] items-center">
                {/* logo */}
                <Link onClick={collapseNavMenu} href="/">
                    <Image
                        className="w-[13vmax] max-w-36 sm:w-[10vmax]"
                        src="/talkready-logo.png"
                        alt="talkready logo"
                        width={700}
                        height={200}
                    />
                </Link>

                {/* nav menu */}
                <div
                    ref={navMenuRef}
                    className="absolute left-0 top-0 h-screen w-full flex-1 translate-x-full bg-blue-950 transition-transform duration-500 ease-in-out sm:relative sm:ms-10 sm:block sm:h-auto sm:w-auto sm:translate-x-0"
                >
                    {/* mobile nav close button */}
                    <button
                        id="nav-collapse-btn"
                        className="m-4 ms-auto block sm:hidden"
                        onClick={collapseNavMenu}
                    >
                        <XCircleIcon className="w-8" />
                    </button>
                    <ul className="list-none pt-3 sm:flex sm:flex-grow sm:pt-0">
                        <li className="text-center">
                            <Link
                                onClick={collapseNavMenu}
                                className={clsx(
                                    "block px-3 py-2 hover:bg-blue-900 hover:underline sm:rounded-md",
                                    { underline: pathname === "/" },
                                )}
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="mb-5 text-center sm:mb-0">
                            <Link
                                onClick={collapseNavMenu}
                                className={clsx(
                                    "block px-3 py-2 hover:bg-blue-900 hover:underline sm:rounded-md",
                                    { underline: pathname === "/contact" },
                                )}
                                href="/contact"
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="ms-auto flex justify-center gap-5 text-center">
                            <Link
                                onClick={collapseNavMenu}
                                className="block rounded-md px-3 py-2 hover:bg-blue-900"
                                title={"search"}
                                href={"#"}
                            >
                                <MagnifyingGlassIcon className={"w-6"} />
                            </Link>
                            <Link
                                onClick={collapseNavMenu}
                                className="block rounded-md px-3 py-2 hover:bg-blue-900"
                                title={"cart"}
                                href={"#"}
                            >
                                <ShoppingBagIcon className={"w-6"} />
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* mobile nav open button */}
                <button className="ms-auto sm:hidden" onClick={expandNavMenu}>
                    <Bars3Icon className="w-8" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

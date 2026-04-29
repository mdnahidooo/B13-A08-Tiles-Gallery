"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import NavLinks from "./NavLinks";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <nav className="bg-[#F5F5DC] border-b border-[#e5e5d8] relative z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

                {/* Left: Hamburger + Logo */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-[#3D2B1F] text-2xl"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>

                    <Link href="/" className="leading-tight">
                        <h1 className="text-2xl font-bold text-[#3D2B1F]">
                            Tiles
                        </h1>
                        <p className="text-sm text-[#E07A5F] tracking-widest">
                            Gallery
                        </p>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8">
                    <NavLinks />
                </div>

                {/* Right Button */}
                <div className="flex gap-2">
                    <Link href={'/signin'}>
                        <button className="px-4 py-2 text-sm bg-[#E07A5F] text-white rounded-md hover:opacity-90 transition">
                            SignIn
                        </button>
                    </Link>
                    <Link href={'/signup'}>
                        <button className="px-4 py-2 text-sm bg-[#E07A5F] text-white rounded-md hover:opacity-90 transition">
                            SignUp
                        </button>
                    </Link>

                    <Button onClick={handleSignOut} size="sm" variant="danger">SignOut</Button>
                </div>
            </div>

            {/* Left Slide Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#F5F5DC] border-r border-[#e5e5d8] shadow-lg transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close */}
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setOpen(false)}
                        className="text-[#3D2B1F] text-2xl"
                    >
                        <HiOutlineX />
                    </button>
                </div>

                {/* Mobile Links */}
                <div className="flex flex-col px-6 gap-6 mt-6">
                    <NavLinks onClick={() => setOpen(false)} />
                </div>
            </div>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40"
                />
            )}
        </nav>
    );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks({ onClick }) {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "All Tiles", path: "/tiles" },
        { name: "My Profile", path: "/my-profile" },
    ];

    const isActive = (path) => pathname === path;

    return (
        <>
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    onClick={onClick}
                    className={`text-sm font-medium pb-1 border-b-2 transition ${isActive(link.path)
                            ? "border-[#E07A5F] text-[#E07A5F]"
                            : "border-transparent text-[#3D2B1F] hover:text-[#E07A5F]"
                        }`}
                >
                    {link.name}
                </Link>
            ))}
        </>
    );
}
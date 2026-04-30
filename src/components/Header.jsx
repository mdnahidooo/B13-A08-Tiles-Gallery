"use client";
import React from 'react';
import Link from "next/link";
import "animate.css";
import { Button } from '@heroui/react';
import Image from 'next/image';


const Header = () => {
    return (
        <div>
            <div className="relative h-[70vh] w-full rounded-xl overflow-hidden shadow-2xl max-w-10/12 mx-auto my-10">

                {/* Background Image */}
                <div className="absolute inset-0">
                    {/* Background Image */}
                    <Image
                        src="https://plus.unsplash.com/premium_photo-1673014202612-44eb31c40140?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Tiles Banner"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-black/10" />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Content */}
                <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center text-white">

                    <div className="max-w-2xl pl-20">

                        {/* Brand */}
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight animate__animated animate__fadeInDown">
                            Tiles <br />
                            <span className="text-[#E07A5F] text-2xl md:text-3xl tracking-widest animate__animated animate__fadeInUp animate__delay-1s">
                                Gallery
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl mt-4 mb-6 text-gray-300 animate__animated animate__fadeInUp animate__delay-1s">
                            Discover handcrafted tile designs that bring warmth, texture,
                            and timeless beauty to your spaces.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-2s">

                            <Link href="/all-tiles">
                                <Button className="bg-[#E07A5F] text-white px-6 py-3 hover:scale-105 transition-transform">
                                    Browse Collection
                                </Button>
                            </Link>

                            <Link href="#">
                                <Button
                                    variant="outline"
                                    className="border-white text-white hover:bg-white hover:text-black transition"
                                >
                                    Learn More
                                </Button>
                            </Link>

                        </div>

                    </div>

                </div>

                {/* Decorative Glow */}
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#E07A5F]/20 blur-3xl rounded-full animate-pulse" />
            </div>
        </div>
    );
};

export default Header;
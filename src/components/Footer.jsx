import Link from "next/link";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#3D2B1F] text-[#F5F5DC]">
            <div className="max-w-7xl mx-auto px-6 py-25 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold">Tiles</h2>
                    <p className="text-[#E07A5F] tracking-widest text-sm">
                        Gallery
                    </p>
                    <p className="mt-4 text-sm text-[#d6cfc7] leading-relaxed">
                        A curated tile collection showcasing aesthetics, texture, and design inspiration for modern spaces.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="md:ml-20">
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-sm text-[#d6cfc7]">
                        Email: support@tilesgallery.com
                    </p>
                    <p className="text-sm text-[#d6cfc7] mt-2">
                        Phone: +8801518951964
                    </p>
                    <p className="text-sm text-[#d6cfc7] mt-2">
                        Address: Dhaka, Bangladesh
                    </p>
                </div>

                {/* Social Links */}
                <div className="md:ml-25">
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

                    <div className="flex gap-4 text-lg">
                        <Link href="https://www.facebook.com/" className="hover:text-[#E07A5F] transition">
                            <FaFacebookF />
                        </Link>
                        <Link href="https://www.instagram.com/" className="hover:text-[#E07A5F] transition">
                            <FaInstagram />
                        </Link>
                        <Link href="https://x.com/" className="hover:text-[#E07A5F] transition">
                            <FaTwitter />
                        </Link>
                        <Link href="#" className="hover:text-[#E07A5F] transition">
                            <FaGithub />
                        </Link>
                    </div>

                    <p className="mt-6 text-sm text-[#d6cfc7]">
                        Stay connected for new tile collections and updates.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#5a3c2c] py-4 text-center text-sm text-[#d6cfc7]">
                © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
            </div>
        </footer>
    );
}
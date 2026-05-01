"use client";

import UpdateUserProfileModal from "@/components/UpdateUserProfileModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card, Button } from "@heroui/react";
import Link from "next/link";

const MyProfilePage = () => {
    const { data: session } = authClient.useSession();
    const userInfo = session?.user;

    return (
        <div className="min-h-screen bg-[#F5F5DC] py-12 px-4">

            <div className="max-w-5xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#3D2B1F]">
                        My Profile
                    </h1>
                    <p className="text-[#3D2B1F]/70 mt-2">
                        Manage your account and personal information
                    </p>
                </div>

                {/* Profile Card */}
                <Card className="bg-white/80 backdrop-blur-md border border-[#e5e5d8] shadow-xl rounded-2xl p-8 flex flex-col items-center">

                    {/* Avatar Section */}
                    <div className="relative">
                        <Avatar className="h-28 w-28 border-4 border-[#E07A5F] shadow-lg">
                            <Avatar.Image
                                alt={userInfo?.name}
                                src={userInfo?.image}
                                referrerPolicy="no-referrer"
                            />
                            <Avatar.Fallback>
                                {userInfo?.name?.charAt(0)}
                            </Avatar.Fallback>
                        </Avatar>
                    </div>

                    {/* Name */}
                    <h2 className="text-2xl font-bold text-[#3D2B1F] mt-4">
                        {userInfo?.name}
                    </h2>

                    {/* Email */}
                    <p className="text-[#3D2B1F]/60 text-sm">
                        {userInfo?.email}
                    </p>

                    {/* Decorative line */}
                    <div className="w-24 h-0.5 bg-[#E07A5F] my-6 rounded-full" />

                    {/* Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-center">

                        <div className="bg-[#F5F5DC] p-4 rounded-xl border border-[#e5e5d8]">
                            <p className="text-sm text-[#3D2B1F]/60">Status</p>
                            <p className="font-semibold text-[#3D2B1F]">
                                Active User
                            </p>
                        </div>

                        <div className="bg-[#F5F5DC] p-4 rounded-xl border border-[#e5e5d8]">
                            <p className="text-sm text-[#3D2B1F]/60">Member Since</p>
                            <p className="font-semibold text-[#3D2B1F]">
                                2026
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="flex gap-4 mt-8">

                        <UpdateUserProfileModal />

                        <Link href={'#'}>
                            <Button className="bg-[#3D2B1F] text-white px-6">
                                Settings
                            </Button>
                        </Link>

                    </div>

                </Card>

            </div>
        </div>
    );
};

export default MyProfilePage;
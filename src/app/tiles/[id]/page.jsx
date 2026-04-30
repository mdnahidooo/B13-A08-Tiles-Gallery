import getData from '@/lib/getData';
import Image from 'next/image';
import React from 'react';

const TileDetailsPage = async ({ params }) => {
    const { id } = await params;
    const tiles = await getData();

    const tile = tiles.find(t => t.id == id)

    if (!tile) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-xl font-bold text-red-500">Tile not found</h1>
            </div>
        );
    }
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left - Image */}
                    <div className="relative w-full h-112 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Right - Details */}
                    <div className="space-y-6">

                        {/* Title */}
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-[#3D2B1F] leading-tight">
                                {tile.title}
                            </h1>

                            <p className="text-sm text-[#3D2B1F]/60 mt-2">
                                Created by{" "}
                                <span className="font-medium text-[#E07A5F]">
                                    {tile.creator}
                                </span>
                            </p>
                        </div>

                        {/* Description Card */}
                        <div className="bg-[#F8F4EA] p-4 rounded-lg border border-[#e5e5d8]">
                            <p className="text-[#3D2B1F]/80 leading-relaxed text-sm md:text-base">
                                {tile.description}
                            </p>
                        </div>

                        {/* Style */}
                        <div>
                            <h3 className="text-sm font-semibold text-[#3D2B1F] mb-1">
                                Style
                            </h3>
                            <p className="text-sm text-[#3D2B1F]/70">
                                {tile.style}
                            </p>
                        </div>

                        {/* Tags */}
                        <div>
                            <h3 className="text-sm font-semibold text-[#3D2B1F] mb-2">
                                Tags
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {tile.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-xs bg-[#E07A5F] text-white rounded-full hover:scale-105 transition"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-2">

                            <div className="bg-white border border-[#e5e5d8] rounded-lg p-3">
                                <p className="text-xs text-[#3D2B1F]/60">Category</p>
                                <p className="font-medium text-[#3D2B1F]">{tile.category}</p>
                            </div>

                            <div className="bg-white border border-[#e5e5d8] rounded-lg p-3">
                                <p className="text-xs text-[#3D2B1F]/60">Material</p>
                                <p className="font-medium text-[#3D2B1F]">{tile.material}</p>
                            </div>

                            <div className="bg-white border border-[#e5e5d8] rounded-lg p-3">
                                <p className="text-xs text-[#3D2B1F]/60">Dimensions</p>
                                <p className="font-medium text-[#3D2B1F]">{tile.dimensions}</p>
                            </div>

                            <div className="bg-[#E07A5F] text-white rounded-lg p-3 text-center">
                                <p className="text-xs opacity-80">Price</p>
                                <p className="text-lg font-bold">${tile.price}</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default TileDetailsPage;
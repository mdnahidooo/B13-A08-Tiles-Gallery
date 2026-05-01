import TileCard from '@/components/TileCard';
import getData from '@/lib/getData';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const AllTilesPage = async() => {
    const tiles = await getData();
    
    return (
        <div>
            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F] mb-3 relative inline-block">
                        All Tiles Collection
                        <span className="absolute -bottom-2 left-0 w-20 h-0.5 bg-[#E07A5F] rounded-full"></span>
                    </h2>

                    <p className="text-sm text-[#3D2B1F]/60">
                        Explore our complete range of curated tile designs for modern interiors
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {tiles.map((tile) => (
                        <TileCard key={tile.id} tile={tile} />
                    ))}
                </div>

                <div>
                    <Link href="/tiles">
                        <Button className="bg-[#E07A5F] text-white px-6 py-3 hover:scale-105 transition-transform w-full sm:w-auto">
                            Browse Collection
                        </Button>
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default AllTilesPage;
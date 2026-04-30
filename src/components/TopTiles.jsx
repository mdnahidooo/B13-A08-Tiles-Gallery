import TileCard from '@/components/TileCard';
import getData from '@/lib/getData';
import React from 'react';
import MarqueeSection from './MarqueeSection';
import { Button } from '@heroui/react';
import Link from 'next/link';

const TopTiles = async () => {
    const tiles = await getData();
    const featuredTiles = tiles.slice(0, 4);
    return (
        <div>
            <section className="max-w-10/12 mx-auto px-6 pb-30">


                <div className="mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3D2B1F] tracking-tight">
                        Featured Tiles
                    </h2>

                    <p className="text-sm text-[#3D2B1F]/60 mt-2">
                        Curated selections of premium materials for modern interiors
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {featuredTiles.map((tile) => (
                        <TileCard key={tile.id} tile={tile} />
                    ))}
                </div>

            </section>
        </div>
    );
};

export default TopTiles;
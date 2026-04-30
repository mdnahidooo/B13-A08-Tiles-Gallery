import getData from '@/lib/getData';
import React from 'react';
import Marquee from 'react-fast-marquee';


const MarqueeSection = async () => {
    const tiles = await getData();
    console.log(tiles, "tiles data");
    return (
        <div>
            <div className="overflow-hidden bg-[#EDE6D8] border-y border-[#e5e5d8] mb-10">
                <div className="whitespace-nowrap animate-marquee py-3 text-[#3D2B1F] text-sm font-medium">

                    <Marquee pauseOnHover={true} speed={100}>
                        <span>
                            New Arrivals:{" "}
                            {tiles.slice(0, 5).map((tile, index) => (
                                <span key={tile.id}>
                                    {tile.title}
                                    {index !== 4 ? " | " : " "}
                                </span>
                            ))}
                        </span>
                    </Marquee>

                </div>
            </div>
        </div>
    );
};

export default MarqueeSection;
import getData from "@/lib/getData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeImage = async () => {
    const tiles = await getData();

    return (
        <div className="bg-[#e9e4d8] py-6">

            <div className="max-w-7xl mx-auto bg-[#EDE6D6] rounded-xl shadow-inner border border-[#e5e5d8] py-6">

                <Marquee pauseOnHover speed={50} gradient={false}>

                    <div className="flex gap-6 pr-6">

                        {tiles.map((tile) => (
                            <div
                                key={tile.id}
                                className="w-64  bg-white rounded-lg overflow-hidden shadow-sm border border-[#e5e5d8]"
                            >
                                {/* Image */}
                                <div className="relative w-full h-40">
                                    <Image
                                        src={tile.image}
                                        alt={tile.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="p-3">
                                    <h3 className="text-sm font-semibold text-[#3D2B1F]">
                                        {tile.title}
                                    </h3>
                                    <p className="text-xs text-[#3D2B1F]/70">
                                        {tile.category} • ${tile.price}
                                    </p>
                                </div>
                            </div>
                        ))}

                       
                        <div className="w-6" />

                    </div>

                </Marquee>

            </div>
        </div>
    );
};

export default MarqueeImage;
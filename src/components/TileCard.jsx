import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

const TileCard = ({ tile }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e5d8] hover:shadow-lg transition">

            {/* Image */}
            <div className="relative w-full h-40">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">

                <h3 className="text-sm font-semibold text-[#3D2B1F] mb-2">
                    {tile.title}
                </h3>

                <p className="text-xs text-[#3D2B1F]/60 mb-3">
                    {tile.category} • ${tile.price}
                </p>

                <Link href={`/tile/${tile.id}`}>
                    <Button size="sm" className="bg-[#E07A5F] text-white w-full">
                        View Details
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default TileCard;
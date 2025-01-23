//import React from "react";
import { Link } from "react-router";
import { Place } from "../../types";

export default function Card({ place }: { place: Place }) {
    return (
        <Link
            to={`/place/${place?.id}`}
            className="border rounded-md p-4 gap-3 grid grid-cols-3 min-h-[300px]"
            key={place?.id + place?.name}
        >
            <div>
                <img
                    src={place?.image_url}
                    alt={place?.name}
                    className="size-full object-cover rounded-lg"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-between">
                <h1>{place?.name}</h1>
                <p>{place?.location}</p>
                <div className="flex gap-4">
                    {place?.amenities.map((amenity, index) => (
                        <span key={amenity + index} className="border p-1 rounded-md">
                            {amenity}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <span className="text-2xl font-bold">{place?.price_per_night}$</span>
                <span className="text-xs text-gray-400"> taxes and fees included</span>
            </div>
        </Link>
    );
}

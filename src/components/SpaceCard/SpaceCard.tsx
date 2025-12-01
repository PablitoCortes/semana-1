import { Space } from "@/interfaces/space";
import {  MapPin, Users} from "lucide-react";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";

const SpaceCard = ({ space }: { space: Space }) => {
  return (
    <Link href={`/spaces/${space.id}`}>
  
    <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow">
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={space.photos[0]} 
          alt={space.name} 
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col px-4 py-4 gap-3 flex-1">
        <h2 className="text-text-primary text-xl font-semibold">{space.name}</h2>
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <MapPin className="w-4 h-4"/>
          <span>{space.location}</span>
        </div>
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <Users className="w-4 h-4"/>
          <span>{space.maxPeople} People Max</span>
        </div>
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="text-text-primary font-bold text-2xl">
            ${space.price}<small className="text-text-muted text-sm font-normal">/night</small>
          </div>
          <Button>Book</Button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SpaceCard;

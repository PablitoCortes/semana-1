import { MapPin, Users } from "lucide-react";

const SpaceCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white animate-pulse">
      {/* Imagen skeleton */}
      <div className="relative w-full h-48 bg-gray-200"></div>
      
      {/* Contenido skeleton */}
      <div className="flex flex-col px-4 py-4 gap-3 flex-1">
        {/* Título skeleton */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        
        {/* Ubicación skeleton */}
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-300" />
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* Capacidad skeleton */}
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-gray-300" />
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        
        {/* Footer con precio y botón skeleton */}
        <div className="flex justify-between items-center mt-auto pt-2">
          <div className="flex items-baseline gap-1">
            <div className="h-7 bg-gray-200 rounded w-20"></div>
            <div className="h-4 bg-gray-200 rounded w-12"></div>
          </div>
          <div className="h-9 bg-gray-200 rounded-full w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCardSkeleton;


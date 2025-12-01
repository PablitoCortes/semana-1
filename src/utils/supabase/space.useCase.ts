import { Space } from "@/interfaces/space";
import { spaceRepository } from "./space.repository";


export const getAllSpaces = async (): Promise<Space[]> => {
  const records = await spaceRepository.getAll();

  return records.map((r) => ({
    id: r.id,
    name: r.name,
    location: r.location,
    photos: r.photos,
    price: r.price,
    maxPeople: r.maxPeople,
    description: r.description,
    rating: r.rating,
    placeType: r.placeType,
    cancellationPolicy: r.cancellationPolicy,
    amenities: r.amenities

  }));
};

export const getSpaceById = async (id:string): Promise<Space|null>=>{
  return await spaceRepository.getById(id); 
}

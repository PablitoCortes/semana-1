export interface Space {
    id: string,
    name:string,
    location:string,
    price:number,
    maxPeople:number,
    description:string,
    photos:string[],
    rating: number,
    placeType:string,
    cancellationPolicy:string,
    amenities:string[]
}
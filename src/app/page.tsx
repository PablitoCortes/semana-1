"use client"
import { Hero } from "@/components/Hero/Hero";
import SpaceCard from "@/components/SpaceCard/SpaceCard";
import SpaceCardSkeleton from "@/components/SpaceCard/SpaceCardSkeleton";
import { useSpace } from "@/context/SpaceContext";


export default function Home() {

  const { spaces, loading } = useSpace()


  return (
    <>
    <Hero/>
    {loading ? (
      <div className="grid grid-cols-3 gap-6 p-8 bg-accent" data-section="spaces">
        {Array.from({ length: 6 }).map((_, index) => (
          <SpaceCardSkeleton key={index} />
        ))}
      </div>
    ) : (

      <div className=" flex flex-col md:grid md:grid-cols-3 gap-6 p-8 bg-accent" data-section="spaces">
      {spaces.map((space) => (
        <SpaceCard key={space.id} space={space}/>
      ))}
    </div>
    )
    }
    </>
  );
}

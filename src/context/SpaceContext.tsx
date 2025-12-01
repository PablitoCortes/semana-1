"use client"
import { Space } from "@/interfaces/space"
import { getAllSpaces } from "@/utils/supabase/space.useCase"
import { createContext, useContext, useEffect, useState } from "react"

interface SpaceContextType {
  spaces: Space[]
  loading: boolean
  error: string | null
  search: string
  setSearch: (search: string) => void
  city: string
  setCity: (city: string) => void
  cities: string[]
}

const SpaceContext = createContext<SpaceContextType>({
  spaces: [],
  loading: false,
  error: null,
  search: "",
  setSearch: () => {},
  city: "",
  setCity: () => {},
  cities: [],
})

export const SpaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [allSpaces, setAllSpaces] = useState<Space[]>([])
  const [spaces, setSpaces] = useState<Space[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("")

  // Cargar todos los espacios desde Supabase
  useEffect(() => {
    const getSpaces = async () => {
      try {
        setLoading(true)
        const foundSpaces = await getAllSpaces()
        if (!foundSpaces) {
          setAllSpaces([])
          setSpaces([])
        } else {
          setAllSpaces(foundSpaces)
          setSpaces(foundSpaces)
        }
      } catch {
        setError("Error al obtener los espacios")
      } finally {
        setLoading(false)
      }
    }
    getSpaces()
  }, [])

  // Aplicar filtros de búsqueda y ciudad
  useEffect(() => {
    let filtered = allSpaces

    const trimmedSearch = search.trim().toLowerCase()
    if (trimmedSearch) {
      filtered = filtered.filter((space) =>
        space.name.toLowerCase().includes(trimmedSearch) ||
        space.location.toLowerCase().includes(trimmedSearch)
      )
    }

    const trimmedCity = city.trim().toLowerCase()
    if (trimmedCity) {
      filtered = filtered.filter((space) =>
        space.location.toLowerCase() === trimmedCity
      )
    }

    setSpaces(filtered)
  }, [search, city, allSpaces])

  const cities = Array.from(
    new Set(allSpaces.map((space) => space.location))
  )

  return (
    <SpaceContext.Provider
      value={{ spaces, loading, error, search, setSearch, city, setCity, cities }}
    >
      {children}
    </SpaceContext.Provider>
  )
}

export const useSpace = () => {
  return useContext(SpaceContext)
}
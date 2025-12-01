"use client"
import { Search, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { useSpace } from "@/context/SpaceContext";
import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Header = () => {
  const { search, setSearch, city, setCity, cities } = useSpace();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateUrl = useCallback(
    (nextSearch: string, nextCity: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (nextSearch.trim()) {
        params.set("q", nextSearch.trim());
      } else {
        params.delete("q");
      }

      if (nextCity.trim()) {
        params.set("city", nextCity.trim());
      } else {
        params.delete("city");
      }

      const queryString = params.toString();
      router.push(queryString ? `${pathname}?${queryString}` : pathname, {
        scroll: false,
      });
    },
    [router, pathname, searchParams]
  );

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearch(value);
      updateUrl(value, city);
    },
    [setSearch, updateUrl, city]
  );

  const handleCityChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setCity(value);
      updateUrl(search, value);
    },
    [setCity, updateUrl, search]
  );

  // Inicializar filtros desde la URL al cargar
  useEffect(() => {
    const urlSearch = searchParams.get("q") ?? "";
    const urlCity = searchParams.get("city") ?? "";

    if (urlSearch && urlSearch !== search) {
      setSearch(urlSearch);
    }
    if (urlCity && urlCity !== city) {
      setCity(urlCity);
    }
  }, [searchParams, setSearch, setCity, search, city]);

  return (
    <header className="sticky top-0 border-b bg-white shadow-sm z-50">
      <div className="container flex justify-between h-16 w-[90%] mx-auto p-4 gap-2">
        <div className="flex items-center md:hidden">
          <Link
            href="/"
            className="flex items-center justify-center p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Home className="h-6 w-6 text-text-primary" />
          </Link>
        </div>
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-text-primary">Locally</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex gap-2 flex-1 md:w-auto md:flex-none">
            <div className="flex items-center w-full gap-2 md:w-[480px] bg-background border border-accent-foreground/50 rounded px-2 py-1">
              <Search className="h-4 w-4 text-accent-foreground" />
              <input
                type="search"
                placeholder="Buscar por nombre o ciudad..."
                className="w-full bg-transparent outline-none border-none text-gray-900"
                onChange={handleSearch}
                value={search}
              />
            </div>
            {/* Filtro por ciudad */}
            <select
              className="hidden md:block px-3 py-2 border border-accent-foreground/50 rounded bg-white text-sm text-text-primary"
              value={city}
              onChange={handleCityChange}
            >
              <option value="">Todas las ciudades</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:space-x-4">
            <Link href="/login">
              <Button variant="primary">Sign in</Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header
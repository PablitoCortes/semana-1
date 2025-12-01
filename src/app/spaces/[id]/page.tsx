import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MapPin, Users, Star, Wifi, Car, Coffee, UtensilsCrossed, Home, Shield } from "lucide-react";
import { getSpaceById } from "@/utils/supabase/space.useCase";

type Props = {
  params: Promise<{ id: string }> | { id: string };
};

const SpaceDetailPage = async ({ params }: Props) => {
  const resolvedParams = params instanceof Promise ? await params : params;
  const { id } = resolvedParams;
  
  const space = await getSpaceById(id)
  const secondaryPhotos = space?.photos.slice(1)

  if (!space) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Espacio no encontrado
          </h2>
          <p className="text-text-muted">
            Lo sentimos, el espacio que buscas no existe.
          </p>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto md:px-4 md:pt-6 md:pb-4">
          <div className=" md:grid md:grid-cols-4 md:grid-rows-2 md:gap-2 md:h-[500px] md:rounded-2xl overflow-hidden">
            <div className="relative h-[500px] md:col-span-2 md:row-span-2">
              <Image
                src={space.photos[0]}
                alt={space.name}
                fill
                className="object-cover"
                priority
                sizes="50vw"
              />
            </div>
            {secondaryPhotos?.map((photo, index) => (
              <div key={index} className="relative hidden md:block">
                <Image
                  src={photo}
                  alt={`${space.name} - Foto ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="border-b pb-6">
              <h1 className="text-3xl font-semibold text-text-primary mb-2">
                {space.name}
              </h1>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-text-primary">{space.rating}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{space.location}</span>
                </div>
              </div>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Home className="w-5 h-5 text-text-muted" />
                  <span className="font-semibold text-text-primary">Espacio completo</span>
                </div>
                <p className="text-sm text-text-muted">Tendrás el lugar para ti</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-text-muted" />
                  <span className="font-semibold text-text-primary">Hasta {space.maxPeople} personas</span>
                </div>
                <p className="text-sm text-text-muted">Capacidad máxima</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-5 h-5 text-text-muted" />
                  <span className="font-semibold text-text-primary">Cancelación gratuita</span>
                </div>
                <p className="text-sm text-text-muted">Hasta 48h antes</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-text-muted" />
                  <span className="font-semibold text-text-primary">Excelente ubicación</span>
                </div>
                <p className="text-sm text-text-muted">4.8/5 en ubicación</p>
              </div>
            </div>


            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Acerca de este espacio</h2>
              <p className="text-text-primary leading-relaxed whitespace-pre-line">
                {space.description}
              </p>
            </div>


            <div className="border-b pb-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">Lo que ofrece este espacio</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Estacionamiento</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Cafetería</span>
                </div>
                <div className="flex items-center gap-3">
                  <UtensilsCrossed className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Cocina</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Apto para eventos</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-text-muted" />
                  <span className="text-text-primary">Espacio amplio</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-2xl p-6 shadow-lg bg-white">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-text-primary">${space.price}</span>
                    <span className="text-text-muted">/noche</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-text-primary">{space.rating}</span>
                  </div>
                </div>
              </div>


              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg overflow-hidden">
                  <div className="border-r border-gray-300">
                    <label className="block text-xs font-semibold text-text-primary px-3 pt-2">
                      Llegada
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 pb-2 text-sm text-text-primary border-none outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-primary px-3 pt-2">
                      Salida
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 pb-2 text-sm text-text-primary border-none outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-text-primary mb-2">
                    Huéspedes
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-text-primary">
                    <option>1 huésped</option>
                    <option>2 huéspedes</option>
                    <option>3 huéspedes</option>
                    <option>4+ huéspedes</option>
                  </select>
                </div>

                <Button variant="unique" size="xl" className="w-full">
                  Reservar
                </Button>

                <p className="text-xs text-center text-text-muted">
                  No se te cobrará nada todavía
                </p>

                <div className="border-t pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">${space.price} x 5 noches</span>
                    <span className="text-text-primary">${space.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Tarifa de limpieza</span>
                    <span className="text-text-primary">$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Tarifa de servicio</span>
                    <span className="text-text-primary">$25</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold text-text-primary">
                    <span>Total</span>
                    <span>${space.price * 5 + 75}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceDetailPage;

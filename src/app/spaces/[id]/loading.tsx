const Loading = () => {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      {/* Galería de imágenes skeleton */}
      <div className="container mx-auto px-4 pt-6 pb-4">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px] rounded-2xl overflow-hidden">
          {/* Imagen principal */}
          <div className="col-span-2 row-span-2 bg-gray-200"></div>
          {/* Imágenes secundarias */}
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-200"></div>
        </div>
      </div>

      {/* Contenido principal skeleton */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header skeleton */}
            <div className="border-b pb-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="flex items-center gap-4">
                <div className="h-5 bg-gray-200 rounded w-32"></div>
                <div className="h-5 bg-gray-200 rounded w-40"></div>
              </div>
            </div>

            {/* Información destacada skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b pb-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                    <div className="h-5 bg-gray-200 rounded w-24"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              ))}
            </div>

            {/* Descripción skeleton */}
            <div className="border-b pb-6">
              <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>

            {/* Amenidades skeleton */}
            <div className="border-b pb-6">
              <div className="h-6 bg-gray-200 rounded w-56 mb-4"></div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha - Card de reserva skeleton */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 border border-gray-200 rounded-2xl p-6 shadow-lg bg-white">
              {/* Precio y rating skeleton */}
              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-2">
                  <div className="h-7 bg-gray-200 rounded w-20"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
              </div>

              {/* Formulario skeleton */}
              <div className="space-y-4">
                {/* Fechas skeleton */}
                <div className="grid grid-cols-2 gap-2 border border-gray-300 rounded-lg p-3">
                  <div>
                    <div className="h-3 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div>
                    <div className="h-3 bg-gray-200 rounded w-12 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>

                {/* Huéspedes skeleton */}
                <div>
                  <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Botón skeleton */}
                <div className="h-12 bg-gray-200 rounded-full"></div>

                {/* Texto pequeño skeleton */}
                <div className="h-3 bg-gray-200 rounded w-40 mx-auto"></div>

                {/* Resumen de precios skeleton */}
                <div className="border-t pt-4 space-y-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;


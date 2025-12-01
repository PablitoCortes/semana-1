"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-text-muted mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        Página no encontrada
      </h1>
      <p className="text-text-muted max-w-md mb-6">
        Lo sentimos, no pudimos encontrar la página que estabas buscando.
        Revisa la URL o vuelve al inicio para seguir explorando espacios.
      </p>
      <Link href="/">
        <Button variant="unique" size="lg">
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;



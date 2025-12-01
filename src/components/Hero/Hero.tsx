import { Button } from "../ui/Button";


export const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.querySelector('[data-section="spaces"]');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-primary-light">
      <div className="absolute inset-0 bg-primary-light" />
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-6xl font-bold tracking-tight text-text-primary">
            Find and book unique places
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Discover amazing spaces for any type of event
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              className="rounded-full"
              onClick={scrollToProducts}
            >
              Find yours
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
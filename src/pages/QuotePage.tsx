import PriceCalculator from "@/components/PriceCalculator";

const QuotePage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-section-bg py-16 md:py-20">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Gratis offert
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Räkna ut ett ungefärligt pris eller fyll i priskalkylatorn nedan så återkommer vi inom 2 dagar.
          </p>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <PriceCalculator />
        </div>
      </section>

    </>
  );
};

export default QuotePage;

import workPhoto1 from "@/assets/work-photo-1.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-section-bg py-16 md:py-24">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Om Åkes Fönsterputs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Unga entreprenörer med passion för skinande rena fönster
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center animate-slide-in-left">
              <img 
                src={workPhoto1} 
                alt="Åkes Fönsterputs i arbete" 
                className="w-64 md:w-80 rounded-2xl object-cover"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Vår historia
              </h2>
              <p className="text-muted-foreground mb-4">
                Åkes Fönsterputs är ett ungdomsdrivet företag med en enkel idé: att leverera riktigt bra fönsterputs med hög kvalitet, pålitlig service och ett personligt bemötande.
              </p>
              <p className="text-muted-foreground mb-4">
                Idag hjälper vi nästan 100 kunder i Höllviken, Gislöv och Vellinge att få skinande rena fönster – utan krångel. Vårt team består av drivna ungdomar som tar ansvar, arbetar noggrant och alltid strävar efter att överträffa kundens förväntningar.
              </p>
              <p className="text-muted-foreground mb-4">
                För oss handlar det inte bara om rena fönster, utan om att skapa förtroende. När du bokar oss ska du känna dig trygg med att jobbet blir gjort ordentligt, i tid och med ett resultat du är nöjd med.
              </p>
              <p className="text-muted-foreground">
                Vi tror på hårt arbete, noggrannhet och att alltid ge det lilla extra – varje gång.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-section-bg">
        <div className="container-custom px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Våra värderingar</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 text-center card-hover animate-scale-in">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Kvalitet</h3>
              <p className="text-muted-foreground text-sm">
                Vi nöjer oss aldrig med "bra nog". Varje fönster ska vara skinande rent.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center card-hover animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Pålitlighet</h3>
              <p className="text-muted-foreground text-sm">
                Vi håller våra löften och dyker alltid upp som planerat.
              </p>
            </div>
            <div className="bg-card rounded-xl p-8 text-center card-hover animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Prisvärt</h3>
              <p className="text-muted-foreground text-sm">
                Professionell kvalitet till ett pris som passar alla plånböcker.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

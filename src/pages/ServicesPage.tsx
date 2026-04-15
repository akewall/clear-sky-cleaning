import { Link } from "react-router-dom";
import step1Icon from "@/assets/step1-computer.webp";
import step2Icon from "@/assets/step2-consultation.webp";
import step3Icon from "@/assets/step3-home.webp";

const ServicesPage = () => {
  const steps = [
    {
      number: "Steg 1",
      title: "Du kontaktar oss",
      description: "Du ringer eller fyller i vårat formulär och svarar på enkla frågor om dina fönster. Vi baserar vår offert utifrån dina svar.",
      icon: step1Icon,
      buttonText: "Gratis offert här",
      buttonLink: "/gratis-offert",
    },
    {
      number: "Steg 2",
      title: "Du får ditt pris",
      description: "Formuläret ni svarat på används för att vi ska kunna skapa en offert. Vi kontaktar dig med offerten och fortsätter till steg tre.\n\nVårt pris startar på 165 kr vilket gäller för hela bottenvåningen exklusive uterum, spröjs och upp till 20 fönster.",
      icon: step2Icon,
    },
    {
      number: "Steg 3",
      title: "Rena fönster året runt",
      description: "Du gillar vår offert och vill starta abonnemang. Vi putsar era fönster återkommande var 8de vecka samtidigt som du njuter av rena fönster året om till Sveriges bästa pris.",
      icon: step3Icon,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-section-bg py-16 md:py-24">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Våra tjänster
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Så enkelt är det att få skinande rena fönster
          </p>
        </div>
      </section>

      {/* Steps Section - Vertical Layout */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <p className="text-primary font-semibold mb-2">{step.number}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {step.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6 whitespace-pre-line">
                      {step.description}
                    </p>
                    {step.buttonText && step.buttonLink && (
                      <Link
                        to={step.buttonLink}
                        className="btn-primary inline-block"
                      >
                        {step.buttonText}
                      </Link>
                    )}
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div className="w-40 h-40 md:w-48 md:h-48">
                      <img
                        src={step.icon}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <hr className="border-border mt-16" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Same as homepage */}
      <section className="section-padding bg-section-bg">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Skinande rena fönster till Sveriges lägsta pris
              </h2>
              <p className="text-muted-foreground mb-4">
                Åkes Fönsterputs är F-skatteregistrerat och erbjuder fönsterputs med RUT-avdrag. 
                Vi arbetar med abonnemang där vi putsar dina fönster regelbundet var 8:e vecka. 
                Priset anpassas efter varje hus och fastställs därefter som ett fast pris, 
                så du alltid vet vad det kostar. Priset startar på 165 kr vilket gäller hela 
                bottenvåningen exklusive uterum, spröjs och upp till 20 fönster.
              </p>
              <p className="text-muted-foreground mb-6">
                Abonnemanget är flexibelt, utan uppsägningstid, och anpassas efter ditt hushåll. 
                Speciella behov eller eventuella frågor är du varmt välkommen att höra av dig.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-card rounded-2xl shadow-xl p-8 text-center">
                <p className="text-muted-foreground text-lg mb-2">Från</p>
                <p className="text-6xl md:text-7xl font-bold text-primary mb-2">165 kr</p>
                <p className="text-muted-foreground mb-6">efter RUT</p>
                <Link to="/gratis-offert" className="btn-primary inline-block w-full text-lg">
                  Gratis offert här!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;

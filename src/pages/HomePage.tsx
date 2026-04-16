import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import step1Icon from "@/assets/step1-computer.webp";
import step2Icon from "@/assets/step2-consultation.webp";
import step3Icon from "@/assets/step3-home.webp";
import workPhoto1 from "@/assets/work-photo-1.jpg";
import workPhoto2 from "@/assets/work-photo-2.jpg";
import workPhotoCenter from "@/assets/work-photo-center.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Lighter Dark Overlay */}
      <div className="absolute inset-0 bg-foreground/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
          Lokal fönsterputs med hög kvalitet och väldigt låga priser
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/gratis-offert" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
            Få gratis offert
            <ArrowRight size={20} />
          </Link>
          <a href="tel:0722192626" className="btn-outline border-white text-white hover:bg-white hover:text-foreground inline-flex items-center justify-center gap-2 text-lg">
            <Phone size={20} />
            Ring oss
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Skinande rena fönster till Sveriges lägsta pris
            </h2>
            <p className="text-muted-foreground mb-4">
              Åkes Fönsterputs är F-skatteregistrerat och erbjuder fönsterputs med RUT-avdrag. 
              Vi arbetar med abonnemang där vi putsar dina fönster regelbundet var 8e vecka. 
              Priset anpassas efter varje hus och fastställs därefter som ett fast pris, 
              så du alltid vet vad det kostar. Priset startar på 165 kr vilket gäller hela 
              bottenvåningen upp till 20 fönster exklusive uterum och spröjs.
            </p>
            <p className="text-muted-foreground mb-6">
              Abonnemanget är flexibelt, utan uppsägningstid, och anpassas efter ditt hushåll. 
              Vid speciella behov eller eventuella frågor är du varmt välkommen att höra av dig.
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
  );
};

const WhyUsSection = () => {
  const reasons = [
    {
      title: "Lokalt företag",
      description: "Vi är ett lokalt företag i Höllviken och Vellinge som bryr oss om våra kunder.",
    },
    {
      title: "RUT-avdrag",
      description: "Du får 50% i RUT-avdrag på arbetskostnaden direkt på fakturan.",
    },
    {
      title: "Flexibelt abonnemang",
      description: "Ingen bindningstid - avsluta när du vill utan krångel.",
    },
    {
      title: "F-skatteregistrerade",
      description: "Tryggt och säkert med ett seriöst företag.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Varför välja oss?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Du kontaktar oss",
      description: "Du ringer oss eller fyller i vår priskalkylator som består av enkla frågor om dina fönster.",
      icon: step1Icon,
    },
    {
      title: "Du får ditt pris",
      description: "Vi kontaktar dig med offerten och fortsätter till steg tre.",
      icon: step2Icon,
    },
    {
      title: "Rena fönster året runt",
      description: "Du accepterar vår offert och har rena fönster året runt.",
      icon: step3Icon,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
          Hur funkar det?
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Tre enkla steg
        </p>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-32 h-32 mx-auto mb-6">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tjanster"
            className="inline-block border-2 border-foreground text-foreground px-8 py-3 rounded-full font-semibold transition-all hover:bg-foreground hover:text-background"
          >
            Läs mer
          </Link>
        </div>
      </div>
    </section>
  );
};

const WhoAreWeSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Vilka är vi?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Vi är ett gäng drivna ungdomar som erbjuder fönsterputs med hög kvalitet, ett leende på läpparna och stor stolthet i vårt arbete.
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Vi på Åkes Fönsterputs ger ungdomar chansen att ta sig ut i arbetslivet - samtidigt som dina fönster blir skinande rena.
        </p>
        <Link
          to="/om-oss"
          className="inline-block border-2 border-foreground text-foreground px-8 py-3 rounded-full font-semibold transition-all hover:bg-foreground hover:text-background"
        >
          Läs mer
        </Link>
        {/* Placeholder for team images - user will provide later */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="hidden md:flex aspect-[4/5] rounded-2xl items-center justify-center md:-mt-8 overflow-hidden">
            <img src={workPhoto1} alt="Åkes Fönsterputs putsar fönster på vitt hus" className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className="aspect-[4/5] bg-muted rounded-2xl flex items-center justify-center md:mt-8">
          </div>
          <div className="hidden md:flex aspect-[4/5] rounded-2xl items-center justify-center md:-mt-8 overflow-hidden">
            <img src={workPhoto2} alt="Åkes Fönsterputs i arbete" className="w-full h-full object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialMediaSection = () => {
  return (
    <section className="section-padding bg-section-bg">
      <div className="container-custom px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Följ oss på sociala medier
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Håll dig uppdaterad med våra senaste nyheter och erbjudanden
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61584001333555"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:opacity-90 hover:scale-110"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/akesfonsterputs/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-all hover:opacity-90 hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <HowItWorksSection />
      <WhyUsSection />
      <WhoAreWeSection />
      <SocialMediaSection />
    </>
  );
};

export default HomePage;

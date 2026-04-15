import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-section-bg py-16 md:py-24">
        <div className="container-custom px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Kontakta oss
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Vi finns här för att svara på dina frågor
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {/* Phone Card */}
            <a
              href="tel:0722192626"
              className="bg-section-bg rounded-xl p-6 flex items-center gap-4 card-hover group animate-slide-in-left"
            >
              <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Telefon</p>
                <p className="text-xl font-bold text-foreground">072-219 26 26</p>
                <p className="text-sm text-muted-foreground">Öppettider 08:00 - 16:00</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:akesfonsterputs@gmail.com"
              className="bg-section-bg rounded-xl p-6 flex items-center gap-4 card-hover group animate-slide-in-right"
            >
              <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Mejl</p>
                <p className="text-xl font-bold text-foreground">Mejla oss</p>
                <p className="text-sm text-muted-foreground">Vi svarar inom 24 timmar</p>
              </div>
            </a>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Övrig information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Företagsinformation</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Åkes Fönsterputs</li>
                  <li>Vi är F-skattsregistrerade</li>
                  <li>RUT-avdrag godkänt</li>
                </ul>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Adress</h3>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0 text-primary" />
                  <div>
                    <p>Rödhakegatan 18</p>
                    <p>235 38 Vellinge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

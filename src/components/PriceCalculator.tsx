import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail, Calculator, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const EMAILJS_PUBLIC_KEY = "_9iNtCysgrSxtsjDZ";
const EMAILJS_SERVICE_ID = "service_tn6u3iq";
const EMAILJS_TEMPLATE_ID = "template_6qhlo7b";

const PriceCalculator = () => {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [groundFloorWindows, setGroundFloorWindows] = useState("");
  const [hasConservatory, setHasConservatory] = useState<string>("");
  const [conservatoryWindows, setConservatoryWindows] = useState("");
  const [hasMullions, setHasMullions] = useState<string>("");
  const [mullionType, setMullionType] = useState<string>("");
  const [fixedMullionPanes, setFixedMullionPanes] = useState("");
  const [hasUpperFloor, setHasUpperFloor] = useState<string>("");
  const [upperFloorWindows, setUpperFloorWindows] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const calculatePrice = () => {
    let total = 0;

    // Base price ground floor: up to 20 windows = 165 kr
    const gfWindows = parseInt(groundFloorWindows) || 0;

    if (hasMullions === "ja" && mullionType === "fasta") {
      // Fixed mullions: panes / 20 * 165
      const panes = parseInt(fixedMullionPanes) || 0;
      total += (panes / 20) * 165;
    } else {
      // Normal ground floor price
      total += 165;
      if (gfWindows > 20) {
        total += (gfWindows - 20) * 10;
      }

      // Removable mullions: +100 kr
      if (hasMullions === "ja" && mullionType === "avtagbara") {
        total += 100;
      }
    }

    // Conservatory
    if (hasConservatory === "ja") {
      const cWindows = parseInt(conservatoryWindows) || 0;
      if (cWindows <= 10) {
        total += 50;
      } else {
        total += 75;
      }
    }

    // Upper floor: 15 kr per window
    if (hasUpperFloor === "ja") {
      const ufWindows = parseInt(upperFloorWindows) || 0;
      total += ufWindows * 15;
    }

    return total;
  };

  const handleCalculate = async () => {
    setIsSending(true);
    const p = calculatePrice();
    const message = [
      `E-post: ${email}`,
      `Adress: ${address}`,
      `Bottenvåningsfönster: ${groundFloorWindows}`,
      hasConservatory === "ja" ? `Uterum: Ja (${conservatoryWindows} fönster)` : "Uterum: Nej",
      hasMullions === "ja"
        ? `Spröjs: ${mullionType === "fasta" ? `Fasta (${fixedMullionPanes} rutor)` : "Avtagbara"}`
        : "Spröjs: Nej",
      hasUpperFloor === "ja" ? `Ovanvåning: Ja (${upperFloorWindows} fönster)` : "Ovanvåning: Nej",
    ].join("\n");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_email: email,
        message,
        price: `${p} kr`,
      }, EMAILJS_PUBLIC_KEY);
      setShowResult(true);
    } catch {
      toast({ title: "Kunde inte skicka", description: "Försök igen senare.", variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };

  const price = calculatePrice();

  const isFormValid =
    email &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    address.trim() &&
    groundFloorWindows &&
    hasConservatory &&
    (hasConservatory === "nej" || conservatoryWindows) &&
    hasMullions &&
    (hasMullions === "nej" || mullionType) &&
    (hasMullions === "nej" || mullionType !== "fasta" || fixedMullionPanes) &&
    hasUpperFloor &&
    (hasUpperFloor === "nej" || upperFloorWindows);

  return (
    <Card className="max-w-2xl mx-auto animate-fade-in">
      <CardHeader className="text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <Calculator className="text-primary" size={28} />
        </div>
        <CardTitle className="text-2xl md:text-3xl">Priskalkylator</CardTitle>
        <p className="text-muted-foreground mt-2">
          Svara på frågorna nedan för att få ett ungefärligt pris.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-semibold">
            Din e-postadress
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="namn@exempel.se"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address" className="text-base font-semibold">
            Din adress
          </Label>
          <Input
            id="address"
            type="text"
            placeholder="Gatuadress, ort"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        {/* Ground floor windows */}
        <div className="space-y-2">
          <Label htmlFor="gf-windows" className="text-base font-semibold">
            Hur många fönster på bottenvåningen?
          </Label>
          <Input
            id="gf-windows"
            type="number"
            min="1"
            placeholder="Ange antal"
            value={groundFloorWindows}
            onChange={(e) => {
              setGroundFloorWindows(e.target.value);
              setShowResult(false);
            }}
          />
        </div>

        {/* Conservatory */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">
            Har du uterum eller tillbyggnad?
          </Label>
          <RadioGroup
            value={hasConservatory}
            onValueChange={(v) => {
              setHasConservatory(v);
              if (v === "nej") setConservatoryWindows("");
              setShowResult(false);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ja" id="cons-yes" />
              <Label htmlFor="cons-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nej" id="cons-no" />
              <Label htmlFor="cons-no">Nej</Label>
            </div>
          </RadioGroup>
          {hasConservatory === "ja" && (
            <div className="ml-6 mt-2 space-y-2">
              <Label htmlFor="cons-windows">
                Hur många fönster på uterummet/tillbyggnaden?
              </Label>
              <Input
                id="cons-windows"
                type="number"
                min="1"
                placeholder="Ange antal"
                value={conservatoryWindows}
                onChange={(e) => {
                  setConservatoryWindows(e.target.value);
                  setShowResult(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Mullions */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">Har du spröjs?</Label>
          <RadioGroup
            value={hasMullions}
            onValueChange={(v) => {
              setHasMullions(v);
              if (v === "nej") {
                setMullionType("");
                setFixedMullionPanes("");
              }
              setShowResult(false);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ja" id="mul-yes" />
              <Label htmlFor="mul-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nej" id="mul-no" />
              <Label htmlFor="mul-no">Nej</Label>
            </div>
          </RadioGroup>
          {hasMullions === "ja" && (
            <div className="ml-6 mt-2 space-y-3">
              <Label className="font-medium">Fasta eller avtagbara?</Label>
              <RadioGroup
                value={mullionType}
                onValueChange={(v) => {
                  setMullionType(v);
                  if (v !== "fasta") setFixedMullionPanes("");
                  setShowResult(false);
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fasta" id="mul-fixed" />
                  <Label htmlFor="mul-fixed">Fasta</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="avtagbara" id="mul-removable" />
                  <Label htmlFor="mul-removable">Avtagbara</Label>
                </div>
              </RadioGroup>
              {mullionType === "fasta" && (
                <div className="ml-6 mt-2 space-y-2">
                  <Label htmlFor="panes">
                    Totalt antal mindre rutor (alla fönster)
                  </Label>
                  <Input
                    id="panes"
                    type="number"
                    min="1"
                    placeholder="Ange antal rutor"
                    value={fixedMullionPanes}
                    onChange={(e) => {
                      setFixedMullionPanes(e.target.value);
                      setShowResult(false);
                    }}
                  />
                  <p className="text-sm text-muted-foreground">
                    Räkna ihop alla små rutor som fönstren är uppdelade i.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Upper floor */}
        <div className="space-y-2">
          <Label className="text-base font-semibold">
            Vill du få ovanvåningen putsad?
          </Label>
          <RadioGroup
            value={hasUpperFloor}
            onValueChange={(v) => {
              setHasUpperFloor(v);
              if (v === "nej") setUpperFloorWindows("");
              setShowResult(false);
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ja" id="uf-yes" />
              <Label htmlFor="uf-yes">Ja</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nej" id="uf-no" />
              <Label htmlFor="uf-no">Nej</Label>
            </div>
          </RadioGroup>
          {hasUpperFloor === "ja" && (
            <div className="ml-6 mt-2 space-y-2">
              <Label htmlFor="uf-windows">
                Hur många ovanvåningsfönster?
              </Label>
              <Input
                id="uf-windows"
                type="number"
                min="1"
                placeholder="Ange antal"
                value={upperFloorWindows}
                onChange={(e) => {
                  setUpperFloorWindows(e.target.value);
                  setShowResult(false);
                }}
              />
            </div>
          )}
        </div>

        {/* Calculate button */}
        <Button
          onClick={handleCalculate}
          disabled={!isFormValid || isSending}
          className="w-full"
          size="lg"
        >
          {isSending ? <Loader2 size={18} className="animate-spin" /> : <Calculator size={18} />}
          {isSending ? "Skickar..." : "Beräkna pris"}
        </Button>

        {/* Result */}
        {showResult && (
          <div className="animate-fade-in space-y-6">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
              <p className="text-muted-foreground mb-1">Uppskattat pris</p>
              <p className="text-4xl font-bold text-primary">{price} kr</p>
              <p className="text-sm text-muted-foreground mt-2">
                *Prisuppskattning. Det exakta priset kan variera.
              </p>
            </div>

            <div className="bg-section-bg rounded-xl p-6 text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Intresserad? Kontakta oss!
              </h3>
              <p className="text-muted-foreground text-sm">
                Hör av dig för att boka eller om du har frågor.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="tel:0722192626">
                  <Button variant="default" size="lg" className="w-full sm:w-auto">
                    <Phone size={18} />
                    072-219 26 26
                  </Button>
                </a>
                <a href="mailto:akesfonsterputs@gmail.com">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Mail size={18} />
                    Mejla oss
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PriceCalculator;

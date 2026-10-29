export const BASE_PRICE = 175; // kr, efter RUT, hela bottenvåningen upp till 20 fönster

export interface QuoteInputs {
  groundFloorWindows: number;
  hasConservatory: boolean;
  conservatoryWindows: number;
  hasMullions: boolean;
  mullionType: "fasta" | "avtagbara" | "";
  hasUpperFloor: boolean;
  upperFloorWindows: number;
}

export function calculateQuote(i: QuoteInputs): number {
  let total = BASE_PRICE;

  // Extra ground floor windows: +10 kr per window above 20
  if (i.groundFloorWindows > 20) {
    total += (i.groundFloorWindows - 20) * 10;
  }

  // Fixed mullions: flat 100 kr
  if (i.hasMullions && i.mullionType === "fasta") {
    total += 100;
  }

  // Removable mullions: +75 kr
  if (i.hasMullions && i.mullionType === "avtagbara") {
    total += 75;
  }

  // Conservatory: +50 kr for 1-9 windows, +75 kr for 10 or more
  if (i.hasConservatory) {
    total += i.conservatoryWindows < 10 ? 50 : 75;
  }

  // Upper floor: +15 kr per window
  if (i.hasUpperFloor) {
    total += i.upperFloorWindows * 15;
  }

  // Round up to nearest 5
  return Math.ceil(total / 5) * 5;
}

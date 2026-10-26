import { describe, it, expect } from "vitest";
import { calculateQuote, BASE_PRICE } from "@/lib/price";

const base = {
  hasConservatory: false,
  conservatoryWindows: 0,
  hasMullions: false,
  mullionType: "" as const,
  hasUpperFloor: false,
  upperFloorWindows: 0,
};

describe("prisregler", () => {
  it("grundpris 175 kr efter RUT för bottenvåningen upp till 20 fönster", () => {
    expect(BASE_PRICE).toBe(175);
    expect(calculateQuote({ ...base, groundFloorWindows: 20 })).toBe(175);
    expect(calculateQuote({ ...base, groundFloorWindows: 8 })).toBe(175);
  });

  it("10 kr per bottenvåningsfönster utöver 20", () => {
    expect(calculateQuote({ ...base, groundFloorWindows: 25 })).toBe(225);
  });

  it("fasta spröjs: 100 kr upp till 20 fönster + 5 kr per fönster över 20", () => {
    expect(
      calculateQuote({
        ...base,
        groundFloorWindows: 25,
        hasMullions: true,
        mullionType: "fasta",
      })
    ).toBe(350);
  });

  it("avtagbara spröjs: +75 kr", () => {
    expect(
      calculateQuote({
        ...base,
        groundFloorWindows: 15,
        hasMullions: true,
        mullionType: "avtagbara",
      })
    ).toBe(250);
  });

  it("uterum: +50 kr vid högst 10 fönster, annars +75 kr", () => {
    expect(
      calculateQuote({
        ...base,
        groundFloorWindows: 10,
        hasConservatory: true,
        conservatoryWindows: 10,
      })
    ).toBe(225);
    expect(
      calculateQuote({
        ...base,
        groundFloorWindows: 10,
        hasConservatory: true,
        conservatoryWindows: 12,
      })
    ).toBe(250);
  });

  it("ovanvåning: +15 kr per fönster", () => {
    expect(
      calculateQuote({
        ...base,
        groundFloorWindows: 10,
        hasUpperFloor: true,
        upperFloorWindows: 4,
      })
    ).toBe(235);
  });
});

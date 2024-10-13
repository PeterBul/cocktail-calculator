interface ISuperJuiceRecipe {
  type: string;
  water: number;
  peelWeight: number;
  citricAcid: number;
  gumArabic: number;
}

export class SuperJuiceRecipe implements ISuperJuiceRecipe {
  constructor(public type: string, public peelWeight: number) {}

  get water() {
    return this.peelWeight * 16.7;
  }

  get gumArabic() {
    return this.water * 0.02;
  }

  get citricAcid() {
    return this.peelWeight;
  }

  get totalLiquid() {
    return this.water + this.citricAcid + this.gumArabic;
  }
}

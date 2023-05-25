class Ingredient {
  private id: number;
  private name: string;
  private amount: number;
  private unit: string;

  constructor(id: number, name: string, amount: number, unit: string) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.unit = unit;
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAmount(): number {
    return this.amount;
  }

  getUnit(): string {
    return this.unit;
  }
}

export default Ingredient;

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
}

export default Ingredient;

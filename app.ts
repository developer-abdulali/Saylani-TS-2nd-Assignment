alert(`check browser console page.`);

class Vehicle {
  constructor(
    private _name: string,
    private _menfacturigYear: number,
    private _model: number,
    private _year: number,
    private _maxSpeed: number,
    private _totalSeats: number,
    private _rentalRate: number,
    private _iscarAutometic: boolean
  ) {}
  public get name(): string {
    return this._name;
  }

  public set name(anOtherName: string) {
    if (!anOtherName) {
      throw new Error("Name cannot be empty");
    }
    this._name = anOtherName;
  }

  public get menfacturigYear(): number {
    return this._menfacturigYear;
  }
  public get model(): number {
    return this._model;
  }
  public get year(): number {
    return this._year;
  }
  public get maxSpeed(): number {
    return this._maxSpeed;
  }
  public get totalSeats(): number {
    return this._totalSeats;
  }
  public get retalRate(): number {
    return this._rentalRate;
  }
  public get iscarAutometic(): boolean {
    return this._iscarAutometic;
  }
}

let VehicleDetail = new Vehicle("CIVIC", 2022, 2022, 2022, 250, 5, 2500, true);
console.log(`Honda ${VehicleDetail.name}`);
console.log(`Honda CIVIC Menufacturing Year ${VehicleDetail.menfacturigYear}`);
console.log(`Honda CIVIC Model ${VehicleDetail.maxSpeed}`);
console.log(`Honda CIVIC Year ${VehicleDetail.year}`);
console.log(`Honda CIVIC Max Speed ${VehicleDetail.maxSpeed}`);
console.log(`Honda CIVIC Total Seats ${VehicleDetail.totalSeats}`);
console.log(`Honda CIVIC Retal Rates ${VehicleDetail.retalRate}`);
console.log(`Honda CIVIC Autometic Yes`);

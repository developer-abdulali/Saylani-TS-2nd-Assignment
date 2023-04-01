alert("check browser console page.");
var Vehicle = /** @class */ (function () {
    function Vehicle(_name, _menfacturigYear, _model, _year, _maxSpeed, _totalSeats, _rentalRate, _iscarAutometic) {
        this._name = _name;
        this._menfacturigYear = _menfacturigYear;
        this._model = _model;
        this._year = _year;
        this._maxSpeed = _maxSpeed;
        this._totalSeats = _totalSeats;
        this._rentalRate = _rentalRate;
        this._iscarAutometic = _iscarAutometic;
    }
    Object.defineProperty(Vehicle.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (anOtherName) {
            if (!anOtherName) {
                throw new Error("Name cannot be empty");
            }
            this._name = anOtherName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "menfacturigYear", {
        get: function () {
            return this._menfacturigYear;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "model", {
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "year", {
        get: function () {
            return this._year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "maxSpeed", {
        get: function () {
            return this._maxSpeed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "totalSeats", {
        get: function () {
            return this._totalSeats;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "retalRate", {
        get: function () {
            return this._rentalRate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "iscarAutometic", {
        get: function () {
            return this._iscarAutometic;
        },
        enumerable: false,
        configurable: true
    });
    return Vehicle;
}());
var VehicleDetail = new Vehicle("CIVIC", 2022, 2022, 2022, 250, 5, 2500, true);
console.log("Honda ".concat(VehicleDetail.name));
console.log("Honda CIVIC Menufacturing Year ".concat(VehicleDetail.menfacturigYear));
console.log("Honda CIVIC Model ".concat(VehicleDetail.maxSpeed));
console.log("Honda CIVIC Year ".concat(VehicleDetail.year));
console.log("Honda CIVIC Max Speed ".concat(VehicleDetail.maxSpeed));
console.log("Honda CIVIC Total Seats ".concat(VehicleDetail.totalSeats));
console.log("Honda CIVIC Retal Rates ".concat(VehicleDetail.retalRate));
console.log("Honda CIVIC Autometic Yes");

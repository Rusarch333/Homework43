"user strict";

/**
 * Клас який реалізує Циліндр
 * @extends Figure3D
 */
class Cylinder extends Figure3D {
  /**
   * Конструктор класу Cylinder
   * @param {number} radius
   * @param {number} height
   */
  constructor(radius, height) {
    super("Cylinder");

    this.radius = radius;
    this.height = height;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (typeof value !== "number") {
      throw new TypeError("Radius of Cylinder class instance is not a number!");
    }
    if (value <= 0) {
      throw new Error("Radius of Cylinder class instance must be more then 0!");
    }
    
    this._radius = value;
  }

  get height() {
    return this._height;
  }
  set height(value) {
    if (typeof value !== "number") {
      throw new TypeError("Height of Cylinder class instance is not a number!");
    }
    if (value <= 0) {
      throw new Error("Height of Cylinder class instance must be more then 0!");
    }
    
    this._height = value;
  }

  /**
   * Функція, яка повертає об'єм циліндру
   * @returns {number}
   */
  getVolume() {
    return Math.PI * Math.pow(this._radius, 2) * this._height;
  }
}

"user strict";

/**
 * Клас який реалізує Сферу
 * @extends Figure3D
 */
class Sphere extends Figure3D {
  /**
   * Конструктор класу Sphere
   * @param {number} radius
   */
  constructor(radius) {
    super("Sphere");

    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    validatePositiveNumberField("Radius", value);
    this._radius = value;
  }

  /**
   * Функція, яка повертає об'єм сфери
   * @returns {number}
   */
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this._radius, 3);
  }
}

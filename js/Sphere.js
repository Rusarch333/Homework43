"user strict";

/**
 * Клас який реалізує Сферу
 * @extends Figure3D
 */
class Sphere extends Figure3D {
  /**
   * Конструктор класу Sphere
   * @param {string} name
   * @param {number} radius
   */
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== "number") {
      throw new TypeError("Radius is not a number!");
    }
    if (value <= 0) {
      // ???????????????????????????
      throw new Error("Radius must be more then 0!");
    }
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

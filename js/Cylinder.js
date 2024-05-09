"user strict";

/**
 * Клас який реалізує Циліндр
 * @extends Sphere
 */
class Cylinder extends Sphere {
  /**
   * Конструктор класу Cylinder
   * @param {string} name
   * @param {number} radius
   * @param {number} height
   */
  constructor(name, radius, height) {
    super(name, radius);
    this.height = height;
  }

  get height() {
    return this._height;
  }
  set height(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== "number") {
      throw new TypeError("Height is not a number!");
    }
    if (value <= 0) {
      // ???????????????????????????
      throw new Error("Height must be more then 0!");
    }
    this._height = value;
  }

  /**
   * Функція, яка повертає об'єм циліндру
   * @returns {number}
   */
  getValume() {
    return Math.PI * Math.pow(this._radius, 2) * this._height;
  }
}

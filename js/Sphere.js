'user strict';

/**
 * Клас який реалізує Сферу
 * @extends Figeure3D
 */
class Sphere extends Figeure3D {
  /**
   * Конструктор класу Sphere
   * @param {string} name
   * @param {number} radius
   */
  constructor (name, radius) {
    super(name);
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }
  set radius(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== 'number') {
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
  getValume() {
    // ???????????????????? 4/3
    return 1.33333333333 * Math.PI * Math.pow(radius, 3);
  }
}
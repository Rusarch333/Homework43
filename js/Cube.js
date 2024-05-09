"user strict";

/**
 * Клас який реалізує Куб
 * @extends Figure3D
 */
class Cube extends Figure3D {
  /**
   * Конструктор класу Sphere
   * @param {string} name
   * @param {number} side
   */
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  get side() {
    return this._side;
  }
  set side(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== "number") {
      throw new TypeError("Side is not a number!");
    }
    if (value <= 0) {
      // ???????????????????????????
      throw new Error("Side must be more then 0!");
    }
    this._side = value;
  }

  /**
   * Функція, яка повертає об'єм кубу
   * @returns {number}
   */
  getVolume() {
    return Math.pow(this._side, 3);
  }
}

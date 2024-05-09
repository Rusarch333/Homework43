'user strict';

/**
 * Клас який реалізує Куб
 * @extends Figeure3D
 */
class Cube extends Figeure3D {
  /**
   * Конструктор класу Sphere
   * @param {string} name
   * @param {number} side
   */
  constructor (name, side) {
    super(name);
    this.side = side;
  }

  get side() {
    return this._side;
  }
  set side(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof side !== 'number') {
      throw new TypeError("Side is not a number!");
    }
    if (side <= 0) {
      // ???????????????????????????
      throw new Error("Side must be more then 0!");
    }
    this._side = value;
  }

  /**
   * Функція, яка повертає об'єм кубу
   * @returns {number}
   */
  getValume() {
    return Math.pow(side, 3);
  }
}
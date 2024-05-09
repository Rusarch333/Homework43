"user strict";

/**
 * Клас який реалізує Куб
 * @extends Figure3D
 */
class Cube extends Figure3D {
  /**
   * Конструктор класу Cube
   * @param {number} side
   */
  constructor(side) {
    super("Cube");

    this.side = side;
  }

  get side() {
    return this._side;
  }
  set side(value) {
    validatePositiveNumberField("Side", value);
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

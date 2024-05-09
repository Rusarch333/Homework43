"user strict";

/**
 * Клас який реалізує 3D фігуру
 */
class Figure3D {
  /**
   * Функція, яка повідомляє, чи є параметр фігурою
   * @param {*} figure
   * @returns {boolean}
   */
  static isFigure3D(figure) {
    return figure instanceof Figure3D;
  }

  /**
   * Конструктор класу Figure3D
   * @param {string} name
   * @throws {Error} You can`t create instance of abstract class Figure3D!
   * @throws {TypeError} Name of Figure3D class instance is not a string!
   * @throws {Error} Name of Figure3D class instance can't be empty!
   */
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error('You can`t create instance of abstract class Figure3D!');
    }

    if (typeof name !== "string") {
      throw new TypeError("Name of Figure3D class instance is not a string!");
    }
    if (name === false) {
      throw new Error("Name of Figure3D class instance can't be empty!");
    }

    this._name = name;
  }

  get name() {
    return this._name;
  }

  getVolume() {
    throw new Error(
      "Can't call getValume() method becouse Figeure3D is abstract class!"
    );
  }
}

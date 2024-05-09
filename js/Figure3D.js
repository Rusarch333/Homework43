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
   * @throws {TypeError} Name of Figure3D is not a string
   * @throws {Error} Name of Figure3D can't be empty!
   */
  constructor(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name of Figure3D is not a string!");
    }
    if (name === false) {
      throw new Error("Name of Figure3D can't be empty!");
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

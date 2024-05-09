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
      throw new Error("You can`t create instance of abstract class Figure3D!");
    }
    name = name.trim(); // Позбавляємось зайвих пробілів та рядків типу " ", "  "
    validateStringField("Name", name);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
   * Абстрактний метод який при виклику повертає помилку:
   * @throws {Error} Can't call getValume() method becouse Figeure3D is abstract class!
   */
  getVolume() {
    throw new Error(
      "Can't call getValume() method becouse Figeure3D is abstract class!"
    );
  }
}

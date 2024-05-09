"user strict";

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
   */
  constructor(name) {
    // ????????????? _ ??????????
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== "string") {
      throw new TypeError("Name is not a string!");
    }
    if (value === false) {
      // ???????????????????????????
      throw new Error("Name can't be empty!");
    }
    this._name = value;
  }

  getValume() {
    throw new Error(
      "Can't call getValume() method from Figeure3D abstract class!"
    );
  }
}

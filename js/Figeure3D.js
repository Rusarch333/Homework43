'user strict';

// Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
/**
 * Клас, який реалізує 3D фігуру
 */
class Figeure3D {
  /**
   * Конструктор класу Figeure3D
   * @param {string} name 
   */
  constructor (name) {
    // ????????????? _ ??????????
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    // ?????????????????????? ЗАВДАВАТИ ВСЕ ТАКИ СЕТ ????
    if (typeof value !== 'string') {
      throw new TypeError("Name is not a string!");
    }
    if (value === false) {
      // ???????????????????????????
      throw new Error("Name can't be empty!");
    }
    this._name = value;
  }

  getValume() {
    throw new Error("Can't call getValume() method from Figeure3D abstract class!");
  }
}
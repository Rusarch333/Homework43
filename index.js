"user strict";

/*
  - Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
  - Створити класи нащадки: сфера, куб, *циліндр. Написати аксессори (сеттери та геттери) для властивостей.
  - Створити функцію getVolume3DFigure(), яка приймає будь-яку 3d фігуру і повертає її об'єм.
*/

/**
 * Функція, яка приймає будь-яку 3D фігуру і повертає її об'єм
 * @param {*} figure
 * @throws {TypeError} Param of getVolume3DFigure method is not a instance of Figure3D!
 * @returns {number}
 */
const getVolume3DFigure = (figure) => {
  if (Figure3D.isFigure3D(figure)) {
    return figure.getVolume();
  }
  throw new TypeError(
    "Param of getVolume3DFigure method is not a instance of Figure3D!"
  );
};

try {
  // const figure3D = new Figure3D(); // Error: You can`t create instance of abstract class Figure3D!
  const sphere = new Sphere(10);
  const cube = new Cube(5);
  const cylinder = new Cylinder(10, 15);

  // cylinder.radius = "5"; // TypeError: Radius of Cylinder class instance is not a number!
  // cylinder.height = -5;  // Error: Height of Cylinder class instance must be more then 0!

  // console.log(getVolume3DFigure("figure3D")); // TypeError: Param of getVolume3DFigure method is not a instance of Figure3D!
  console.log((getVolume3DFigure(sphere).toFixed(2)));  // 4188.79
  console.log(getVolume3DFigure(cube).toFixed(2));      // 125.00
  console.log(getVolume3DFigure(cylinder).toFixed(2));  // 4712.39
} catch (error) {
  console.error(error);
}

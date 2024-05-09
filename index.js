"user strict";

/*
  - Створити абстрактний клас Figeure3D з властивостю ім'я (string не пуста) і методом обчислити об'єм.
  - Створити класи нащадки: сфера, куб, *циліндр. Написати аксессори (сеттери та геттери) для властивостей.
  - Створити функцію getVolume3DFigure(), яка приймає будь-яку 3d фігуру і повертає її об'єм.
*/

/**
 * Функція, яка приймає будь-яку 3D фігуру і повертає її об'єм
 * @param {*} figure
 * @throws {TypeError} if param not a instance of Figure3D
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
  const figure3D = new Figure3D("Figure3D");
  const sphere = new Sphere("Sphere", 10);
  const cube = new Cube("Cube", 5);
  const cylinder = new Cylinder("Cylinder", 10, 15);

  // console.log(getVolume3DFigure(figure3D));
  console.log(getVolume3DFigure(sphere));
  console.log(getVolume3DFigure(cube));
  console.log(getVolume3DFigure(cylinder));
} catch (error) {
  console.error(error);
}

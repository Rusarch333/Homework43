'user strict';

// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.
const getVolume3DFigure= (figure) => {
  if(Figure3D.isFigure3D(figure)) {
    return figure.getValume();
  }
  throw new TypeError("Param of getVolume3DFigure method is not a figure!");
};

try{
  const figure3D = new Figure3D("Figure3D");
  const sphere = new Sphere("Sphere", 10);
  const cube = new Cube("Cube", 5);
  const cylinder = new Cylinder("Cylinder", 10, 15);

  // console.log(getVolume3DFigure(figure3D));
  console.log(getVolume3DFigure(sphere));
  console.log(getVolume3DFigure(cube));
  console.log(getVolume3DFigure(cylinder));
} catch(error) {
  console.error(error);
}

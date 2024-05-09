'user strict';

// Створити функцію getVolume3DFigure, яка приймає будь яку 3d фігуру і повертає її об'єм.
const getVolume3DFigure= (figure) => {
  if(Figure3D.isFigure3D(figure)) {
    return figure.getValume();
  }
  throw new TypeError("Param of getVolume3DFigure method is not a figure!");
};

try{
  const figure3D = new Figure3D();
  const sphere = new Sphere();
  const cube = new Cube();
  const cylinder = new Cylinder();

  console.log(getVolume3DFigure(figure3D));
  console.log(getVolume3DFigure(sphere));
  console.log(getVolume3DFigure(cube));
  console.log(getVolume3DFigure(cylinder));
} catch(error) {
  console.error(error);
}

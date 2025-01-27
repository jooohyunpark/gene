export const spaceBase = 8;

export const space25 = spaceBase * 0.25;
export const space50 = spaceBase * 0.5;
export const space100 = spaceBase * 1;
export const space150 = spaceBase * 1.5;
export const space200 = spaceBase * 2;
export const space300 = spaceBase * 3;
export const space400 = spaceBase * 4;
export const space500 = spaceBase * 5;
export const space600 = spaceBase * 6;
export const space800 = spaceBase * 8;
export const space1000 = spaceBase * 10;
export const space1500 = spaceBase * 15;

export const space = (multiplier = 1, base = 8) => base * multiplier;

export const spacing = {
  space25,
  space50,
  space100,
  space150,
  space200,
  space300,
  space400,
  space500,
  space600,
  space800,
  space1000,
  space1500,
};

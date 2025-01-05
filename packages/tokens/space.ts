export const spaceBase = 8;

export const space025 = spaceBase * 0.25;
export const space050 = spaceBase * 0.5;
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

export const space = {
  "025": space025,
  "050": space050,
  100: space100,
  150: space150,
  200: space200,
  300: space300,
  400: space400,
  500: space500,
  600: space600,
  800: space800,
  1000: space1000,
  1500: space1500,
};

export const spacing = (multiplier = 1, base = 8) => base * multiplier;

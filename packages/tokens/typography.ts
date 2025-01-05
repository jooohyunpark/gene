export const pxToRem = (px = 16, rootFontSize = 16) =>
  `${px / rootFontSize}rem`;

export const fontSize = pxToRem(48);
export const lineHeightH1 = pxToRem(56);

export const fontWeight100 = 100;
export const fontWeight200 = 200;
export const fontWeight300 = 300;
export const fontWeight400 = 400;
export const fontWeight500 = 500;
export const fontWeight600 = 600;
export const fontWeight700 = 700;
export const fontWeight800 = 800;
export const fontWeight900 = 900;
export const fontWeight = {
  100: fontWeight100,
  200: fontWeight200,
  300: fontWeight300,
  400: fontWeight400,
  500: fontWeight500,
  600: fontWeight600,
  700: fontWeight700,
  800: fontWeight800,
  900: fontWeight900,
};

export const letterSpacing100 = "0.01em";
export const letterSpacing200 = "0.02em";
export const letterSpacing300 = "0.03em";
export const letterSpacingNegative100 = "-0.01em";
export const letterSpacingNegative200 = "-0.02em";
export const letterSpacingNegative300 = "-0.03em";
export const letterSpacing = {
  100: letterSpacing100,
  200: letterSpacing200,
  300: letterSpacing300,
  negative: {
    100: letterSpacingNegative100,
    200: letterSpacingNegative200,
    300: letterSpacingNegative300,
  },
};

export const typography = {
  fontWeight,
  letterSpacing,
};

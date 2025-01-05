export const pxToRem = (px = 16, rootFontSize = 16) =>
  `${px / rootFontSize}rem`;

export const fontFamily = '"Inter", "Helvetica Neue", sans-serif';

// export const fontSizeHeading01 = 64;
// export const fontSizeHeading02 = 48;
// export const fontSizeHeading03 = 40;
// export const fontSizeHeading04 = 32;
// export const fontSizeHeading05 = 24;
// export const fontSizeHeading06 = 20;
// export const fontSize = {
//   heading01: fontSizeHeading01,
//   heading02: fontSizeHeading02,
//   heading03: fontSizeHeading03,
//   heading04: fontSizeHeading04,
//   heading05: fontSizeHeading05,
//   heading06: fontSizeHeading06,
// };

// export const lineHeight01 = 1;
// export const lineHeight02 = 1.25;
// export const lineHeight03 = 1.5;
// export const lineHeight04 = 1.75;
// export const lineHeight = {
//   "01": lineHeight01,
//   "02": lineHeight02,
//   "03": lineHeight03,
//   "04": lineHeight04,
// };

// export const fontWeight100 = 100;
// export const fontWeight200 = 200;
// export const fontWeight300 = 300;
// export const fontWeight400 = 400;
// export const fontWeight500 = 500;
// export const fontWeight600 = 600;
// export const fontWeight700 = 700;
// export const fontWeight800 = 800;
// export const fontWeight900 = 900;
// export const fontWeight = {
//   100: fontWeight100,
//   200: fontWeight200,
//   300: fontWeight300,
//   400: fontWeight400,
//   500: fontWeight500,
//   600: fontWeight600,
//   700: fontWeight700,
//   800: fontWeight800,
//   900: fontWeight900,
// };

// export const letterSpacing100 = "0.01em";
// export const letterSpacing200 = "0.02em";
// export const letterSpacing300 = "0.03em";
// export const letterSpacingNegative100 = "-0.01em";
// export const letterSpacingNegative200 = "-0.02em";
// export const letterSpacingNegative300 = "-0.03em";
// export const letterSpacing = {
//   100: letterSpacing100,
//   200: letterSpacing200,
//   300: letterSpacing300,
//   negative: {
//     100: letterSpacingNegative100,
//     200: letterSpacingNegative200,
//     300: letterSpacingNegative300,
//   },
// };

export const h1 = {
  fontSize: 64,
  lineHeight: 1.25,
  fontWeight: 600,
  letterSpacing: "-0.03em",
};

export const h2 = {
  fontSize: 48,
  lineHeight: 1.25,
  fontWeight: 600,
  letterSpacing: "-0.03em",
};

export const h3 = {
  fontSize: 40,
  lineHeight: 1.25,
  fontWeight: 600,
  letterSpacing: "-0.03em",
};

export const h4 = {
  fontSize: 32,
  lineHeight: 1.25,
  fontWeight: 600,
  letterSpacing: "-0.02em",
};

export const h5 = {
  fontSize: 24,
  lineHeight: 1.25,
  fontWeight: 700,
  letterSpacing: 0,
};

export const h6 = {
  fontSize: 20,
  lineHeight: 1.25,
  fontWeight: 700,
  letterSpacing: 0,
};

export const typography = {
  fontFamily,

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
};

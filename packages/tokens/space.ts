const spacingbase = 8;

export const spacing = {
  "025": spacingbase * 0.25,
  "050": spacingbase * 0.5,
  "100": spacingbase * 1,
  "150": spacingbase * 1.5,
  "200": spacingbase * 2,
  "300": spacingbase * 3,
  "400": spacingbase * 4,
  "500": spacingbase * 5,
  "600": spacingbase * 6,
  "800": spacingbase * 8,
  "1000": spacingbase * 10,
  "1500": spacingbase * 15,
  get: (multiplier = 1, base = 8) => base * multiplier,
};

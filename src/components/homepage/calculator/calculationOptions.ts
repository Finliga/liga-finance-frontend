export const options = [
  {
    value: "tov",
    formula: (employees: number, operations: number) =>
      employees * operations * 80,
  },
  {
    value: "fop",
    formula: (employees: number, operations: number) =>
      employees * operations * 60,
  },
  {
    value: "other",
    formula: (employees: number, operations: number) =>
      employees * operations * 40,
  },
];

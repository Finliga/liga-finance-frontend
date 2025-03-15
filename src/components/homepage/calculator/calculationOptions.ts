export const options = [
  {
    value: "tov",
    formula: (employees: number, operations: number) =>
      employees * operations * 170,
  },
  {
    value: "fop",
    formula: (employees: number, operations: number) =>
      employees * operations * 150,
  },
  {
    value: "other",
    formula: (employees: number, operations: number) =>
      employees * operations * 120,
  },
];

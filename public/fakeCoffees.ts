interface IfakeCoffees {
  name: string,
  ingredients: string[],
  quantity: number
};

const fakeCoffees = [
  { name: 'Lunar coffee', ingredients: ['sal', 'coffee bean'], quantity: 1 },
  { name: 'Earth coffee', ingredients: ['sugar','coffee bean'], quantity: 1 }
] as IfakeCoffees[];

export default fakeCoffees;
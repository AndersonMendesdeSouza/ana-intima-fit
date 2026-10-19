// Dados demonstrativos: ajuste preços e condições antes de usar o catálogo real.
// price: valor em reais. payment: desconto no Pix e parcelas sem juros no crédito.
const products = [
  {
    id: 1,
    name: 'Conjunto Delicadeza',
    category: 'lingerie',
    price: 89.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: 'Destaque',
    image: 'assets/lingeries/lingeri1.webp'
  },
  {
    id: 2,
    name: 'Calcinha Essencial',
    category: 'calcinha',
    price: 24.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/calcinhas/calcinha1.webp'
  },
  {
    id: 3,
    name: 'Sutiã Encanto',
    category: 'sutia',
    price: 59.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: 'Favorito',
    image: 'assets/sutians/sutian1.jpeg'
  },
  {
    id: 4,
    name: 'Robe Elegance',
    category: 'robe',
    price: 119.70,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/roby/roby1.webp'
  },
  {
    id: 5,
    name: 'Conjunto Aurora',
    category: 'lingerie',
    price: 99.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: 'Novidade',
    image: 'assets/lingeries/lingeri2.webp'
  },
  {
    id: 6,
    name: 'Calcinha Conforto',
    category: 'calcinha',
    price: 29.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/calcinhas/calcinha2.webp'
  },
  {
    id: 7,
    name: 'Sutiã Serena',
    category: 'sutia',
    price: 54.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/sutians/sutian2.jpeg'
  },
  {
    id: 8,
    name: 'Robe Soft',
    category: 'robe',
    price: 109.80,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/roby/roby2.webp'
  },
  {
    id: 9,
    name: 'Conjunto Rubi',
    category: 'lingerie',
    price: 109.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/lingeries/lingeri3.jpeg'
  },
  {
    id: 10,
    name: 'Conjunto Rosé',
    category: 'lingerie',
    price: 119.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/lingeries/lingeri4.png'
  },
  {
    id: 11,
    name: 'Calcinha Renda',
    category: 'calcinha',
    price: 32.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/calcinhas/calcinha3.jpeg'
  },
  {
    id: 12,
    name: 'Sutiã Essencial',
    category: 'sutia',
    price: 49.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 6 },
    tag: '',
    image: 'assets/sutians/sutian3.jpeg'
  },
  {
    id: 13,
    name: 'Robe Delicado',
    category: 'robe',
    price: 129.90,
    payment: { pixDiscountPercent: 5, creditInstallments: 3 },
    tag: '',
    image: 'assets/roby/roby3.webp'
  }
];

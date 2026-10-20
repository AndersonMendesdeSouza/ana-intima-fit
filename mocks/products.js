// Produtos e preços informados pela loja; as fotos são provisórias.
// price e bulk.unitPrice: valores em reais. minQuantity: quantidade mínima da oferta.
// image: caminho de uma foto ou lista de caminhos para exibir um carrossel no card.
// payment.creditInstallments: número de parcelas do crédito; o valor é calculado pelo preço.
const products = [
  {
    id: 1,
    name: 'Fita de regulagem',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: 'assets/calcinhas/calcinha1.webp'
  },
  {
    id: 2,
    name: 'Cós largo de renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: 'assets/calcinhas/calcinha2.webp'
  },
  {
    id: 3,
    name: 'Cós de renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: 'assets/calcinhas/calcinha3.jpeg'
  },
  {
    id: 4,
    name: 'Cós largo sem renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: 'assets/calcinhas/calcinha1.webp'
  },
  {
    id: 5,
    name: 'Bojo soft',
    category: 'lingerie',
    price: 209.90,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: '',
    image: [
      'assets/lingeries/bojoSoft/bojosoftbej.jpg',
      'assets/lingeries/bojoSoft/bojosoftbejcosta.jpg',
      'assets/lingeries/bojoSoft/bojosoftprebej.jpg',
      'assets/lingeries/bojoSoft/bojosoftpreto.jpg'
    ]
  },
  {
    id: 6,
    name: 'Bojo',
    category: 'lingerie',
    price: 189.90,
    sizes: ['P', 'M', 'G'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: '',
    image: 'assets/lingeries/lingeri2.webp'
  },
  {
    id: 7,
    name: 'Sem bojo',
    category: 'lingerie',
    price: 179.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G'],
    tag: '',
    image: 'assets/lingeries/lingeri3.jpeg'
  },
  {
    id: 8,
    name: 'Malha com renda',
    category: 'baby-doll',
    price: 159.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G'],
    tag: '',
    image: 'assets/lingeries/lingeri4.png'
  },
  {
    id: 9,
    name: 'Seda com renda',
    category: 'baby-doll',
    price: 229.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G'],
    tag: '',
    image: 'assets/roby/roby1.webp'
  },
  {
    id: 10,
    name: 'Malha',
    category: 'camisola',
    price: 169.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G'],
    tag: '',
    image: 'assets/roby/roby2.webp'
  },
  {
    id: 11,
    name: 'Seda com renda',
    category: 'camisola',
    price: 229.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G'],
    tag: '',
    image: 'assets/roby/roby3.webp'
  }
];

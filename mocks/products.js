// Produtos e preços informados pela loja; as fotos são provisórias.
// price e bulk.unitPrice: valores em reais. minQuantity: quantidade mínima da oferta.
// image: caminho de uma foto ou lista de caminhos para exibir um carrossel no card.
// payment.creditInstallments: número de parcelas do crédito; o valor é calculado pelo preço.
const products = [
  {
    id: 1,
    name: 'Calcinha Cós de renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: [ 
      'assets/calcinhas/cosderenda/cosrenda1.png',
      'assets/calcinhas/cosderenda/cosrenda2.png',
      'assets/calcinhas/cosderenda/cosrenda3.png',
    ]
  },
  {
    id: 2,
    name: 'Calcinha Cós de renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image:[ 
      'assets/calcinhas/cosrendalargo/cosrendalargo2.png',
      'assets/calcinhas/cosrendalargo/cosrendalargo1.png',
      'assets/calcinhas/cosrendalargo/cosrendalargo3.png',
    ]
  },
  {
    id: 3,
    name: 'Cós de regulagem',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 5, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: [
      'assets/calcinhas/regulagem/regulagem1.png',
      'assets/calcinhas/regulagem/regulagem2.png',
      'assets/calcinhas/regulagem/regulagem3.png',
    ]
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
    sizes: ['P', 'M', 'G', 'GG'],
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
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image: 'assets/lingeries/lingeri3.jpeg'
  },
  {
    id: 8,
    name: 'Malha e renda',
    category: 'baby-doll',
    price: 159.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image:[
    'assets/babydol/babydolmalha/babydolazul.png',
    'assets/babydol/babydolmalha/babydolazulc.png',
    'assets/babydol/babydolmalha/babydolbranco.png',
    'assets/babydol/babydolmalha/babydolnude.png',
    'assets/babydol/babydolmalha/babydolpremarr.png',
    'assets/babydol/babydolmalha/babydolpret.png',
    'assets/babydol/babydolmalha/babydolros.png',
    'assets/babydol/babydolmalha/babydolrosclar.png',
    'assets/babydol/babydolmalha/babydolverd.png',
    'assets/babydol/babydolmalha/babydolverme.png',
  ]
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
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image:[
    'assets/babydol/babydolseda/babydolpret.png',
    'assets/babydol/babydolseda/babydolamare.png',
    'assets/babydol/babydolseda/babydolrosa.png',
    'assets/babydol/babydolseda/babydolverd.png',
  ]
  },
  {
    id: 10,
    name: 'Seda e renda',
    category: 'camisola',
    price: 229.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image: [
    'assets/camisola/camisola1.png',
    'assets/camisola/camisola2.png',
    'assets/camisola/camisola3.png',
    'assets/camisola/camisola4.png',
    'assets/camisola/camisola5.png',
    'assets/camisola/camisola6.png',
      
    ]
  },
  {
    id: 11,
    name: 'Malha e renda',
    category: 'camisola',
    price: 169.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image: [
    'assets/camisola/malha/malha1.png',
      
    ]
  },
];

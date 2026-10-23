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
      bulk: { minQuantity: 4, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: [ 
      'assets/calcinhas/cosderenda/cosrenda.png',
      'assets/calcinhas/cosderenda/cosrenda1.png',
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
      bulk: { minQuantity: 4, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image:[ 
      'assets/calcinhas/cosrendalargo/cosrendalargo1.png',
      'assets/calcinhas/cosrendalargo/cosrendalargo2.png',
    ]
  },
  {
    id: 3,
    name: 'Calcinha Cós largo sem renda',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 4, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image:[ 
      'assets/calcinhas/coslargosemrenda/semrenda1.png',
      'assets/calcinhas/coslargosemrenda/semrenda2.png',
    ]
  },
  {
    id: 4,
    name: 'Cós de regulagem',
    category: 'calcinha',
    price: 30.00,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
      bulk: { minQuantity: 4, unitPrice: 25.00, methods: 'dinheiro, Pix ou débito' }
    },
    tag: '',
    image: [
      'assets/calcinhas/regulagem/regulagem1.png',
      'assets/calcinhas/regulagem/regulagem2.png',
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
    tag: 'Bojo soft',
    image: [
      'assets/lingeries/bojoSoft/bojosoftbej.jpg',
      'assets/lingeries/bojoSoft/bojosoftbejcosta.jpg',
      'assets/lingeries/bojoSoft/bojosoftprebej.jpg',
      'assets/lingeries/bojoSoft/bojosoftpreto.jpg',
      'assets/lingeries/bojoSoft/bojosoftpreto2.png'
    ]
  },
  {
    id: 6,
    name: 'Lingerie Dani Marfim',
    category: 'lingerie',
    price: 189.90,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: 'Sem Bojo',
    image: [
        'assets/lingeries/sembojo/dani.png',
        'assets/lingeries/sembojo/dani2.png',
        'assets/lingeries/sembojo/dani3.png',
    ]
  },
  {
    id: 7,
    name: 'Lingerie Aura',
    category: 'lingerie',
    price: 239.90,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: 'Sem Bojo',
    image: [
        'assets/lingeries/sembojo/aura.png',
        'assets/lingeries/sembojo/aura2.png',
    ]
  },
  {
    id: 8,
    name: 'Lingerie Camile',
    category: 'lingerie',
    price: 209.90,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: 'Sem Bojo',
    image: [
        'assets/lingeries/sembojo/camile.png',
        'assets/lingeries/sembojo/camile2.png',
        'assets/lingeries/sembojo/camile3.png',
        'assets/lingeries/sembojo/camile4.png',
    ]
  },
  {
    id: 9,
    name: 'Lingerie Donatela',
    category: 'lingerie',
    price: 199.90,
    sizes: ['P', 'M', 'G', 'GG'],
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    tag: 'Sem Bojo',
    image: [
        'assets/lingeries/sembojo/donatela.png',
    ]
  },
  {
    id: 10,
    name: 'Lingerie Duda',
    category: 'lingerie',
    price: 189.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Sem Bojo',
    image: 'assets/lingeries/sembojo/duda.png'
  },
  {
    id: 11,
    name: 'Lingerie Anitta ',
    category: 'lingerie',
    price: 199.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Com Bojo',
    image: 'assets/lingeries/combojo/anitta.png'
  },
  {
    id: 12,
    name: 'Lingerie Lua',
    category: 'lingerie',
    price: 189.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Com Bojo',
    image: ['assets/lingeries/combojo/lua.png','assets/lingeries/combojo/lua2.png',]
  },
  {
    id: 13,
    name: 'Lingerie Flor',
    category: 'lingerie',
    price: 189.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: 'Com Bojo',
    image: ['assets/lingeries/combojo/flor.png']
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
    name: 'Robe Noiva Nathy',
    category: 'robes',
    price: 329.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image:[
    'assets/robes/noiva.png',
  ]
  },
  {
    id: 17,
    name: 'Robe Malha com renda',
    category: 'robes',
    price: 279.90,
    payment: {
      methods: 'Pix, dinheiro ou débito',
      creditInstallments: 3,
    },
    sizes: ['P', 'M', 'G', 'GG'],
    tag: '',
    image:[
    'assets/robes/robe1.png',
    'assets/robes/robe2.png',
    'assets/robes/robe3.png',
    'assets/robes/robe4.png',
    'assets/robes/robe5.png',
  ]
  },
  {
    id: 18,
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
    id: 19,
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

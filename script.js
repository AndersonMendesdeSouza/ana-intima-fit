// CONFIGURAÇÃO: substitua pelo WhatsApp da loja, com DDI 55 + DDD + número, apenas dígitos.
const WHATSAPP = '5599999999999';
// Fotos locais organizadas por categoria na pasta assets.
const categories = [
  { id:'lingerie', name:'Lingeries', image:'assets/lingeries/lingeri1.webp' },
  { id:'calcinha', name:'Calcinhas', image:'assets/calcinhas/calcinha1.webp' },
  { id:'sutia', name:'Sutiãs', image:'assets/sutians/sutian1.jpeg' },
  { id:'robe', name:'Robes', image:'assets/roby/roby1.webp' }
];
// Produtos fictícios para demonstrar o layout: altere fotos, nomes, preços e categorias.
const products = [
  {id:1,name:'Conjunto Delicadeza',category:'lingerie',price:'Consulte o valor',tag:'Destaque',image:'assets/lingeries/lingeri1.webp'},
  {id:2,name:'Calcinha Essencial',category:'calcinha',price:'Consulte o valor',tag:'',image:'assets/calcinhas/calcinha1.webp'},
  {id:3,name:'Sutiã Encanto',category:'sutia',price:'Consulte o valor',tag:'Favorito',image:'assets/sutians/sutian1.jpeg'},
  {id:4,name:'Robe Elegance',category:'robe',price:'Consulte o valor',tag:'',image:'assets/roby/roby1.webp'},
  {id:5,name:'Conjunto Aurora',category:'lingerie',price:'Consulte o valor',tag:'Novidade',image:'assets/lingeries/lingeri2.webp'},
  {id:6,name:'Calcinha Conforto',category:'calcinha',price:'Consulte o valor',tag:'',image:'assets/calcinhas/calcinha2.webp'},
  {id:7,name:'Sutiã Serena',category:'sutia',price:'Consulte o valor',tag:'',image:'assets/sutians/sutian2.jpeg'},
  {id:8,name:'Robe Soft',category:'robe',price:'Consulte o valor',tag:'',image:'assets/roby/roby2.webp'}
];
const categoryName = id => categories.find(c=>c.id===id)?.name || id;
const whatsappLink = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const categoriesGrid = document.querySelector('#categories-grid');
const filters = document.querySelector('#filters');
const productGrid = document.querySelector('#product-grid');
const options = [{id:'todos',name:'Todos'},...categories];
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.1});
function observeNew(){document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el))}
function renderCategories(){
  categoriesGrid.innerHTML=categories.map(c=>`<a href="#colecao" class="category-card reveal" data-category="${c.id}" aria-label="Ver ${c.name}"><img src="${c.image}" alt="Imagem ilustrativa da categoria ${c.name}" loading="lazy"><div class="category-content"><div><span>EXPLORE A COLEÇÃO</span><h3>${c.name}</h3></div><span class="category-arrow">↗</span></div></a>`).join('');
  categoriesGrid.querySelectorAll('[data-category]').forEach(link=>link.addEventListener('click',()=>selectFilter(link.dataset.category)));
}
function renderFilters(){filters.innerHTML=options.map((o,i)=>`<button type="button" class="filter ${i===0?'active':''}" data-filter="${o.id}" aria-pressed="${i===0}">${o.name}</button>`).join('');filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>selectFilter(button.dataset.filter)))}
function selectFilter(id){filters.querySelectorAll('button').forEach(button=>{const active=button.dataset.filter===id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderProducts(id)}
function updateCarouselControls(group){
 const track=group.querySelector('.product-carousel');
 group.querySelector('[data-direction="previous"]').disabled=track.scrollLeft<=1;
 group.querySelector('[data-direction="next"]').disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-1;
}
function renderProducts(id='todos'){
 const visibleCategories=id==='todos'?categories:categories.filter(category=>category.id===id);
 productGrid.innerHTML=visibleCategories.map(category=>{
  const categoryProducts=products.filter(product=>product.category===category.id);
  return `<section class="product-group reveal" aria-labelledby="heading-${category.id}">
   <div class="product-group-header">
    <h3 id="heading-${category.id}">${category.name}</h3>
    <div class="carousel-controls">
     <button type="button" class="carousel-button" data-direction="previous" aria-label="Ver ${category.name} anteriores" aria-controls="carousel-${category.id}">←</button>
     <button type="button" class="carousel-button" data-direction="next" aria-label="Ver próximos produtos de ${category.name}" aria-controls="carousel-${category.id}">→</button>
    </div>
   </div>
   <div class="product-carousel" id="carousel-${category.id}" role="region" aria-roledescription="carrossel" aria-label="Produtos de ${category.name}" tabindex="0">
    ${categoryProducts.map(p=>`<article class="product-card"><div class="product-image"><img src="${p.image}" alt="Imagem ilustrativa de ${p.name}" loading="lazy">${p.tag?`<span class="product-tag">${p.tag}</span>`:''}</div><div class="product-meta"><span class="product-category">${categoryName(p.category)}</span><h4>${p.name}</h4><p>${p.price}</p><a class="product-link" href="${whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name}.`)}" target="_blank" rel="noopener noreferrer">Consultar no WhatsApp ↗</a></div></article>`).join('')}
   </div>
  </section>`;
 }).join('');
 productGrid.querySelectorAll('.product-group').forEach(group=>{
  const track=group.querySelector('.product-carousel');
  group.querySelectorAll('.carousel-button').forEach(button=>button.addEventListener('click',()=>{
   const cardWidth=track.querySelector('.product-card').offsetWidth;
   const gap=parseFloat(getComputedStyle(track).columnGap);
   const direction=button.dataset.direction==='next'?1:-1;
   track.scrollBy({left:direction*(cardWidth+gap)});
  }));
  track.addEventListener('scroll',()=>updateCarouselControls(group),{passive:true});
  updateCarouselControls(group);
 });
 observeNew();
}
window.addEventListener('resize',()=>productGrid.querySelectorAll('.product-group').forEach(updateCarouselControls));
renderCategories();renderFilters();renderProducts();observeNew();
document.querySelectorAll('.whatsapp-general').forEach(a=>a.href=whatsappLink('Olá! Vim pelo catálogo da Ana\'s IntimaFit e gostaria de conhecer as peças.'));
document.querySelector('#year').textContent=new Date().getFullYear();
const menuButton=document.querySelector('#menu-toggle');const nav=document.querySelector('#main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu')}));

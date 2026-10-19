// CONFIGURAÇÃO: substitua pelo WhatsApp da loja, com DDI 55 + DDD + número, apenas dígitos.
const WHATSAPP = '5599999999999';
// As fotos abaixo são demonstrativas. Substitua por arquivos em assets/images/.
const categories = [
  { id:'lingerie', name:'Lingeries', image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85' },
  { id:'calcinha', name:'Calcinhas', image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85' },
  { id:'sutia', name:'Sutiãs', image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85' },
  { id:'robe', name:'Robes', image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85' }
];
// Produtos fictícios para demonstrar o layout: altere fotos, nomes, preços e categorias.
const products = [
  {id:1,name:'Conjunto Delicadeza',category:'lingerie',price:'Consulte o valor',tag:'Destaque',image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85'},
  {id:2,name:'Calcinha Essencial',category:'calcinha',price:'Consulte o valor',tag:'',image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85'},
  {id:3,name:'Sutiã Encanto',category:'sutia',price:'Consulte o valor',tag:'Favorito',image:'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85'},
  {id:4,name:'Robe Elegance',category:'robe',price:'Consulte o valor',tag:'',image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85'},
  {id:5,name:'Conjunto Aurora',category:'lingerie',price:'Consulte o valor',tag:'Novidade',image:'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=85'},
  {id:6,name:'Calcinha Conforto',category:'calcinha',price:'Consulte o valor',tag:'',image:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85'},
  {id:7,name:'Sutiã Serena',category:'sutia',price:'Consulte o valor',tag:'',image:'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=85'},
  {id:8,name:'Robe Soft',category:'robe',price:'Consulte o valor',tag:'',image:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=85'}
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
function renderProducts(id='todos'){
 const visible=id==='todos'?products:products.filter(p=>p.category===id);
 productGrid.innerHTML=visible.map(p=>`<article class="product-card reveal"><div class="product-image"><img src="${p.image}" alt="Imagem ilustrativa de ${p.name}" loading="lazy">${p.tag?`<span class="product-tag">${p.tag}</span>`:''}</div><div class="product-meta"><span class="product-category">${categoryName(p.category)}</span><h3>${p.name}</h3><p>${p.price}</p><a class="product-link" href="${whatsappLink(`Olá! Gostaria de saber mais sobre ${p.name}.`)}" target="_blank" rel="noopener noreferrer">Consultar no WhatsApp ↗</a></div></article>`).join('');
 observeNew();
}
renderCategories();renderFilters();renderProducts();observeNew();
document.querySelectorAll('.whatsapp-general').forEach(a=>a.href=whatsappLink('Olá! Vim pelo catálogo da Ana\'s IntimaFit e gostaria de conhecer as peças.'));
document.querySelector('#year').textContent=new Date().getFullYear();
const menuButton=document.querySelector('#menu-toggle');const nav=document.querySelector('#main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu')}));

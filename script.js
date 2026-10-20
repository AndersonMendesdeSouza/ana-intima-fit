// CONFIGURAÇÃO: substitua pelo WhatsApp da loja, com DDI 55 + DDD + número, apenas dígitos.
const WHATSAPP = '5564999999687';
// Fotos locais organizadas por categoria na pasta assets.
const categories = [
  { id:'calcinha', name:'Calcinhas GD1', image:'assets/calcinhas/calcinha1.webp' },
  { id:'lingerie', name:'Lingeries', image:'assets/lingeries/bojoSoft/bojosoftbej.jpg' },
  { id:'baby-doll', name:'Baby Doll', image:'assets/lingeries/lingeri4.png' },
  { id:'camisola', name:'Camisola', image:'assets/roby/roby2.webp' }
];
// Os produtos são carregados de mocks/products.js antes deste arquivo.
const priceFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const categoryName = id => categories.find(c=>c.id===id)?.name || id;
const whatsappLink = message => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
const arrowIcon = '<svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 19 19 5M5 5h14v14" /></svg>';
const categoriesGrid = document.querySelector('#categories-grid');
const filters = document.querySelector('#filters');
const productGrid = document.querySelector('#product-grid');
const options = [{id:'todos',name:'Todos'},...categories];
const hero = document.querySelector('.hero');
const siteHeader = document.querySelector('.site-header');
const announcement = document.querySelector('.announcement');
function updateHeroOffset() {
 const topOffset = siteHeader.offsetHeight + announcement.offsetHeight;
 hero.style.setProperty('--hero-top-offset', `${topOffset}px`);
}
// Recalcula quando fontes, quebras de linha ou a largura alteram o cabeçalho.
const heroHeaderObserver = new ResizeObserver(updateHeroOffset);
heroHeaderObserver.observe(siteHeader);
heroHeaderObserver.observe(announcement);
updateHeroOffset();
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}});
},{threshold:.1});
function observeNew(){document.querySelectorAll('.reveal:not(.visible)').forEach(el=>observer.observe(el))}
function renderCategories(){
  categoriesGrid.innerHTML=categories.map(c=>`<a href="#colecao" class="category-card reveal" data-category="${c.id}" aria-label="Ver ${c.name}"><img src="${c.image}" alt="Imagem ilustrativa da categoria ${c.name}" loading="lazy"><div class="category-content"><div><span>EXPLORE A COLEÇÃO</span><h3>${c.name}</h3></div><span class="category-arrow">${arrowIcon}</span></div></a>`).join('');
  categoriesGrid.querySelectorAll('[data-category]').forEach(link=>link.addEventListener('click',()=>selectFilter(link.dataset.category)));
}
function renderFilters(){filters.innerHTML=options.map((o,i)=>`<button type="button" class="filter ${i===0?'active':''}" data-filter="${o.id}" aria-pressed="${i===0}">${o.name}</button>`).join('');filters.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>selectFilter(button.dataset.filter)))}
function selectFilter(id){filters.querySelectorAll('button').forEach(button=>{const active=button.dataset.filter===id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active))});renderProducts(id)}
function updateCarouselControls(group){
 const track=group.querySelector('.product-carousel');
 group.querySelector('[data-direction="previous"]').disabled=track.scrollLeft<=1;
 group.querySelector('[data-direction="next"]').disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-1;
}
function renderProduct(product) {
 const price = priceFormatter.format(product.price);
 const sizes = product.sizes || [];
 const images = Array.isArray(product.image) ? product.image : [product.image];
 const hasGallery = images.length > 1;
 let paymentContent = '<p>Consulte as condições de pagamento pelo WhatsApp.</p>';
 let bulkOffer = '';
 if (product.payment) {
  const installments = product.payment.creditInstallments;
  let creditPayment = '';
  if (Number.isInteger(installments) && installments > 0) {
   const installmentPrice = priceFormatter.format(product.price / installments);
   creditPayment = `<li><strong>Cartão de crédito</strong><span>Em ${installments}x de ${installmentPrice}.</span></li>`;
  }
  paymentContent = `<ul class="payment-options">
   <li><strong>Por unidade</strong><span>${price} · ${product.payment.methods}.</span></li>
   ${creditPayment}
  </ul>`;
  const bulk = product.payment.bulk;
  if (bulk) {
   const bulkPrice = priceFormatter.format(bulk.unitPrice);
   bulkOffer = `<p>A partir de ${bulk.minQuantity} unidades: ${bulkPrice} cada, à vista em ${bulk.methods}.</p>`;
  }
 }

 return `<article class="product-card">
  <div class="product-image"${hasGallery ? ` data-product-gallery role="region" aria-roledescription="carrossel" aria-label="Fotos de ${product.name}"` : ''}>
   ${images.map((image, index) => `<img class="product-photo" src="${image}" alt="${product.name} · foto ${index + 1} de ${images.length}" loading="lazy"${index > 0 ? ' hidden' : ''}>`).join('')}
   ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
   <span class="product-discount">−5% no Pix ou dinheiro</span>
   ${hasGallery ? `<button type="button" class="photo-button photo-previous" data-photo-direction="previous" aria-label="Ver foto anterior de ${product.name}"><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m15 18-6-6 6-6" /></svg></button>
   <button type="button" class="photo-button photo-next" data-photo-direction="next" aria-label="Ver próxima foto de ${product.name}"><svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 6 6 6-6 6" /></svg></button>
   <span class="photo-counter" aria-live="polite" aria-atomic="true">1 / ${images.length}</span>` : ''}
  </div>
  <div class="product-meta">
   <span class="product-category">${categoryName(product.category)}</span>
   <h4>${product.name}</h4>
   <strong class="product-price">${price}</strong>
   ${sizes.length > 0 ? `<ul class="product-sizes" aria-label="Tamanhos de ${product.name}">${sizes.map(size => `<li class="product-size">${size}</li>`).join('')}</ul>` : ''}
   ${bulkOffer}
   <details class="payment-details">
    <summary aria-label="Formas de pagamento de ${product.name}">Formas de pagamento</summary>
    ${paymentContent}
   </details>
   <a class="product-link" href="${whatsappLink(`Olá! Gostaria de saber mais sobre ${product.name} (${categoryName(product.category)}).`)}" target="_blank" rel="noopener noreferrer">Consultar no WhatsApp ${arrowIcon}</a>
  </div>
 </article>`;
}
function initializeProductGalleries() {
 productGrid.querySelectorAll('[data-product-gallery]').forEach(gallery => {
  const images = gallery.querySelectorAll('.product-photo');
  const counter = gallery.querySelector('.photo-counter');
  let currentIndex = 0;

  gallery.querySelectorAll('[data-photo-direction]').forEach(button => {
   button.addEventListener('click', () => {
    if (button.dataset.photoDirection === 'next') {
     currentIndex += 1;
    } else {
     currentIndex -= 1;
    }

    if (currentIndex >= images.length) {
     currentIndex = 0;
    } else if (currentIndex < 0) {
     currentIndex = images.length - 1;
    }

    images.forEach((image, index) => {
     image.hidden = index !== currentIndex;
    });
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
   });
  });
 });
}
function renderProducts(id='todos'){
 const visibleCategories=id==='todos'?categories:categories.filter(category=>category.id===id);
 productGrid.innerHTML=visibleCategories.map(category=>{
  const categoryProducts=products.filter(product=>product.category===category.id);
  return `<section class="product-group reveal" aria-labelledby="heading-${category.id}">
   <div class="product-group-header">
    <h3 id="heading-${category.id}">${category.name}</h3>
    <div class="carousel-controls">
     <button type="button" class="carousel-button" data-direction="previous" aria-label="Ver ${category.name} anteriores" aria-controls="carousel-${category.id}"><svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M19 12H5m7 7-7-7 7-7" /></svg></button>
     <button type="button" class="carousel-button" data-direction="next" aria-label="Ver próximos produtos de ${category.name}" aria-controls="carousel-${category.id}"><svg class="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14m-7-7 7 7-7 7" /></svg></button>
    </div>
   </div>
   <div class="product-carousel" id="carousel-${category.id}" role="region" aria-roledescription="carrossel" aria-label="Produtos de ${category.name}" tabindex="0">
    ${categoryProducts.map(renderProduct).join('')}
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
 initializeProductGalleries();
 observeNew();
}
window.addEventListener('resize',()=>productGrid.querySelectorAll('.product-group').forEach(updateCarouselControls));
renderCategories();renderFilters();renderProducts();observeNew();
document.querySelectorAll('.whatsapp-general').forEach(a=>a.href=whatsappLink('Olá! Vim pelo catálogo da Ana\'s IntimaFit e gostaria de conhecer as peças.'));
document.querySelector('#year').textContent=new Date().getFullYear();
const menuButton=document.querySelector('#menu-toggle');const nav=document.querySelector('#main-nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu')}));

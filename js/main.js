const PRODUCTS = [
  [
    "Korg minilogue xd",
    "Гибридный синтезатор с аналоговым трактом и цифровым Multi Engine",
    "hardware",
    86990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Korg",
    "korg-minilogue-xd.jpg"
  ],
  [
    "Arturia MiniFreak",
    "Цифровые генераторы, аналоговые фильтры и секвенсор",
    "hardware",
    79990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Arturia",
    "arturia-minifreak.png"
  ],
  [
    "Yamaha reface CS",
    "Компактный синтезатор с аналоговым моделированием и встроенными динамиками",
    "hardware",
    56990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Yamaha",
    "yamaha-reface-cs.webp"
  ],
  [
    "Novation Bass Station II",
    "Аналоговый синтезатор для баса и лидов с арпеджиатором",
    "hardware",
    62990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Novation",
    "novation-bass-station-ii.webp"
  ],
  [
    "Roland JUNO-X",
    "Полифонический синтезатор ZEN-Core с моделями JUNO-60 и JUNO-106",
    "hardware",
    234990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Roland",
    "roland-juno-x.jpg"
  ],
  [
    "Sequential Take 5",
    "Пятиголосный синтезатор с аналоговыми генераторами и фильтром",
    "hardware",
    174990,
    "",
    "",
    "СИНТЕЗАТОР",
    "Аппаратура",
    "Sequential",
    "sequential-take-5.png"
  ],
  [
    "CLA-2A",
    "Teletronix LA-2A",
    "effect",
    4490,
    "",
    "",
    "КОМПРЕССОР",
    "Waves",
    "Waves",
    "cla-2a.png"
  ],
  [
    "Virtual Buss Compressors",
    "Шинный компрессор SSL 4000 в модели FG-Grey",
    "effect",
    0,
    "",
    "",
    "КОМПРЕССИЯ",
    "Slate Digital",
    "Slate Digital",
    "virtual-buss-compressors.jpg"
  ],
  [
    "Decapitator",
    "Ampex 350, Neve 1057 и Thermionic Culture Vulture",
    "effect",
    6990,
    "",
    "",
    "САТУРАЦИЯ",
    "Soundtoys",
    "Soundtoys",
    "decapitator.png"
  ],
  [
    "EchoBoy",
    "Roland RE-201 Space Echo, Echoplex EP-3 и Ampex ATR-102",
    "effect",
    6990,
    "",
    "",
    "ДИЛЕЙ",
    "Soundtoys",
    "Soundtoys",
    "echoboy.png"
  ],
  [
    "Valhalla Delay",
    "Режим Space моделирует Roland RE-201 и RE-301",
    "effect",
    4990,
    "",
    "",
    "ДИЛЕЙ",
    "Valhalla DSP",
    "Valhalla DSP",
    "valhalla-delay.jpg"
  ],
  [
    "CLA-76",
    "1176 в вариантах Blue Stripe и Blackface",
    "effect",
    4490,
    "",
    "",
    "КОМПРЕССОР",
    "Waves",
    "Waves",
    "cla-76.png"
  ],
  [
    "VerbSuite Classics",
    "Студийные ревербераторы, в том числе Bricasti M7",
    "effect",
    7490,
    "",
    "",
    "РЕВЕРБЕРАЦИЯ",
    "Slate Digital",
    "Slate Digital",
    "verbsuite-classics.png"
  ],
  [
    "Virtual Tape Machines",
    "Studer A827 и A80 RC",
    "effect",
    6990,
    "",
    "",
    "ЛЕНТОЧНАЯ ЭМУЛЯЦИЯ",
    "Slate Digital",
    "Slate Digital",
    "virtual-tape-machines.png"
  ],
  [
    "MicroShift",
    "Eventide H3000 и AMS DMX 15-80s",
    "effect",
    5990,
    "",
    "",
    "СТЕРЕО",
    "Soundtoys",
    "Soundtoys",
    "microshift.png"
  ],
  [
    "Crystallizer",
    "Алгоритм Reverse Shift процессора Eventide H3000",
    "effect",
    6990,
    "",
    "",
    "ДИЛЕЙ",
    "Soundtoys",
    "Soundtoys",
    "crystallizer.png"
  ],
  [
    "SuperPlate",
    "EMT 140, EMT 240, Audicon, Stocktronics RX4000 и EcoPlate III",
    "effect",
    7490,
    "",
    "",
    "РЕВЕРБЕРАЦИЯ",
    "Soundtoys",
    "Soundtoys",
    "superplate.png"
  ],
  [
    "Soundtoys Color & Echo",
    "Аналоговая сатурация и эхо",
    "bundle",
    11990,
    "",
    "",
    "НАБОР",
    "2 плагина",
    "Soundtoys",
    null,
    [
      "decapitator",
      "echoboy"
    ]
  ],
  [
    "Waves Classic Dynamics",
    "Комплект из CLA-2A и CLA-76",
    "bundle",
    7490,
    "",
    "",
    "БАНДЛ",
    "2 плагина",
    "Waves",
    null,
    [
      "cla-2a",
      "cla-76"
    ]
  ]
];
const PRODUCT_DETAILS = {
  "korg-minilogue-xd": {
    "url": "https://www.korg.com/us/products/synthesizers/minilogue_xd/",
    "specs": [
      [
        "Звуковой движок",
        "Гибридный"
      ],
      [
        "Клавиатура",
        "37 мини-клавиш"
      ],
      [
        "Полифония",
        "4 голоса"
      ],
      [
        "Подключение",
        "Стереовыходы L/MONO и R, MIDI In/Out, USB, Sync In/Out"
      ]
    ]
  },
  "arturia-minifreak": {
    "url": "https://www.arturia.com/products/hardware-synths/minifreak/details",
    "specs": [
      [
        "Звуковой движок",
        "Гибридный"
      ],
      [
        "Клавиатура",
        "37 мини-клавиш с послекасанием"
      ],
      [
        "Полифония",
        "6 голосов"
      ],
      [
        "Подключение",
        "Стереовыходы, аудиовход, MIDI In/Out/Thru, USB"
      ]
    ]
  },
  "yamaha-reface-cs": {
    "url": "https://au.yamaha.com/en/musical-instruments/keyboards/explore/synth-chronology/modal/Modal-reface-cs.html",
    "specs": [
      [
        "Звуковой движок",
        "Цифровое аналоговое моделирование"
      ],
      [
        "Клавиатура",
        "37 мини-клавиш"
      ],
      [
        "Полифония",
        "8 голосов"
      ],
      [
        "Подключение",
        "Стереовыходы L/MONO и R, AUX In, MIDI через адаптер, USB"
      ]
    ]
  },
  "novation-bass-station-ii": {
    "url": "https://novationmusic.com/products/bass-station-ii",
    "specs": [
      [
        "Звуковой движок",
        "Аналоговый"
      ],
      [
        "Клавиатура",
        "25 полноразмерных клавиш с послекасанием"
      ],
      [
        "Полифония",
        "Монофонический режим и парафония"
      ],
      [
        "Подключение",
        "Монофонический линейный выход, аудиовход, MIDI In/Out, USB"
      ]
    ]
  },
  "roland-juno-x": {
    "url": "https://www.roland.com/global/products/juno-x/",
    "specs": [
      [
        "Звуковой движок",
        "Цифровой ZEN-Core"
      ],
      [
        "Клавиатура",
        "61 клавиша с послекасанием"
      ],
      [
        "Полифония",
        "Зависит от модели звукового движка"
      ],
      [
        "Подключение",
        "Стереовыходы, MIDI In/Out, USB, вход для микрофона"
      ]
    ]
  },
  "sequential-take-5": {
    "url": "https://sequential.com/hybrid-analog/take-5-compact-polysynth/",
    "specs": [
      [
        "Звуковой движок",
        "Аналоговый тракт с цифровыми эффектами"
      ],
      [
        "Клавиатура",
        "44 полноразмерные клавиши"
      ],
      [
        "Полифония",
        "5 голосов"
      ],
      [
        "Подключение",
        "Стереовыходы, MIDI In/Out/Thru, USB"
      ]
    ]
  },
  "cla-2a": {
    "prototype": "Teletronix LA-2A",
    "url": "https://www.waves.com/plugins/cla-2a-compressor-limiter"
  },
  "virtual-buss-compressors": {
    "prototype": "Шинный компрессор SSL 4000 в модели FG-Grey",
    "url": "https://slatedigital.com/virtual-buss-compressors/"
  },
  "decapitator": {
    "prototype": "Ampex 350, Neve 1057 и Thermionic Culture Vulture",
    "url": "https://store.soundtoys.com/wp-content/uploads/Decapitator-Manual.pdf"
  },
  "echoboy": {
    "prototype": "Roland RE-201 Space Echo, Echoplex EP-3 и Ampex ATR-102",
    "url": "https://store.soundtoys.com/wp-content/uploads/EchoBoy-Manual.pdf"
  },
  "valhalla-delay": {
    "prototype": "Режим Space моделирует Roland RE-201 и RE-301",
    "url": "https://valhalladsp.com/shop/delay/valhalladelay/"
  },
  "cla-76": {
    "prototype": "1176 в вариантах Blue Stripe и Blackface",
    "url": "https://www.waves.com/bundles/cla-classic-compressors"
  },
  "verbsuite-classics": {
    "prototype": "Студийные ревербераторы, в том числе Bricasti M7",
    "url": "https://docs.slatedigital.com/VSC/VerbSuite_Classics.html"
  },
  "virtual-tape-machines": {
    "prototype": "Studer A827 и A80 RC",
    "url": "https://support.slatedigital.com/hc/en-us/articles/115011299328-Virtual-Tape-Machines"
  },
  "microshift": {
    "prototype": "Eventide H3000 и AMS DMX 15-80s",
    "url": "https://www.soundtoys.com/product/microshift/"
  },
  "crystallizer": {
    "prototype": "Алгоритм Reverse Shift процессора Eventide H3000",
    "url": "https://www.soundtoys.com/product/crystallizer/"
  },
  "superplate": {
    "prototype": "EMT 140, EMT 240, Audicon, Stocktronics RX4000 и EcoPlate III",
    "url": "https://www.soundtoys.com/product/superplate/"
  }
};
const money = n => new Intl.NumberFormat('ru-RU').format(n)+' ₽';
let cart={};try{cart=JSON.parse(localStorage.getItem('freq-cart')||'{}');if(!cart||Array.isArray(cart)||typeof cart!=='object')cart={};}catch{}
const slug=name=>name.toLowerCase().replaceAll(' & ', ' and ').replaceAll('+', '').replaceAll(' ', '-');
const find=id=>PRODUCTS.find(p=>slug(p[0])===id);
cart=Object.fromEntries(Object.entries(cart).filter(([id,q])=>find(id)&&Number.isInteger(q)&&q>0&&q<=99));
const total=()=>Object.entries(cart).reduce((s,[id,q])=>s+find(id)[3]*q,0);
const itemPrice = product => product[3] === 0 ? 'Бесплатно' : money(product[3]);
const deliveryField = document.querySelector('#delivery-city-field');
function updateDeliveryField() {
  if (!deliveryField) return;
  const hasHardware = Object.keys(cart).some(id => find(id)[2] === 'hardware');
  deliveryField.hidden = !hasHardware;
  const input = deliveryField.querySelector('input');
  input.required = hasHardware;
  input.disabled = !hasHardware;
}
let toastTimer;
function toast(text){const el=document.querySelector('.toast');el.textContent=text;el.classList.add('toast--visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('toast--visible'),2600)}
function save(){try{localStorage.setItem('freq-cart',JSON.stringify(cart))}catch{toast('Хранилище недоступно: корзина сохранится только до обновления страницы.')}renderCart()}
function renderCart(){updateDeliveryField();const count=Object.values(cart).reduce((s,q)=>s+q,0);document.querySelectorAll('.cart-count').forEach(x=>x.textContent=count);const rows=Object.entries(cart).map(([id,q])=>{const p=find(id);return `<div class="cart-row"><div><strong>${p[0]}</strong><small>${itemPrice(p)} × ${q}</small></div><div class="cart-row__controls"><button class="icon-button" data-minus="${id}" aria-label="Уменьшить количество ${p[0]}">−</button><span>${q}</span><button class="icon-button" data-plus="${id}" aria-label="Увеличить количество ${p[0]}">+</button><button class="icon-button" data-remove="${id}" aria-label="Удалить ${p[0]}">×</button></div></div>`}).join('')||'<p class="empty-state">Ваша корзина пуста.<br>Выберите аппаратуру или плагины в каталоге.</p>';document.querySelector('#cart-items').innerHTML=rows;document.querySelector('#cart-total').textContent=money(total());const checkout=document.querySelector('#checkout');checkout.hidden=!count;const order=document.querySelector('#order-items');if(order)order.innerHTML=rows+`<div class="modal__total">Итого <strong>${money(total())}</strong></div>`;}
function add(id){if(!find(id))return;if((cart[id]||0)>=99){toast('Максимум 99 единиц');return}cart[id]=(cart[id]||0)+1;save();animateFeedback(document.querySelector('.cart-count'));toast(find(id)[0]+' добавлен в корзину')}
const dialog=document.querySelector('#cart-dialog');document.addEventListener('click',e=>{const addButton=e.target.closest('[data-add]');if(addButton)add(addButton.dataset.add);if(e.target.closest('[data-cart]'))dialog.showModal();if(e.target.closest('[data-close]'))dialog.close();for(const action of ['minus','plus','remove']){const b=e.target.closest('[data-'+action+']');if(!b)continue;const id=b.dataset[action];if(action==='plus'){add(id);return}if(action==='remove'||cart[id]<=1)delete cart[id];else cart[id]--;save()}});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
const menu=document.querySelector('.menu-button');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',open);document.querySelector('.nav').classList.toggle('nav--open',open)});document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');document.querySelector('.nav').classList.remove('nav--open')}});
const grid = document.querySelector('#catalog-grid');
if (grid) {
  const params = new URLSearchParams(location.search);
  const search = document.querySelector('#search');
  const price = document.querySelector('#price');
  const manufacturerPicker = document.querySelector('#manufacturer-picker');
  const manufacturerOptions = [...manufacturerPicker.querySelectorAll('input[name="manufacturer"]')];
  const manufacturerLabel = manufacturerPicker.querySelector('#manufacturer-value');
  const manufacturerSummary = manufacturerPicker.querySelector('summary');
  const sortButtons = [...document.querySelectorAll('[data-sort]')];
  let sort = '';
  const showMore = document.querySelector('#show-more');
  const visibleCount = document.querySelector('#catalog-visible-count');
  const cards = [...grid.children];
  const batchSize = 12;
  let matched = [];
  let shown = 0;

  search.value = params.get('q') || '';
  const brandFromLink = params.get('brand');
  const brandOption = manufacturerOptions.find(option => option.value === brandFromLink);
  if (brandOption) brandOption.checked = true;
  const categoryRadio = [...document.querySelectorAll('[name=category]')]
    .find(input => input.value === params.get('category'));
  if (categoryRadio) categoryRadio.checked = true;

  function filter() {
    const query = search.value.toLowerCase().trim();
    const category = document.querySelector('[name=category]:checked').value;
    const maxPrice = Number(price.value);
    const brand = manufacturerOptions.find(option => option.checked)?.value || '';
    manufacturerLabel.textContent = brand || 'Все производители';
    document.querySelector('#price-label').textContent = money(maxPrice);
    matched = cards.filter(card => (
      (category === 'all' || card.dataset.category === category)
      && (!brand || card.dataset.brand === brand)
      && Number(card.dataset.price) <= maxPrice
      && ((card.dataset.brand || '') + ' ' + card.textContent).toLowerCase().includes(query)
    ));
    if (sort === 'low') matched.sort((a, b) => a.dataset.price - b.dataset.price);
    if (sort === 'high') matched.sort((a, b) => b.dataset.price - a.dataset.price);
    sortButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.sort === sort)));
    shown = 0;
    cards.forEach(card => { card.hidden = true; });
    matched.forEach(card => grid.append(card));
    document.querySelector('#result-count').textContent = 'Найдено: ' + matched.length;
    document.querySelector('#empty').hidden = matched.length !== 0;
    revealBatch();
  }

  function revealBatch(moveFocus = false) {
    const batch = matched.slice(shown, shown + batchSize);
    batch.forEach(card => { card.hidden = false; });
    shown += batch.length;
    showMore.hidden = shown >= matched.length;
    visibleCount.textContent = 'Показано: ' + shown + ' из ' + matched.length;
    if (moveFocus) {
      batch[0]?.querySelector('.product-card__title')?.focus({ preventScroll: true });
      if (!reducedMotion.matches) {
        batch.slice(0, 6).forEach((card, index) => card.animate?.(
          [{ opacity: 0, translate: '0 8px' }, { opacity: 1, translate: '0 0' }],
          { duration: 220, delay: index * 25, fill: 'backwards', easing: 'ease-out' }
        ));
      }
    }
  }

  search.addEventListener('input', filter);
  price.addEventListener('input', filter);
  document.querySelectorAll('[name=category]').forEach(input => input.addEventListener('change', filter));
  manufacturerPicker.addEventListener('change', filter);

  function closeManufacturer(restoreFocus = false) {
    manufacturerPicker.open = false;
    if (restoreFocus) manufacturerSummary.focus();
  }

  manufacturerPicker.addEventListener('click', event => {
    if (event.detail > 0 && event.target.matches('input[name="manufacturer"]')) closeManufacturer(true);
  });
  manufacturerPicker.addEventListener('keydown', event => {
    if (event.key === 'Escape' && manufacturerPicker.open) {
      event.preventDefault();
      closeManufacturer(true);
    }
  });
  manufacturerPicker.addEventListener('focusout', event => {
    if (event.relatedTarget && !manufacturerPicker.contains(event.relatedTarget)) closeManufacturer();
  });
  document.addEventListener('click', event => {
    if (!manufacturerPicker.contains(event.target)) closeManufacturer();
  });
  sortButtons.forEach(button => button.addEventListener('click', () => {
    sort = sort === button.dataset.sort ? '' : button.dataset.sort;
    filter();
  }));
  document.querySelector('#reset-filters').addEventListener('click', () => {
    search.value = '';
    document.querySelector('[value=all]').checked = true;
    price.value = price.max;
    manufacturerOptions[0].checked = true;
    closeManufacturer();
    sort = '';
    filter();
  });
  showMore.addEventListener('click', () => revealBatch(true));
  filter();
}
const productName = document.querySelector('#product-name');
if (productName) {
  const id = new URLSearchParams(location.search).get('id') || 'korg-minilogue-xd';
  const product = find(id);
  const description = document.querySelector('#product-description');
  const addButton = document.querySelector('#product-add');
  const art = document.querySelector('#product-art');
  const specs = document.querySelector('#specs');

  if (!product) {
    productName.textContent = 'Товар не найден';
    description.textContent = 'Вернитесь в каталог и выберите другой товар.';
    addButton.hidden = true;
    document.querySelector('.product-detail a[href="#specs"]').hidden = true;
  } else {
    const [name, desc, category, , , , kind, , brand, image, items] = product;
    const detail = PRODUCT_DETAILS[id];
    const note = document.querySelector('#product-note');
    note.textContent = category === 'hardware'
      ? 'Физический товар. Укажите город доставки в заявке.'
      : 'Цифровой товар. Лицензия через сайт не выдаётся.';
    document.title = name + ' — FREQ';
    productName.textContent = name;
    description.textContent = desc;
    document.querySelector('#product-price').textContent = itemPrice(product);
    document.querySelector('#product-kind').textContent = brand
      ? brand + ' / ' + kind
      : kind + ' / VST3 / AU';
    addButton.dataset.add = id;

    if (category === 'bundle') {
      const plugins = items.map(find);
      const separateTotal = plugins.reduce((sum, plugin) => sum + plugin[3], 0);
      art.innerHTML = '<div class="bundle-art bundle-art--' + plugins.length + '" aria-hidden="true">'
        + plugins.map(plugin => '<img src="images/' + plugin[9] + '" alt="">').join('')
        + '</div>';
      description.nextElementSibling.textContent = 'Бандл добавляется в корзину одной позицией. По отдельности плагины стоят '
        + money(separateTotal) + '.';
      addButton.textContent = 'Добавить бандл в корзину +';
      specs.innerHTML = '<h2>Состав бандла</h2><ul class="bundle-contents">'
        + plugins.map(plugin => '<li><a href="product.html?id=' + slug(plugin[0]) + '">'
          + plugin[0] + '</a><span>' + money(plugin[3]) + ' по отдельности</span></li>').join('')
        + '</ul>';
      document.querySelector('.product-detail a[href="#specs"]').textContent = 'Посмотреть состав';
    } else if (image) {
      const frame = document.createElement('div');
      frame.className = category === 'hardware' ? 'plugin-photo plugin-photo--hardware' : 'plugin-photo';
      const img = document.createElement('img');
      img.src = 'images/' + image;
      img.alt = (category === 'hardware' ? 'Фото ' : 'Интерфейс ') + name;
      frame.append(img);
      art.replaceChildren(frame);

      if (category === 'hardware') {
        const rows = detail.specs.map(([label, value]) => '<tr><th scope="row">' + label + '</th><td>' + value + '</td></tr>').join('');
        specs.innerHTML = '<h2>Характеристики</h2><div class="table-wrapper" role="region" aria-label="Характеристики синтезатора" tabindex="0"><table class="product-table gear-specs"><tbody>'
          + rows + '</tbody></table></div>';
      } else {
        description.textContent = 'Программная эмуляция студийного оборудования.';
        specs.innerHTML = '<h2>Аппаратный прототип</h2><p class="brand-product-note">' + detail.prototype
          + '.</p><p>Требования к системе, совместимость и условия лицензии указаны у производителя.</p>';
      }
      const reference = document.createElement('a');
      reference.className = 'text-link';
      reference.href = detail.url;
      reference.textContent = category === 'hardware' ? 'Характеристики у производителя' : 'Документация производителя';
      specs.append(reference);
    }
  }
}
const form=document.querySelector('#order-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const el=document.querySelector('#form-success');el.hidden=false;el.textContent=total()>0?'Заявка сформирована на сумму '+money(total())+'. Данные никуда не отправлены. Корзина сохранена для дальнейшей проверки.':'Заявка на консультацию сформирована. Данные никуда не отправлены.';el.focus();form.reset()})}renderCart();

// Переход к поиску в каталоге через обычную GET-форму работает и без JavaScript.

const backToTop = document.querySelector('.back-to-top');
function updateBackToTop() {
  const distance = document.documentElement.scrollHeight - window.innerHeight;
  const percent = distance > 0 ? Math.round(Math.min(1, Math.max(0, window.scrollY / distance)) * 100) : 0;
  backToTop.style.setProperty('--scroll-progress', percent + '%');
  backToTop.hidden = window.scrollY < 240;
}
window.addEventListener('scroll', updateBackToTop, { passive: true });
window.addEventListener('resize', updateBackToTop);
updateBackToTop();

const supportWidget = document.querySelector('.support-widget');
const supportToggle = supportWidget.querySelector('.support-widget__toggle');
const supportPanel = supportWidget.querySelector('.support-widget__panel');
const supportClose = supportWidget.querySelector('.support-widget__close');
const supportMessages = supportWidget.querySelector('.support-widget__messages');
const supportForm = supportWidget.querySelector('.support-widget__form');
const supportInput = supportForm.elements.question;
const supportAnswers = [
  [/достав|город|налич|комплектац|гаранти/i, 'Добавьте оборудование в корзину и укажите город в форме заявки. Сайт рассчитывает стоимость товаров. Оплата, отправка заявки и расчёт доставки на сайте недоступны.'],
  [/синтезатор|клавиш|полифони|midi|аудиоинтерфейс|подключ/i, 'В каталоге выберите «Аппаратные синтезаторы». В карточках есть сведения о клавиатуре, полифонии и подключении. Для записи звука используйте линейный аудиовход интерфейса. MIDI передаёт ноты и команды.'],
  [/лиценз|цен[ауы]|оплат|покуп|заяв|заказ|купить/i, 'Заявку можно сформировать на странице «Оформить заявку». Форма работает в браузере. Оплата и выдача лицензий на сайте недоступны.'],
  [/корзин|удали|количеств|добав/i, 'Нажмите «В корзину» на карточке товара. В корзине можно изменить количество или удалить позицию. Список хранится в текущем браузере.'],
  [/fl studio|фл студ|vst|установ|совмест|формат|windows|macos/i, 'Перед установкой проверьте формат VST3 и системные требования у производителя. В FL Studio новые плагины можно найти через Options → Manage plugins → Find installed plugins.'],
  [/waves|вейв|slate|слейт|слэйт|antares|антарес|soundtoys|саунд.?тойс|valhalla|вальхалла/i, 'Используйте поиск в шапке или выберите производителя на странице каталога. В карточке товара есть описание и кнопка добавления в корзину.'],
];

function setSupportOpen(open) {
  supportPanel.hidden = !open;
  supportToggle.setAttribute('aria-expanded', String(open));
  if (open) supportClose.focus();
  else (supportOpener || supportToggle).focus();
}

function appendSupportMessage(text, fromVisitor = false) {
  const message = document.createElement('p');
  message.className = 'support-widget__message';
  message.setAttribute('aria-label', (fromVisitor ? 'Вы: ' : 'Консультант: ') + text);
  if (fromVisitor) message.classList.add('support-widget__message--visitor');
  message.textContent = text;
  supportMessages.append(message);
}

function askSupport(question) {
  appendSupportMessage(question, true);
  const answer = supportAnswers.find(([pattern]) => pattern.test(question));
  appendSupportMessage(answer?.[1] ?? 'Уточните, пожалуйста, ваш вопрос. Я могу помочь с подбором аппаратуры, подключением, корзиной и заявками.');
  supportMessages.scrollTop = supportMessages.scrollHeight;
}

let supportOpener = supportToggle;
supportToggle.addEventListener('click', () => {
  supportOpener = supportToggle;
  setSupportOpen(supportPanel.hidden);
});
document.querySelectorAll('[data-open-support]').forEach(button => {
  button.addEventListener('click', () => {
    supportOpener = button;
    setSupportOpen(true);
  });
});
supportClose.addEventListener('click', () => setSupportOpen(false));
supportWidget.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !supportPanel.hidden) setSupportOpen(false);
});
supportForm.addEventListener('submit', event => {
  event.preventDefault();
  const question = supportInput.value.trim();
  if (!question) return;
  askSupport(question);
  supportForm.reset();
});

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem('freq-favorites') || '[]');
    if (Array.isArray(saved)) return new Set(saved.filter(id => find(id)));
  } catch { /* Корзина и каталог работают и без доступа к хранилищу. */ }
  return new Set();
}

let favorites = readFavorites();
const favoritesGrid = document.querySelector('#favorites-grid');
const productFavorite = document.querySelector('#product-favorite');
const productId = document.querySelector('#product-add')?.dataset.add;
if (productFavorite && productId) {
  productFavorite.hidden = false;
  productFavorite.dataset.favorite = productId;
}

function renderFavorites() {
  document.querySelectorAll('[data-favorite]').forEach(button => {
    const selected = favorites.has(button.dataset.favorite);
    button.setAttribute('aria-pressed', String(selected));
    if (button === productFavorite) {
      button.textContent = selected ? '♥ В избранном' : '♡ В избранное';
    }
  });
  if (favoritesGrid) {
    [...favoritesGrid.children].forEach(card => {
      card.hidden = !favorites.has(slug(card.dataset.name));
    });
    document.querySelector('#favorites-empty').hidden = favorites.size > 0;
  }
}

document.querySelectorAll('[data-favorite]').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.favorite;
    const remove = favorites.has(id);
    if (remove) favorites.delete(id);
    else favorites.add(id);
    try { localStorage.setItem('freq-favorites', JSON.stringify([...favorites])); } catch {}
    renderFavorites();
    if (!remove) animateFeedback(button.querySelector('svg') || button);
    if (remove && favoritesGrid) {
      const target = favoritesGrid.querySelector('article:not([hidden]) .favorite-button')
        || document.querySelector('#favorites-empty a');
      target.focus();
    }
    toast(remove ? 'Товар удалён из избранного' : 'Товар добавлен в избранное');
  });
});
window.addEventListener('storage', event => {
  if (event.key === 'freq-favorites' || event.key === null) {
    favorites = readFavorites();
    renderFavorites();
  }
});
renderFavorites();

const compareTable = document.querySelector('#compare-table');
if (compareTable) {
  const selected = new Set();
  const compareButtons = [...document.querySelectorAll('[data-compare]')];
  const jump = document.querySelector('#compare-jump');
  const clear = document.querySelector('#compare-clear');
  const status = document.querySelector('#compare-status');
  const wrapper = document.querySelector('#compare-table-wrap');

  function renderComparison() {
    compareButtons.forEach(button => {
      const active = selected.has(button.dataset.compare);
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? '✓ В сравнении' : 'Сравнить';
    });
    const products = [...selected].map(find);
    jump.hidden = clear.hidden = wrapper.hidden = products.length === 0;
    document.querySelector('#compare-count').textContent = '(' + products.length + ')';
    status.textContent = 'В сравнении: ' + products.length;
    if (!products.length) {
      compareTable.replaceChildren();
      return;
    }
    const getSpec = (product, label) => PRODUCT_DETAILS[slug(product[0])]?.specs?.find(spec => spec[0] === label)?.[1] || '—';
    const rows = [
      ['Производитель', product => product[8] || 'FREQ'],
      ['Тип', product => product[10] ? 'Бандл · ' + product[10].length + ' плагина' : product[6]],
      ['Назначение', product => product[1]],
      ['Клавиатура', product => getSpec(product, 'Клавиатура')],
      ['Полифония', product => getSpec(product, 'Полифония')],
      ['Звуковой движок', product => getSpec(product, 'Звуковой движок')],
      ['Аппаратный прототип', product => PRODUCT_DETAILS[slug(product[0])]?.prototype || '—'],
      ['Цена в каталоге', itemPrice],
    ];
    compareTable.innerHTML = '<caption>Выбранные товары</caption><thead><tr><th scope="col">Параметр</th>'
      + products.map(product => '<th scope="col"><a href="product.html?id=' + slug(product[0]) + '">' + product[0] + '</a></th>').join('')
      + '</tr></thead><tbody>' + rows.map(([label, value]) => (
        '<tr><th scope="row">' + label + '</th>'
        + products.map(product => '<td>' + value(product) + '</td>').join('') + '</tr>'
      )).join('') + '</tbody>';
  }

  compareButtons.forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.compare;
      if (selected.has(id)) selected.delete(id);
      else if (selected.size < 3) selected.add(id);
      else {
        status.textContent = 'Можно сравнить не больше трёх товаров.';
        toast(status.textContent);
        return;
      }
      renderComparison();
    });
  });
  clear.addEventListener('click', () => {
    selected.clear();
    renderComparison();
    document.querySelector('#comparison').focus();
  });
}

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function animateFeedback(element) {
  if (!element || !element.animate || reducedMotion.matches) return;
  element.animate(
    [{ scale: 1 }, { scale: 1.24, offset: 0.45 }, { scale: 1 }],
    { duration: 280, easing: 'ease-out' }
  );
}

const pageContent = document.querySelector('main');
let pageExit;
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey
      || event.altKey || event.shiftKey || reducedMotion.matches || !pageContent?.animate) return;
  const link = event.target.closest('#navigation a, .section-tabs a, .footer__links a, .header-brand');
  if (!link || link.hasAttribute('target') || link.hasAttribute('download')) return;
  const current = new URL(location.href);
  const next = new URL(link.href, current);
  if (next.protocol !== current.protocol || next.host !== current.host
      || (next.pathname === current.pathname && next.search === current.search)) return;

  event.preventDefault();
  if (pageExit) return;
  pageExit = pageContent.animate(
    [{ opacity: 1, translate: '0 0' }, { opacity: 0.18, translate: '0 -6px' }],
    { duration: 140, easing: 'ease-in', fill: 'forwards' }
  );
  pageExit.finished.then(() => location.assign(next.href), () => {});
});

window.addEventListener('pageshow', event => {
  if (event.persisted && pageExit) {
    pageExit.cancel();
    pageExit = undefined;
  }
});

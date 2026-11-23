# FREQ — аппаратные синтезаторы

В каталоге 6 аппаратных синтезаторов, 11 программных эмуляций и 2 бандла. Фотографии и скриншоты находятся в папке `images/`. Характеристики оборудования и аппаратные прототипы указаны в карточках.

## Контрольная работа №3

Тема: «Адаптивная вёрстка и доступность многостраничного HTML/CSS-сайта».

Практика №12 выполнена в отдельном репозитории `kr3-responsive-shop` на основе существующего сайта FREQ. Стили адаптивной раскладки вынесены в `css/responsive.css`. Базовая сетка рассчитана на узкие экраны, а медиазапросы добавляют колонки на больших экранах. Навигация, карточки, фильтры, форма, карта и таблица сравнения адаптируются к ширине окна. Изображение на первом экране использует `srcset` и `sizes`.

Все семь страниц проверены в браузере на ширинах 360, 430, 768, 1024 и 1440 px. Горизонтальной прокрутки всей страницы нет. На ширине 360 px загружается версия изображения 480 px.

Минимальная высота главной составляет три высоты окна, остальных страниц — две. Длинное содержимое увеличивает высоту страницы. Футер расположен после основного содержимого и прокручивается вместе со страницей.

## Структура проекта

```text
kr3-responsive-shop/
├── index.html
├── catalog.html
├── product.html
├── order.html
├── about.html
├── favorites.html
├── contacts.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── main.js
├── images/
├── README.md
└── .gitignore
```

[Репозиторий](https://github.com/shaaayyy/kr3-responsive-shop) · [GitHub Pages](https://shaaayyy.github.io/kr3-responsive-shop/)

## Локальный запуск

Откройте `index.html` в браузере. Для общего хранилища корзины и избранного на всех страницах запустите сервер из папки проекта:

```sh
python3 -m http.server 8080
```

Откройте http://localhost:8080. Карты на главной и странице контактов требуют подключения к интернету.

## Страницы и возможности

- `index.html` — главная, подборка синтезаторов, частые вопросы и краткие контакты.
- `catalog.html` — категории товаров, поиск, производители, цена, сортировка и сравнение. Кнопка «Показать ещё» загружает до 12 следующих позиций.
- `product.html?id=korg-minilogue-xd` — карточка с характеристиками, прототипом или составом комплекта.
- `favorites.html` — товары, сохранённые в браузере.
- `order.html` — корзина и форма заявки. Если в корзине есть аппаратура, требуется город доставки.
- `about.html` — информация о магазине и ответы на частые вопросы.
- `contacts.html` — телефон, адрес, карта и чат поддержки.

Цены указаны для локального каталога. Сервер продаж, оплата, подтверждение наличия и расчёт доставки не подключены. Данные из формы не отправляются. Корзина и избранное хранятся в браузере при доступном localStorage.

## Практическая работа №13

Проведён аудит доступности FREQ с помощью Lighthouse и ручных сценариев. На всех страницах проверены основной заголовок, область `main`, навигация, подписи полей и названия интерактивных элементов. Оформление, палитра и сетка сайта сохранены.

### Исправления доступности

- У изображений синтезаторов и плагинов появились описания их видимых деталей. В `js/main.js` они хранятся в поле `alt` соответствующего товара. В карточках и на страницах товара описания совпадают, а у коллажей комплектов есть одно общее название.
- Ссылки на карточках используют описание изображения и текст плашки в доступном имени. Первичный Lighthouse-аудит выявил расхождения у четырёх ссылок на главной и двенадцати в каталоге. При повторной проверке этот аудит прошёл.
- Уточнена ссылка пропуска к содержимому и усилен видимый фокус. После закрытия мобильного меню клавишей Escape фокус возвращается на кнопку меню. После «Показать ещё» он переходит на первый добавленный товар и остаётся в видимой части экрана.
- Проверены подписи полей формы, фокус и закрытие диалога корзины. Ошибки заявки выводятся рядом с нужным полем, связываются с ним через `aria-describedby` и исчезают после исправления. Исправлена проверка формата телефона.
- У таблицы характеристик есть `caption` и заголовки строк. В таблице сравнения проверены подпись, заголовки строк и столбцов, а также прокрутка внутри таблицы на узком экране.
- Проверен контраст текста, ссылок и кнопок. Для подсказок полей использован существующий контрастный цвет палитры, для ошибок — светлый цвет с текстовым пояснением.

### Lighthouse

Аудит категории Accessibility выполнен локально в Chrome, в мобильном режиме Lighthouse. Результат каждой проверенной страницы — **100/100**.

| Страница | HTML-отчёт |
| --- | --- |
| Главная | [index.html](lighthouse/index.html) |
| Каталог | [catalog.html](lighthouse/catalog.html) |
| Оформление заявки | [order.html](lighthouse/order.html) |
| Карточка Korg minilogue xd | [product.html](lighthouse/product.html) |
| Контакты | [contacts.html](lighthouse/contacts.html) |
| О магазине | [about.html](lighthouse/about.html) |
| Избранное | [favorites.html](lighthouse/favorites.html) |

Отдельно в браузере проверены переход к содержимому клавишей Tab, возврат фокуса из меню и корзины, ошибочная и корректная заявка, подгрузка товаров и таблица сравнения.

## Источники

- [Korg minilogue xd](https://www.korg.com/us/products/synthesizers/minilogue_xd/)
- [Arturia MiniFreak](https://www.arturia.com/products/hardware-synths/minifreak/details)
- [Yamaha reface CS](https://au.yamaha.com/en/musical-instruments/keyboards/explore/synth-chronology/modal/Modal-reface-cs.html)
- [Novation Bass Station II](https://novationmusic.com/products/bass-station-ii)
- [Roland JUNO-X](https://www.roland.com/global/products/juno-x/)
- [Sequential Take 5](https://sequential.com/hybrid-analog/take-5-compact-polysynth/)
- [CLA-2A](https://www.waves.com/plugins/cla-2a-compressor-limiter)
- [Virtual Buss Compressors](https://slatedigital.com/virtual-buss-compressors/)
- [Decapitator](https://store.soundtoys.com/wp-content/uploads/Decapitator-Manual.pdf)
- [EchoBoy](https://store.soundtoys.com/wp-content/uploads/EchoBoy-Manual.pdf)
- [Valhalla Delay](https://valhalladsp.com/shop/delay/valhalladelay/)
- [CLA-76](https://www.waves.com/bundles/cla-classic-compressors)
- [VerbSuite Classics](https://docs.slatedigital.com/VSC/VerbSuite_Classics.html)
- [Virtual Tape Machines](https://support.slatedigital.com/hc/en-us/articles/115011299328-Virtual-Tape-Machines)
- [MicroShift](https://www.soundtoys.com/product/microshift/)
- [Crystallizer](https://www.soundtoys.com/product/crystallizer/)
- [SuperPlate](https://www.soundtoys.com/product/superplate/)

Скриншот Valhalla Delay взят из [обзора Bonedo](https://www.bonedo.de/artikel/die-besten-delay-plugins/).

Фото Yamaha reface CS: [Perfect Circuit](https://www.perfectcircuit.com/yamaha-reface-cs.html).

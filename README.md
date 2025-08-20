# Галерея (Vue 3 + TypeScript + Tailwind CSS + SASS, БЭМ)

Одностраничное приложение: галерея изображений с поиском, фильтрами и модальным окном подробностей.  
Верстка выполнена по БЭМ: блоки `.header`, `.toolbar`, `.blog`, `.card`, `.chip`, `.modal`, `.search`, элементы `__*`, модификаторы `--*`. Для стилей используется Tailwind CSS через `@apply` внутри SCSS-файлов.

## Стек
- Vue 3 (Composition API) + TypeScript
- Vite
- Tailwind CSS (утилитарные классы) + SASS/SCSS (BEM, токены, сложная верстка)
- Vitest (пример теста — для логики фильтрации)

## Запуск
```bash
pnpm i     # или npm i / yarn
pnpm dev   # старт dev-сервера
pnpm build # сборка
pnpm preview # предпросмотр сборки
```

## Архитектура
```
src/
  assets/styles/index.scss   # Tailwind + BEM-слои
  components/                # мелкие переиспользуемые компоненты (Base*) и составные блоки
  composables/useGallery.ts  # бизнес-логика: поиск, фильтры, состояние модалки
  data/images.ts             # мок-данные
  types/index.ts             # типы (Category, ImageItem)
  App.vue                    # композиция страницы
  main.ts
```

### Принципы
- **DRY/KISS:** логика фильтрации собрана в `useGallery`.
- **БЭМ:** нейтральные BEM-классы + Tailwind `@apply` (см. `index.scss`).
- **Адаптив:** сетка `.blog__grid` переключается на 1/2/3 колонки, контролируется Tailwind breakpoints.
- **Доступность:** модалка закрывается по `Esc` и по клику по оверлею, body-скролл блокируется.

## Тесты (опционально)
Запуск: `pnpm test`

Тесты находятся в `tests/useGallery.test.ts`.

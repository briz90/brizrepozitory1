/* ============================================================
   script.js — поиск, фильтр по тегам и анимация карточек.
   Работает с HTML, который отрисовал Flask из content.json.
   ============================================================ */

// Получаем элементы со страницы
const cardsSection = document.getElementById("cards");
const allCards = Array.from(cardsSection.querySelectorAll(".card"));
const searchInput = document.getElementById("search");
const clearBtn = document.getElementById("clear-search");
const tagsBox = document.getElementById("tags");
const counter = document.getElementById("counter");
const emptyMsg = document.getElementById("empty");

let activeTag = null; // выбранный тег (или null — «Все»)

/* ---------- 1. Строим кнопки тегов из data-атрибутов карточек ---------- */

// Собираем все уникальные теги: {"claude code": 5, "промпты": 2, ...}
const tagCounts = {};
allCards.forEach((card) => {
  card.dataset.tags.split("|").forEach((tag) => {
    if (tag) tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });
});

// Кнопка «Все»
const allButton = makeTagButton("Все", () => {
  activeTag = null;
  refresh();
});
allButton.classList.add("active");
tagsBox.appendChild(allButton);

// Остальные кнопки — по количеству карточек с тегом
Object.keys(tagCounts)
  .sort((a, b) => tagCounts[b] - tagCounts[a])
  .forEach((tag) => {
    const button = makeTagButton(`${tag} · ${tagCounts[tag]}`, () => {
      activeTag = tag;
      refresh();
    }, tag);
    tagsBox.appendChild(button);
  });

function makeTagButton(label, onClick, realTag = null) {
  const button = document.createElement("button");
  button.className = "tag";
  button.textContent = label;
  button.dataset.tag = realTag; // null у кнопки «Все»
  button.addEventListener("click", onClick);
  return button;
}

/* ---------- 2. Главная функция: показать только подходящие карточки ---------- */

function refresh() {
  const query = searchInput.value.trim().toLowerCase();
  clearBtn.hidden = query === "";

  let visible = 0;

  allCards.forEach((card) => {
    // Ищем слово в заголовке, описании или тегах карточки
    const matchesSearch =
      query === "" ||
      card.dataset.title.includes(query) ||
      card.dataset.desc.includes(query) ||
      card.dataset.tags.includes(query);

    // Совпадает ли тег карточки с выбранным фильтром
    const matchesTag =
      activeTag === null || card.dataset.tags.split("|").includes(activeTag);

    const ok = matchesSearch && matchesTag;
    card.classList.toggle("hide", !ok);

    if (ok) {
      visible += 1;
      // Перезапускаем анимацию появления с небольшой задержкой
      card.classList.remove("show");
      setTimeout(() => card.classList.add("show"), visible * 60);
    }
  });

  // Подсветка активной кнопки тега
  tagsBox.querySelectorAll(".tag").forEach((button) => {
    button.classList.toggle("active", button.dataset.tag === (activeTag ?? ""));
  });

  // Счётчик и сообщение «ничего не найдено»
  counter.textContent = `показано ${visible} из ${allCards.length}`;
  emptyMsg.hidden = visible !== 0;
}

/* ---------- 3. Слушатели событий ---------- */

searchInput.addEventListener("input", refresh);

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  refresh();
  searchInput.focus();
});

/* ---------- 4. Плавное появление карточек при прокрутке ---------- */

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

// Стартовая анимация: карточки появляются каскадом
window.addEventListener("load", () => {
  allCards.forEach((card, index) => {
    setTimeout(() => card.classList.add("show"), 300 + index * 90);
    observer.observe(card);
  });
  counter.textContent = `показано ${allCards.length} из ${allCards.length}`;
});

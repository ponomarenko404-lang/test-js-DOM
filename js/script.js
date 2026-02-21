// ====================== ЗАГОЛОВОК ======================
const changeTextBtn = document.querySelector("#changeTextBtn");
const title = document.querySelector("#title");

changeTextBtn.addEventListener("click", () => {
  title.textContent =
    title.textContent === "Мій навчальний сайт"
      ? "DOM — це просто 🙂"
      : "Мій навчальний сайт";
});

// ====================== BOX ======================
const toggleBoxBtn = document.querySelector("#toggleBoxBtn");
const box = document.querySelector("#box");

toggleBoxBtn.addEventListener("click", () => {
  box.classList.toggle("yellow");
});

// ====================== USERS ======================
const users = [
  { id: 1, name: "Mango", age: 25 },
  { id: 2, name: "Poly", age: 30 },
  { id: 3, name: "Ajax", age: 28 },
];

function userTemplate(user) {
  return `<li class="user-name ${user.age > 27 ? "adult" : "young"}">
            ${user.name} (${user.age})
          </li>`;
}

function renderUsers(items) {
  const container = document.querySelector(".js-users");
  container.innerHTML = items.map(userTemplate).join("");
}

renderUsers(users);

// ====================== PRODUCTS ======================
const products = [
  { id: 1, title: "🍎 Apple", price: 25, inStock: true, category: "fruits" },
  { id: 2, title: "🥦 Broccoli", price: 30, inStock: true, category: "vegetables" },
  { id: 3, title: "🥤 Cola", price: 18, inStock: false, category: "drinks" },
  { id: 4, title: "🍌 Banana", price: 20, inStock: true, category: "fruits" },
  { id: 5, title: "🍿 Popcorn", price: 40, inStock: true, category: "snacks" },
  { id: 6, title: "🥕 Carrot", price: 15, inStock: true, category: "vegetables" },
  { id: 7, title: "🍫 Chocolate", price: 35, inStock: false, category: "snacks" },
  { id: 8, title: "🍋 Lemonade", price: 22, inStock: true, category: "drinks" },
  { id: 9, title: "🥝 Kiwi", price: 28, inStock: true, category: "fruits" },
  { id: 10, title: "🧃 Orange Juice", price: 26, inStock: true, category: "drinks" },
  { id: 11, title: "🥨 Pretzel", price: 33, inStock: false, category: "snacks" },
  { id: 12, title: "🍅 Tomato", price: 18, inStock: true, category: "vegetables" }
];

function productTemplate(item) {
  return `
    <div class="card">
      <h3>${item.title}</h3>
      <p>Ціна: ${item.price} грн</p>
      <p class="${item.inStock ? "available" : "not-available"}">
        ${item.inStock ? "В наявності" : "Немає в наявності"}
      </p>
      <button data-id="${item.id}" class="delete-btn">
        Видалити
      </button>
    </div>
  `;
}

function renderProducts(items) {
  const container = document.querySelector(".js-products-list");
  container.innerHTML = items.map(productTemplate).join("");
}

renderProducts(products);

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll(".delete-btn");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.id);

      const index = products.findIndex((item) => item.id === id);
      products.splice(index, 1);

      renderProducts(products);
      addDeleteListeners();// повторно підключаємо слухачі
    });
  });
}

// ====================== ФОРМА ======================
const form = document.querySelector("#productForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const newProduct = {
    id: Date.now(),
    title: formData.get("title"),
    price: Number(formData.get("price")),
    inStock: formData.get("inStock") !== null,
  };

  products.push(newProduct);
renderProducts(products);
addDeleteListeners();


  form.reset();
});

// ====================== ФІЛЬТРИ ======================
const showAllBtn = document.querySelector("#showAll");
const showAvailableBtn = document.querySelector("#showAvailable");

showAllBtn.addEventListener("click", () => {
  renderProducts(products);
});

showAvailableBtn.addEventListener("click", () => {
  const filtered = products.filter((item) => item.inStock);
  renderProducts(filtered);
});

const productContainer = document.querySelector(".js-products-list");

productContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("delete-btn")) return;

  const id = Number(e.target.dataset.id);

  const index = products.findIndex((item) => item.id === id);
  products.splice(index, 1);

  renderProducts(products);
})

// ====================== РАДІОКНОПКИ ======================


const filterContainer = document.querySelector(".filter-container");
const allProducts = products;

filterContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  

  // 🔹 1. Знімаємо active з усіх кнопок
  const allButtons = filterContainer.querySelectorAll(".filter-btn");
  allButtons.forEach((button) => button.classList.remove("active"));

  // 🔹 2. Додаємо active натиснутій кнопці
  btn.classList.add("active");

  // 🔹 3. Беремо категорію
  const category = btn.dataset.category;

  // 🔹 4. Фільтруємо
  if (category === "all") {
    renderProducts(allProducts);
    return;
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  renderProducts(filteredProducts);
});

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! повторення

//? При кліку в консоль має виводитися:
// "Button clicked"

// const button = document.querySelector("#btn");


// button.addEventListener("click", (e) => {
//   console.log("Button Klicker")
// })


// ? При кліку текст параграфа має змінюватись на:
// "Text changed"

const changeText = document.querySelector("#change");
const text = document.querySelector("#text");

changeText.addEventListener("click", () => {
  text.textContent = text.textContent === "Hello" ? "Text changed" : "Hello";
});

// ?Що потрібно:
// ?Коли користувач вводить текст, він одразу відображається в <p>.
// (Тут треба правильно вибрати подію 😉)

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", (e) => {
  const userInput = e.target.value.trim();
  if (userInput === "") {
    output.textContent = "write pls";
  }
  else {
    output.textContent = userInput;
  }
  
});


//? При кліку на кнопку:
// змінює її текст на "Clicked!"
// і виводить в консоль "You clicked the button"

const button = document.querySelector("#btn");


button.addEventListener("click", (e) => {
  button.textContent = button.textContent === "Click me" ? "Clicked!" : "Click me"

 console.log("You clicked the button")
  // if (button.textContent === "Click me") {
  //   button.textContent = "Clicked!";
  // }
  // console.log("You clicked the button")
})

//? при кліку на div додавати клас
//? якщо вже є — прибирати

const changeColor = document.querySelector("#boxi");
console.log(changeColor);

changeColor.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle("activee");
  console.log(e.currentTarget.className);
});

//?Завдання 5 — Event delegation 📌 Обробник має висіти на <ul>,
// але при кліку на <li> в консоль має виводитись текст елемента 🔥

const list = document.querySelector("#list");

list.addEventListener('click', (e) => {
  // для стабільності треба через перевірку
  const item = e.target.closest("li");
  if (!item) return;
  console.log(e.target.textContent);
});



const backdrop = document.querySelector(".backdrop");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", (e) => {
  backdrop.classList.add("is-hidden");
});

backdrop.addEventListener('click', (e) => {
  if (e.target !== backdrop) return;
  backdrop.classList.add("is-hidden");
});

document.addEventListener('keydown', (e) => {
  if (e.key !== "Escape") return;
  if (backdrop.classList.contains('is-hidden')) return; {
    backdrop.classList.add('is-hidden');    
  }
})

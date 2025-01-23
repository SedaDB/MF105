"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// DOM Elements
const favoriteMealsContainer = document.getElementById("fav-meals");
const mealContainer = document.getElementById("meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoContainer = document.getElementById("meal-info");
const closePopupBtn = document.getElementById("close-popup");
const searchInput = document.getElementById("search-term");
const searchButton = document.getElementById("search");
function initializeApp() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchRandomMeal();
        loadFavoriteMeals();
    });
}
function fetchRandomMeal() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = yield response.json();
        const randomMeal = data.meals[0];
        console.table(randomMeal);
        displayMeal(randomMeal, true);
        return randomMeal;
    });
}
function fetchMealById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            const data = yield response.json();
            return data.meals[0];
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
function fetchMealsBySearch(term) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
            const data = yield response.json();
            return data.meals;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    });
}
function getMealIdsFromLocalStorage() {
    const mealIds = localStorage.getItem("mealIds");
    return mealIds ? JSON.parse(mealIds) : [];
}
function addMealIdToLocalStorage(mealId) {
    const mealIds = getMealIdsFromLocalStorage();
    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}
function removeMealIdFromLocalStorage(mealId) {
    const mealIds = getMealIdsFromLocalStorage();
    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)));
}
function loadFavoriteMeals() {
    return __awaiter(this, void 0, void 0, function* () {
        favoriteMealsContainer.innerHTML = "";
        const mealIds = getMealIdsFromLocalStorage();
        for (const mealId of mealIds) {
            const meal = yield fetchMealById(mealId);
            if (meal) {
                displayFavoriteMeal(meal);
            }
        }
    });
}
function displayFavoriteMeal(meal) {
    const mealEl = document.createElement("li");
    mealEl.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <span>${meal.strMeal}</span>
      <button class="remove-meal"><i class="fas fa-times"></i></button>
    `;
    const clearButton = mealEl.querySelector(".remove-meal");
    clearButton.addEventListener("click", () => {
        removeMealIdFromLocalStorage(meal.idMeal);
        loadFavoriteMeals();
    });
    mealEl.addEventListener("click", () => {
        displayMealDetails(meal);
    });
    favoriteMealsContainer.appendChild(mealEl);
}
function displayMealDetails(meal) {
    mealInfoContainer.innerHTML = "";
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`${ingredient} - ${measure}`);
        }
        else {
            break;
        }
    }
    mealInfoContainer.innerHTML = `
      <h1>${meal.strMeal}</h1>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <p>${meal.strInstructions}</p>
      <h3>Ingredients:</h3>
      <ul>
          ${ingredients.map((ing) => `<li>${ing}</li>`).join("")}
      </ul>
    `;
    mealPopup.classList.remove("hidden");
}
function displayMeal(meal, isRandom = false) {
    const mealElement = document.createElement("div");
    mealElement.classList.add("meal");
    mealElement.innerHTML = `
      <div class="meal-header"> 
          ${isRandom ? '<span class="random">Recommended Recipe</span>' : ""}
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      </div>
      <div class="meal-body">
          <h4>${meal.strMeal}</h4>
          <button class="fav-btn">
              <i class="fas fa-heart"></i>
          </button>
      </div>
    `;
    const favButton = mealElement.querySelector(".fav-btn");
    favButton.addEventListener("click", () => {
        if (favButton.classList.contains("active")) {
            removeMealIdFromLocalStorage(meal.idMeal);
            favButton.classList.remove("active");
        }
        else {
            addMealIdToLocalStorage(meal.idMeal);
            favButton.classList.add("active");
        }
        loadFavoriteMeals();
    });
    mealElement.addEventListener("click", () => {
        displayMealDetails(meal);
    });
    mealContainer.appendChild(mealElement);
}
searchButton.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    mealContainer.innerHTML = "";
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        alert("Please enter a search term");
        return;
    }
    const meals = yield fetchMealsBySearch(searchTerm);
    if (meals) {
        meals.forEach((meal) => {
            displayMeal(meal);
        });
    }
}));
closePopupBtn.addEventListener("click", () => {
    mealPopup.classList.add("hidden");
});
initializeApp();

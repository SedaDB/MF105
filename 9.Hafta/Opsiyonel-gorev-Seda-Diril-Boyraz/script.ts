// Define types for Meal and API responses
interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    [key: string]: string | null;
  }
  
  interface MealApiResponse {
    meals: Meal[];
  }
  
  // DOM Elements
  const favoriteMealsContainer = document.getElementById("fav-meals") as HTMLUListElement;
  const mealContainer = document.getElementById("meals") as HTMLDivElement;
  const mealPopup = document.getElementById("meal-popup") as HTMLDivElement;
  const mealInfoContainer = document.getElementById("meal-info") as HTMLDivElement;
  const closePopupBtn = document.getElementById("close-popup") as HTMLButtonElement;
  const searchInput = document.getElementById("search-term") as HTMLInputElement;
  const searchButton = document.getElementById("search") as HTMLButtonElement;
  
  async function initializeApp(): Promise<void> {
    await fetchRandomMeal();
    loadFavoriteMeals();
  }
  
  async function fetchRandomMeal(): Promise<Meal> {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data: MealApiResponse = await response.json();
    const randomMeal = data.meals[0];
    console.table(randomMeal);
  
    displayMeal(randomMeal, true);
    return randomMeal;
  }
  
  async function fetchMealById(id: string): Promise<Meal | null> {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data: MealApiResponse = await response.json();
      return data.meals[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  async function fetchMealsBySearch(term: string): Promise<Meal[] | null> {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
      const data: MealApiResponse = await response.json();
      return data.meals;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  function getMealIdsFromLocalStorage(): string[] {
    const mealIds = localStorage.getItem("mealIds");
    return mealIds ? JSON.parse(mealIds) : [];
  }
  
  function addMealIdToLocalStorage(mealId: string): void {
    const mealIds = getMealIdsFromLocalStorage();
    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
  }
  
  function removeMealIdFromLocalStorage(mealId: string): void {
    const mealIds = getMealIdsFromLocalStorage();
    localStorage.setItem("mealIds", JSON.stringify(mealIds.filter((id) => id !== mealId)));
  }
  
  async function loadFavoriteMeals(): Promise<void> {
    favoriteMealsContainer.innerHTML = "";
    const mealIds = getMealIdsFromLocalStorage();
  
    for (const mealId of mealIds) {
      const meal = await fetchMealById(mealId);
      if (meal) {
        displayFavoriteMeal(meal);
      }
    }
  }
  
  function displayFavoriteMeal(meal: Meal): void {
    const mealEl = document.createElement("li");
  
    mealEl.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <span>${meal.strMeal}</span>
      <button class="remove-meal"><i class="fas fa-times"></i></button>
    `;
  
    const clearButton = mealEl.querySelector(".remove-meal") as HTMLButtonElement;
  
    clearButton.addEventListener("click", () => {
      removeMealIdFromLocalStorage(meal.idMeal);
      loadFavoriteMeals();
    });
  
    mealEl.addEventListener("click", () => {
      displayMealDetails(meal);
    });
  
    favoriteMealsContainer.appendChild(mealEl);
  }
  
  function displayMealDetails(meal: Meal): void {
    mealInfoContainer.innerHTML = "";
  
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${ingredient} - ${measure}`);
      } else {
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
  
  function displayMeal(meal: Meal, isRandom = false): void {
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
  
    const favButton = mealElement.querySelector(".fav-btn") as HTMLButtonElement;
  
    favButton.addEventListener("click", () => {
      if (favButton.classList.contains("active")) {
        removeMealIdFromLocalStorage(meal.idMeal);
        favButton.classList.remove("active");
      } else {
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
  
  searchButton.addEventListener("click", async () => {
    mealContainer.innerHTML = "";
    const searchTerm = searchInput.value.trim();
  
    if (!searchTerm) {
      alert("Please enter a search term");
      return;
    }
  
    const meals = await fetchMealsBySearch(searchTerm);
  
    if (meals) {
      meals.forEach((meal) => {
        displayMeal(meal);
      });
    }
  });
  
  closePopupBtn.addEventListener("click", () => {
    mealPopup.classList.add("hidden");
  });
  
  initializeApp();
  
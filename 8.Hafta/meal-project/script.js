const favoriteMealsContainer = document.getElementById("fav-meals");
const mealContainer = document.getElementById("meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoContainer = document.getElementById("meal-info");
const closePopupBtn = document.getElementById("close-popup");
const searchInput = document.getElementById("search-term");
const searchButton = document.getElementById("search");

async function initializeApp() {
  await fetchRandomMeal();
  //await fetchMealById(52772);
  // TODO: GET Local storafe FAVOURITE MEAL

  //addMealIdToLocalStorage(52772);

  loadFavoriteMeals();
}

async function fetchRandomMeal() {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  const randomMEal = data.meals[0];
  console.table(randomMEal);

  displayMeal(randomMEal, true);
  return randomMEal;
}

// fetchMealById(15259);

//https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
async function fetchMealById(id) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const [mealsById] = data.meals;
    console.log(mealsById);
    return mealsById;
  } catch (error) {
    console.log(error);
  }
}
//https://www.themealdb.com/api/json/v1/1/search.php?s=soup
async function fetchMealsBySearch(term) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
    );
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
}
// Get meal ids from local storage
function getMealIdsFromLocalStorage() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));

  return mealIds ? mealIds : [];
}
// Add meal id to local storage
function addMealIdToLocalStorage(mealId) {
  const mealIds = getMealIdsFromLocalStorage();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}
// Remove meal id from local storage
function removeMealIdFromLocalStorage(mealId) {
  const mealIds = getMealIdsFromLocalStorage();
  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id != mealId))
  );
}

async function loadFavoriteMeals() {
  // Clear container
  //   favoriteMealsContainer.innerHTML = "";
  const mealIds = getMealIdsFromLocalStorage();

  for (const mealId of mealIds) {
    const meal = await fetchMealById(mealId);
    displayFavoriteMeal(meal);
  }
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
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
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

function displayMeal(meal, isRandom = false) {
  const mealElement = document.createElement("div");
  mealElement.classList.add("meal");

  mealElement.innerHTML = `
    <div class="meal-header"> 
        ${isRandom ? '<span class="random">Recommended Recipe</span>' : ""}
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
    </div>
    <div class="meal-body"></div>
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

// fetchMealsBySearch("soup")

searchButton.addEventListener("click", async () => {
  mealContainer.innerHTML = "";
  const searchTerm = searchInput.value.trim();

  //   if (!searchTerm) {
  //     alert("Please enter a search term");
  //     return;
  //   }

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

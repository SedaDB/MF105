
async function fetchData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    return data;
  }
  
  function getTopCountries(countries) {
    return countries
      .sort((a, b) => b.population - a.population) 
      .slice(0, 10) 
      .map(country => ({
        name: country.name.common,
        population: country.population,
      }));
  }
  
  function getTopLanguages(countries) {
    const languageCounts = {};
  
    countries.forEach(country => {
      if (country.languages) {
        Object.values(country.languages).forEach(language => {
          languageCounts[language] = (languageCounts[language] || 0) + 1;
        });
      }
    });
  
    return Object.entries(languageCounts) 
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([language, count]) => ({
        language,
        count,
      }));
  }
  
  function renderCountriesChart(countries) {
    const ctx = document.getElementById('countriesChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: countries.map(country => country.name),
        datasets: [{
          label: 'Nüfus',
          data: countries.map(country => country.population),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
            x: { 
                beginAtZero: true,
                grid: { display: false }, 
            },
            y: { 
                beginAtZero: true,
                grid: { display: false }, 
            }
        },
        onClick: (event, elements) => {
            if (elements.length > 0) {
              const chart = elements[0].chart;
              const datasetIndex = elements[0].datasetIndex;
              const index = elements[0].index;
              const countryName = chart.data.labels[index];
              const population = chart.data.datasets[datasetIndex].data[index];
              alert(`Ülke: ${countryName}\nPopülasyon: ${population.toLocaleString()}`);
            }
        }
      }
    });
  }
  
  function renderLanguagesChart(languages) {
    const ctx = document.getElementById('languagesChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: languages.map(lang => lang.language),
        datasets: [{
          label: 'Konuşulan Ülke Sayısı',
          data: languages.map(lang => lang.count),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: {
            x: { 
                beginAtZero: true,
                grid: { display: false }, 
            },
            y: { 
                beginAtZero: true,
                grid: { display: false }, 
            }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const chart = elements[0].chart;
            const datasetIndex = elements[0].datasetIndex;
            const index = elements[0].index;
            const languageName = chart.data.labels[index];
            const countryCount = chart.data.datasets[datasetIndex].data[index];
            alert(`Dil: ${languageName}\n ${countryCount} ülkede konuşuluyor`);
          }
        }
      }
    });
}

function setupToggleButtons() {
    const countriesSection = document.getElementById('countries');
    const languagesSection = document.getElementById('languages');
    const toggleCountriesButton = document.getElementById('toggleCountries');
    const toggleLanguagesButton = document.getElementById('toggleLanguages');
  
    toggleCountriesButton.addEventListener('click', () => {
        const isHidden = countriesSection.classList.contains('hidden');
      countriesSection.classList.toggle('hidden');
      toggleCountriesButton.textContent = isHidden ? '- Ülkeler' : '+ Ülkeler';
    });
  
    toggleLanguagesButton.addEventListener('click', () => {
        const isHidden = languagesSection.classList.contains('hidden');
      languagesSection.classList.toggle('hidden');
      toggleLanguagesButton.textContent = isHidden ? '- Diller' : '+ Diller';
    });
  }
  
  async function init() {
    const countries = await fetchData();
    const topCountries = getTopCountries(countries);
    const topLanguages = getTopLanguages(countries);
  
    renderCountriesChart(topCountries);
    renderLanguagesChart(topLanguages);
    setupToggleButtons();
  }
  
  init();
  
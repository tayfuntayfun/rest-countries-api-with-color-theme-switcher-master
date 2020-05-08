
    function getData(URL) {
    fetch(URL)
      .then((response) => response.json())
      .then((allCountries) => {
          
        allCountries.map((country) => {
          const countryDiv = makeCountry(country);
          const countryList = document.getElementById(`countryList`);
          countryList.appendChild(countryDiv);
        });
      });
  }

  function makeCountry(countryObj) {
    const countryDiv = document.createElement(`div`);
    countryDiv.className = `country`;
    const flag = document.createElement(`img`);
    flag.className = `flag`;
    flag.src = countryObj.flag;
    countryDiv.appendChild(flag);
    const countryInfo = document.createElement(`div`);
    countryInfo.className = `countryInfo`;
    countryDiv.appendChild(countryInfo);
    const countryNameElement = document.createElement(`h1`);
    countryInfo.appendChild(countryNameElement);
    countryNameElement.className = `countryName`;
    countryNameElement.textContent = countryObj.name;
    countryInfo.appendChild(getCountryInfoSentence(`Population`, countryObj.population));
    countryInfo.appendChild(getCountryInfoSentence(`Region`, countryObj.region));
    countryInfo.appendChild(getCountryInfoSentence(`Capital`, countryObj.capital));
    return countryDiv;
  }
  function getCountryInfoSentence(infoTitle, value) {
    const sentenceElement = document.createElement(`p`);
    sentenceElement.innerHTML = `<b>${infoTitle}</b> : ${value}`;
    return sentenceElement;
  }

//   function searchCountries(countryInput){
//     allCountries.filter{
//         xxxxx
//     }
// }
  function onLoad() {
    getData(`https://restcountries.eu/rest/v2/all`);
  }
  window.onload = onLoad;
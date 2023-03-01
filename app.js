let mainContainer = document.querySelector(".main-container");
let allData;
function getBillionaires() {
  fetch("./json/AllBillionaires.json")
    .then((response) => response.json())
    .then((result) => {
      let data = result.slice(1, 101);
      showData(data);
      allData = data;
    });
}
function getFinace() {
  fetch("./json/ByIndustryFinance.json")
    .then((response) => response.json())
    .then((result) => {
      let data = result.slice(1, 101);
      showData(data);
      allData = data;
    });
}
function getTech() {
  fetch("./json/ByIndustryTechnology.json")
    .then((response) => response.json())
    .then((result) => {
      let data = result.slice(1, 101);
      showData(data);
      allData = data;
    });
}
function getState() {
  fetch("./json/ByStateTexas.json")
    .then((response) => response.json())
    .then((result) => {
      let data = result.slice(1, 101);
      showData(data);
      allData = data;
    });
}

getBillionaires();

function showData(result, limit = 10) {
  let data = result.slice(0, limit);
  mainContainer.innerHTML = "";
  data.map((data) => {
    let html = `<article class="card">
                <h3 class="card-title">${data.person.name}</h3>
                <div>
                    <img class="card-image" src="${data.person.squareImage}" alt="">
                    <div class="card-info">
                        <p>Citizenship: <span class="citizenship">${data.countryOfCitizenship}</span></p>
                        <p>State: <span class="state">${data.state}</span></p>
                        <p>City: <span class="city">${data.city}</span></p>                      
                    </div>
                </div>
                <p>Source: <span class="source">${data.source}</span></p>
            </article>`;

    mainContainer.insertAdjacentHTML("beforeend", html);
  });
}

let catName = document.querySelector(".ct-name");
catName.textContent = "All Billionaires";

document.querySelector(".btn-more").addEventListener("click", () => {
  showData(allData, 100);
  console.log(allData);
});

document.querySelector(".cetagories").addEventListener("click", (e) => {
  let data = e.target.dataset.value;

  if (data === "all") {
    getBillionaires();
    catName.textContent = "All Billionaires";
  }
  if (data === "technology") {
    getTech();
    catName.textContent = "Filter by Technology";
  }
  if (data === "finace") {
    getFinace();
    catName.textContent = "Filter by Finace";
  }
  if (data === "texas") {
    getState();
    catName.textContent = "Filter by States (Texas)";
  }
});

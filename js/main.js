import {vehicle} from './vehicles.js'

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayvehicleItems(vehicle);
  displayvehicleButtons();
});

function diplayvehicleItems(vehicleItems) {
  let displayvehicle = vehicleItems.map(function (item) {
    // console.log(item);

    return `<article class="vehicle-item">
          <img src=${item.img} alt=${item.name} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.name}</h4>
              <h4 class="year">${item.year}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayvehicle = displayvehicle.join("");
  // console.log(displayvehicle);

  sectionCenter.innerHTML = displayvehicle;
}
function displayvehicleButtons() {
  const categories = vehicle.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
 

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const vehicleCategory = vehicle.filter(function (vehicleItem) {
        // console.log(vehicleItem.category);
        if (vehicleItem.category === category) {
          return vehicleItem;
        }
      });
      if (category === "all") {
        diplayvehicleItems(vehicle);
      } else {
        diplayvehicleItems(vehicleCategory);
      }
    });
  });
}

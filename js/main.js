// import module
import { vehicle } from "./vehicles.js";

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", () => {
  diplayvehicleItems(vehicle);
  displayvehicleButtons();
});

function diplayvehicleItems(vehicleItems) {
  let displayvehicle = vehicleItems.map((item) => {
    return `<div id=${item.id} class="vehicle-item">
                <a href=${item.img} target='blank'>
                  <img src=${item.img} alt=${item.name} class="photo" />
                </a>
                <div class="item-info">
                  <header>
                    <h4>${item.name}</h4>
                    <h4 class="year">${item.year}</h4>
                  </header>
                  <p class="item-text">
                    ${item.desc}
                  </p>
                </div>
            </div>`;
  });
  displayvehicle = displayvehicle.join("");
  sectionCenter.innerHTML = displayvehicle;
  const gone = document.querySelectorAll(".vehicle-item");
  gone.forEach((item) => {
    item.addEventListener("click", (e) => {
      del(e);
    });
  });
}
function displayvehicleButtons() {
  const categories = vehicle.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const vehicleCategory = vehicle.filter((vehicleItem) => {
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

// function del(e) {
//   e.currentTarget.remove();
// }

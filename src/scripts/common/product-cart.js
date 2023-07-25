const featuredItems = document.querySelectorAll(".featured__item");

featuredItems.forEach((product) => {
  if (product.querySelector(".variant_select")) {
    chengeSelect(product);
  }
});

function chengeSelect(product) {
  const select = product.querySelector(".variant_select");
  const imageVariant = product.querySelectorAll(".image__variant");
  const priceVariant = product.querySelectorAll(".price__variant");
  const selectNone = product.querySelector(".select-none");

  select.addEventListener("change", () => {
    changeSelect(select.value, selectNone);
    activeVariant(select.value, imageVariant);
    activeVariant(select.value, priceVariant);
  });
}

function changeSelect(value, selects) {
  Array.from(selects.options).forEach((select) => {
    if (select.value == value) {
      select.selected = true;
    }
  });
}

function activeVariant(value, chenges) {
  chenges.forEach((chenge) => {
    if (chenge.dataset.variantId == value) {
      chenge.classList.add("active");
    } else {
      chenge.classList.remove("active");
    }
  });
}

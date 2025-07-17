let slideIndex = {
  ysl: 0,
  gucci: 0,
  tomford: 0
};

function changeSlide(brand, n) {
  const slides = document.querySelectorAll(`.slide.${brand}`);
  slideIndex[brand] = (slideIndex[brand] + n + slides.length) % slides.length;
  slides.forEach((slide, idx) => {
    slide.classList.add('hidden');
    if (idx === slideIndex[brand]) slide.classList.remove('hidden');
  });
}



// Form popup logic
function openForm(productName, price) {
  document.getElementById("product").value = productName;
  document.getElementById("price").value = price;
  document.getElementById("orderForm").classList.remove("hidden");
}

function closeForm() {
  document.getElementById("orderForm").classList.add("hidden");
}

function submitForm(e) {
  e.preventDefault();
  document.getElementById("orderForm").classList.add("hidden");
  const popup = document.getElementById("popup");
  popup.classList.remove("hidden");

  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}

function showOrderForm() {
  document.getElementById("productSection").style.display = "none";
  document.getElementById("orderForm").style.display = "block";
}

function submitOrder(event) {
  event.preventDefault();
  document.getElementById("orderForm").style.display = "none";
  document.getElementById("confirmationMessage").style.display = "block";
}

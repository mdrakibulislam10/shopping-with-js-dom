// get element value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    return elementField.innerText;
};

// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    return inputField.value;
};

// set product
function setProduct(no, name, price, quantity) {
    const tableBody = document.getElementById("table-container");
    const tRow = document.createElement("tr");
    tRow.innerHTML = `
      <td>${no}</td>
      <td>${name}</td>
      <td>${price}</td>
      <td>${quantity}</td>
      <td>${price * quantity}</td>
 `
    tableBody.appendChild(tRow);
};

// total products
function totalProducts(totalNum) {
    document.getElementById("total-products").innerText = totalNum;
};
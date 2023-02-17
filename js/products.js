let serial = 0;
// first product handler
document.getElementById("first-card").addEventListener("click", function () {
    // serial = serial + 1;
    serial += 1;
    const name = getElementValue("first-name");
    const price = getElementValue("first-price");
    const quantity = getElementValue("first-quantity");

    setProduct(serial, name, parseFloat(price), parseInt(quantity));
    totalProducts(serial);
});

// second product handler
document.getElementById("second-card").addEventListener("click", function () {
    serial += 1;
    const name = getElementValue("second-name");
    const price = getElementValue("second-price");
    const quantity = getElementValue("second-quantity");

    setProduct(serial, name, parseFloat(price), parseInt(quantity));
    totalProducts(serial);
});

// third product handler
document.getElementById("third-card").addEventListener("click", function () {
    serial += 1;
    const name = getElementValue("third-name");
    const price = getElementValue("third-price");
    const quantity = getElementValue("third-quantity");

    setProduct(serial, name, parseFloat(price), parseInt(quantity));
    totalProducts(serial);
});

// fourth product handler
document.getElementById("fourth-card").addEventListener("click", function () {
    serial += 1;
    const name = getElementValue("fourth-name");
    const price = getElementValue("fourth-price");
    const quantity = getElementValue("fourth-quantity");

    setProduct(serial, name, parseFloat(price), parseInt(quantity));
    totalProducts(serial);
});

// last product handler
document.getElementById("last-card").addEventListener("click", function () {
    const name = getElementValue("last-name");
    const priceString = getInputValue("last-price");
    const price = parseFloat(priceString);
    if (isNaN(price) || price < 0) {
        alert("please input number above '0'");
        return;
    }
    const quantityString = getInputValue("last-quantity");
    const quantity = parseInt(quantityString);
    if (isNaN(quantity) || quantity < 0) {
        alert("please input number above '0'");
        return;
    }

    serial += 1;

    setProduct(serial, name, price, quantity);
    totalProducts(serial);
});
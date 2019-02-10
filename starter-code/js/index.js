function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

  //estamos cojiendo el texto del id 'cost'
  var priceProduct = document.getElementById('cost').innerText
  console.log(priceProduct)

  //con parseFLoat convertimos la string 'cost' a number
  var numberPrice = parseFloat(priceProduct)
  console.log(numberPrice)

  //cojemos el valor del input
  var numberProduct = document.getElementById('quantity').value
  console.log(numberProduct)

  //multiplicamos el valor del precio que esta pasado a number y la cantidad del input que es de type number
  var priceAll = numberPrice * numberProduct

  console.log(priceAll)

  //inyectamos el priceAll al HTML
  document.getElementById("price_all").innerText = priceAll
}

function createQuantityInput() {

}

function createDeleteButton() {
  

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {

}

function createNewItem() {

}

window.onload = function () {
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};

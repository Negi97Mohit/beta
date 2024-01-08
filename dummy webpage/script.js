var items = [];

function addItem() {
    var itemInput = document.getElementById("detailsInput");

    if (itemInput.value.trim() === "") {
        alert("Please enter an item!");
        return;
    }

    items.push(itemInput.value);
    updateItemList();
    itemInput.value = "";
}

function updateItemList() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    items.forEach(function (item, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `${item} <button onclick="removeItem(${index})">Remove</button>`;
        itemList.appendChild(listItem);
    });
}

function removeItem(index) {
    items.splice(index, 1);
    updateItemList();
}
function submitMeal() {
    var mealInput = document.getElementById("mealInput");
    var mealList = document.getElementById("mealList");

    if (mealInput.value.trim() === "" || items.length === 0) {
        alert("Please enter a meal and add items!");
        return;
    }

    // Create a new meal item
    var newMeal = document.createElement("li");
    newMeal.innerHTML = `
        <strong>${mealInput.value}</strong>
        <button onclick="removeMeal(this)" disabled>Remove</button>
    `;

    // Append the new meal item to the mealList
    mealList.appendChild(newMeal);

    // Clear input fields
    mealInput.value = "";
    items = [];
    updateItemList();
}
  
function removeMeal(button) {
    var mealToRemove = button.parentNode;
    mealToRemove.parentNode.removeChild(mealToRemove);
}

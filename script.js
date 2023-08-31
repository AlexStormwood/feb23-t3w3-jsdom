let favouriteMedia = [
	"pokemon",
	"digimon",
	"supernatural",
	"sherlock",
	"doctor who",
	"parks & recreation",
	"marvel",
	"harry potter",
	"barbie",
	"yugi-oh",
	"oppenheimer",
	"dragonball z"
];


function exampleHello(){
	console.log("hello world"); 
}

function createListOfMedia(){

	let rootUlNode = document.querySelector("ul");

	rootUlNode.innerHTML = "";


	// let exampleNode = document.getElementsByClassName("bananas")[0];
	// let exampleNode = document.getElementById("mediaList");

	favouriteMedia.forEach(mediaItem => {
		// Create an element but do not display it yet 
		let newListItem = document.createElement("li");

		// Assign some data to the element
		newListItem.textContent = mediaItem;
		newListItem.id = mediaItem;

		// Creating a button that will remove this item later
		let removeItemButton = document.createElement("button");

		removeItemButton.onclick = (() => removeItemFromList(mediaItem));

		removeItemButton.textContent = "Remove item";

		// Add the button to the list item 
		newListItem.appendChild(removeItemButton);


		// Add the element to the visible page
		rootUlNode.appendChild(newListItem);


	});
}

function removeItemFromList(targetItem){
	let targetItemNode = document.getElementById(targetItem);
	if (targetItemNode){
		//targetItemNode.parentNode.removeChild(targetItemNode);

		// Modify the array
		favouriteMedia = favouriteMedia.filter(item => {
			if (!item || item == "" || item !== targetItem) {
				return true;
			} else {
				return false
			}
		});

		// Regenerate the visuals
		createListOfMedia();

	}
}


function addItemToList(event){
	event.preventDefault();
	console.log("we tried to add an item to the list!");

	let realInputField = document.getElementById("real-nameinput");
	let newItemName = realInputField.value;
	if (newItemName){
		console.log("newItemName is: " + newItemName);
		// add item to list
		favouriteMedia.push(newItemName);
	
		// generate a new list 
		createListOfMedia();
	} else {
		console.warn("Attempted to add an empty item to the list");
	}
	

}

let realFormSubmitButton = document.getElementById("real-formsubmit");
realFormSubmitButton.addEventListener("click", addItemToList);
// functionName() runs immediately, do not want!!
// realFormSubmitButton.addEventListener("click", addItemToList());

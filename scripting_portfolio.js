
var detailedTitle;
var detailedDesc;
var detailSrcImage;

function storageReset() {
	localStorage.clear();
}

/* 
loadKeyword:

Will take a keyword (passed through a clicked image) and set it in local storage. Seemingly necessary for passing to the artwork_details page.
*/
function loadKeyword(loadedString) {
	localStorage.setItem("2ndPageKeyword", loadedString)
}


/* 
keywordSet:

This function, called on load of artwork_details, will use the keyword set in loadKeyword and assign values to the elements of artwork_details.
*/

/*Keyword list: girlfriends, blue, newseoul, halforc, beef, logo, gabriel, monster, moodpainting, uke*/

function keywordSet() {
	detailKeyword = localStorage.getItem("2ndPageKeyword")
	
	switch (localStorage.getItem("2ndPageKeyword")) {
		case "girlfriends":
			detailedTitle = "Spooky Girlfriends"
			detailSrcImage = "images/spookygirlfriends.jpg"
			detailedDesc = "I made this. it is gay."
			break;
		case "blue":
			detailedTitle = "Blue Critters - Vector Illustration"
			detailSrcImage = "images/bluecritters.png"
			detailedDesc = "I made this. it is blue."
			break;
		case "newseoul":
			detailedTitle = "City Concept Painting - Digital Paint Commission"
			detailSrcImage = "images/newseoul.png"
			detailedDesc = "I made this. it is a background for the comic Engraved."
			break;
		case "halforc":
			detailedTitle = "Half-Orc Fighter - D&D Character Design"
			detailSrcImage = "images/halforccharacter.png"
			detailedDesc = "I made this. it is a dnd character."
			break;
		case "beef":
			detailedTitle = "beef. - Original Sticker Designs"
			detailSrcImage = "images/beef.png"
			detailedDesc = "I made this. it is beef."
			break;
		case "logo":
			detailedTitle = "Alternative Logo Design - Vector Illustration"
			detailSrcImage = "images/smellbuslogo.png"
			detailedDesc = "I made this. it is logo."
			break;
		case "monster":
			detailedTitle = "Monster - Vector Illustration"
			detailSrcImage = "images/monster.png"
			detailedDesc = "I made this."
			break;
		case "gabriel":
			detailedTitle = "Gabriel Gets Devoured by Cats"
			detailSrcImage = "images/gabriel.png"
			detailedDesc = "I made this. it is ULTRAKILL."
			break;
		case "moodpainting":
			detailedTitle = "Colour Study - Digital Painting"
			detailSrcImage = "images/moodpainting.png"
			detailedDesc = "I made this. it is painting."
			break;
		case "uke":
			detailedTitle = "Ukelele Wallpaper - Vector Illustration"
			detailSrcImage = "images/ukewallpaper.png"
			detailedDesc = "I made this. it is ukelele."
			break;
		default:
		break;
	}
	dynamicDescription();
}


/* 
dynamicDescription:

This function, called above in keywordSet, will fill out the innerHTML of the title, description and image of the artwork_details page.
*/
function dynamicDescription() {
	document.getElementById("detailedTitle").innerHTML = detailedTitle;
	document.getElementById("detailedImage").src = detailSrcImage;
	document.getElementById("descriptionBox").innerHTML = detailedDesc;
}
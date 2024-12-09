
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
			detailedDesc = "A more recent design, this was a continuation of a small idea that came about when a friend of mine asked me to draw \'A skeleton in a Hawaiian shirt.\' A few months later, I repurposed the idea for a print that was to be sold at a local pride event. This design took quite a few hours to complete, but was well worth it in the end. <br> <br> A major trouble I ran into during this process was composition, trying to fill the frame while keeping focal points in the foreground, especially with so much to look at. I achieved the balance of visual contrast and cohesion by using slightly different palettes for the foreground and background. The more saturated greens of the foreground show off the main idea of the 2 characters, while keeping the photos readable and patently \‘in the background\’. The background photos are also simplified, keeping the unnecessary details out and emphasising subtlety. Conversely, they provide some contextual storytelling that makes the entire print a bit more interesting."
			break;
		case "blue":
			detailedTitle = "Blue Critters - Vector Illustration"
			detailSrcImage = "images/bluecritters.png"
			detailedDesc = "This design was a redo of an old design project that I had done in my free time during a high school design class. I created a variety of icons based around various animals and symbols and arranged them in varying size and orientation. I used a unified colour palette of around 5 blues and a single orange, where each of the different ‘pieces’ includes a single orange part.<br><br>The largest roadblock in this project was finding an appealing colour scheme that worked well with typical elements of phone screens and desktops. I had to keep things somewhat muted, but still readable and fun. I went through many options, asked for feedback and found a combination that was in a bit of a middle ground."
			break;
		case "newseoul":
			detailedTitle = "City Concept Painting - Digital Paint Commission"
			detailSrcImage = "images/newseoul.png"
			detailedDesc = "I made this. it is a background for the comic Engraved."
			break;
		case "halforc":
			detailedTitle = "Half-Orc Fighter - D&D Character Design"
			detailSrcImage = "images/halforccharacter.png"
			detailedDesc = "This drawing (front) was one that I invested more time into than I expected to. This is a Dungeons & Dragons character that I created for a unique campaign, A half-orc fighter who prefers to use her bare fists compared to other weapons. I attempted to communicate her ideals in her design, someone who has a penchant for hoarding wealth and stealing from those she can punch, hence the various jewelry and battered appearance.<br><br>The design included in the background is a heavily modernised outfit, as the campaign’s main story took our party into a futuristic cyberpunk setting and we were told to blend in a bit more. This piece was separate and I was able to go back in and accentuate the specifics of her personality through her new clothing, better suited to her brashness and muscle, while still including those core design elements."
			break;
		case "beef":
			detailedTitle = "beef. - Original Sticker Designs"
			detailSrcImage = "images/beef.png"
			detailedDesc = "These designs are part of a series, using vector illustrations to make a variety of designs based around the word “beef.”. I attempted to make the designs varied, and capitalised on contrasting colour combinations to make the designs stand out while not being hard on the eyes.<br><br>A specific challenge I encountered in these designs is coordinating the text colour with the multiple outlines, as working with brighter and contrasting colours can very easily lead to combinations that become hard to read or just generally unpleasant. Seeing the stickers printed and stuck on my laptop was incredibly gratifying."
			break;
		case "logo":
			detailedTitle = "Alternative Logo Design - Vector Illustration"
			detailSrcImage = "images/smellbuslogo.png"
			detailedDesc = "I made this. it is logo."
			break;
		case "monster":
			detailedTitle = "Monster - Vector Illustration"
			detailSrcImage = "images/monster.png"
			detailedDesc = "This design, loosely based upon the cover of the 1982 Oingo Boingo album Nothing to Fear, was meant to be an icon for my personal use, but I didn’t end up using it for very long. I leaned into the Burton- and Selick-inspired nature of the inspiration for the colours, background patterns and general design in attempts to make something whimsical and potentially a little unnerving. <br><br> An interesting concern that came up in iterating on this design is stylization. An example is how I achieved the flatness in the design by using a solid colour for the right arm, how I simplified the forms of the drips coming from the head, and how I contrasted the simpler parts of the image with the crooked and bountiful teeth. This was a unique exercise in creating a striking image and shaving off details that didn’t serve the bigger purpose of the design for the sake of simpler appeal (something especially important in a small profile image)."
			break;
		case "gabriel":
			detailedTitle = "Gabriel Gets Devoured by Cats"
			detailSrcImage = "images/gabriel.png"
			detailedDesc = "This illustration, while a bit of a joke, turned out to be quite an interesting exercise. This was done as a thumbnail image for a friend’s YouTube video regarding the video game ULTRAKILL, in which a cheat item that summoned cats was used to defeat one of the game’s bosses.<br><br>I was able to finish this fairly quickly, and while there was a lot I would change, I was able to try out new techniques for digital painting, as this was a little less serious of a gig. This turned out to be a very worthwhile experiment as I found brushes and tools that I use in my digital painting now."
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

This function, called above in keywordSet, will fill 
out the innerHTML of the title, description and image 
of the artwork_details page.
*/
function dynamicDescription() {
	document.getElementById("detailedTitle").innerHTML = detailedTitle;
	document.getElementById("detailedImage").src = detailSrcImage;
	document.getElementById("modalImage").src = detailSrcImage;
	document.getElementById("descriptionBox").innerHTML = detailedDesc;
}

/*
showModal:

This function will cause the modal 'detailed view' panel 
to appear, and subsequently disappear upon the next click.
*/
function showModal(mode) {
	if (mode == 1) {
		document.getElementById('zoomModal').style.display = 'block';
		document.getElementById('zoomModal').style.position = 'fixed';
	} else if (mode == 0) {
		document.getElementById('zoomModal').style.display = 'none';
		document.getElementById('zoomModal').style.position = 'fixed';
	}
	
}


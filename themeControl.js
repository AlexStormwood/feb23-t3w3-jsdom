const themes = {
	light: {
		background: "white",
		text:"darkblue"
	},
	dark: {
		background: "grey",
		text: "white"
	}
}

function changeCSSTheme(themeName){
	for (const variable in themes[themeName]) {
		console.log("themes[themeName][variable] is:\n" + themes[themeName][variable]);
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
	}
}

function toggleLightDark(){
	let currentBackgroundColour = getComputedStyle(document.documentElement).getPropertyValue("--background");
	if (currentBackgroundColour == "white") {
		changeCSSTheme("dark");
	}  else {
		changeCSSTheme("light");
	}
}

// changeCSSTheme("dark");
// themes["light"]
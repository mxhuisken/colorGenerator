function addColorBlock(color) {
  $(".color-boxes").append(
    `<div class="colorBoxes" style="background-color:${color}"></div>`
  );
}

var inputEl = document.querySelector("#input");

var AllowedInputs = [
"aliceblue",
"antiquewhite",
"aqua",
"aquamarine",
"azure",
"beige",
"bisque",
"black",
"blanchedalmond",
"blue",
"blueviolet",
"brown",
"burlywood",
"cadetblue",
"chartreuse",
"chocolate",
"coral",
"cornflowerblue",
"cornsilk",
"crimson",
"cyan",
"darkblue",
"darkcyan",
"darkgoldenrod",
"darkgray",
"darkgreen",
"darkgrey",
"darkkhaki",
"darkmagenta",
"darkolivegreen",
"darkorange",
"darkorchid",
"darkred",
"darksalmon",
"darkseagreen",
"darkslateblue",
"darkslategray",
"darkslategrey",
"darkturquoise",
"darkviolet",
"deeppink",
"deepskyblue",
"dimgray",
"dimgrey",
"dodgerblue",
"firebrick",
"floralwhite",
"forestgreen",
"fuchsia",
"gainsboro",
"ghostwhite",
"gold",
"goldenrod",
"gray",
"green",
"greenyellow",
"grey",
"honeydew",
"hotpink",
"indianred",
"indigo",
"ivory",
"khaki",
"lavender",
"lavenderblush",
"lawngreen",
"lemonchiffon",
"lightblue",
"lightcoral",
"lightcyan",
"lightgoldenrodyellow",
"lightgray",
"lightgreen",
"lightgrey",
"lightpink",
"lightsalmon",
"lightseagreen",
"lightskyblue",
"lightslategray",
"lightslategrey",
"lightsteelblue",
"lightyellow",
"lime",
"limegreen",
"linen",
"magenta",
"maroon",
"mediumaquamarine",
"mediumblue",
"mediumorchid",
"mediumpurple",
"mediumseagreen",
"mediumslateblue",
"mediumspringgreen",
"mediumturquoise",
"mediumvioletred",
"midnightblue",
"mintcream",
"mistyrose",
"moccasin",
"navajowhite",
"navy",
"oldlace",
"olive",
"olivedrab",
"orange",
"orangered",
"orchid",
"palegoldenrod",
"palegreen",
"paleturquoise",
"palevioletred",
"papayawhip",
"peachpuff",
"peru",
"pink",
"plum",
"powderblue",
"purple",
"rebeccapurple",
"red",
"rosybrown",
"royalblue",
"saddlebrown",
"salmon",
"sandybrown",
"seagreen",
"seashell",
"sienna",
"silver",
"skyblue",
"slateblue",
"slategray",
"slategrey",
"snow",
"springgreen",
"steelblue",
"tan",
"teal",
"thistle",
"tomato",
"turquoise",
"violet",
"wheat",
"white",
"whitesmoke",
"yellow",
"yellowgreen"];

var fetchbutton = document.querySelector("#submit");
fetchbutton.addEventListener("click", (e) => {
  //validate input before hitting API
  fetchColors()
});

inputEl.addEventListener("keyup", (e) => {
  //validate input before hitting API
  if (e.key === "Enter"){
  fetchColors()
  }
});

function fetchColors() {
  if (inputEl.value && AllowedInputs .includes(inputEl.value)) {
    var requestUrl = `https://colorizerifier.netlify.app/.netlify/functions/shades?color=${inputEl.value}`;
    fetch(requestUrl)
      .then((colorRes) => colorRes.json())
      .then((colorData) => {
        console.log(colorData);
        $(".color-boxes").empty();
        for (i = 0; i < colorData.length; i++) {
          addColorBlock(colorData[i]);
        }
      });
  }
}
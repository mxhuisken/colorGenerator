function addColorBlock(color) {
  $(".color-boxes").append(
    `<div class="colorBoxes" style="background-color:${color}"></div>`
  );
}

var inputEl = document.querySelector("#input");

var fetchbutton = document.querySelector("#submit");
fetchbutton.addEventListener("click", (e) => {
  //validate input before hitting API
  if (inputEl.value && ["red"].includes(inputEl.value)) {
    var requestUrl = `https://colorizerifier.netlify.app/.netlify/functions/shades?color=${inputEl.value}`;
    fetch(requestUrl)
      .then((colorRes) => colorRes.json())
      .then((colorData) => {
        console.log(colorData);
        for (i = 0; i < colorData.length; i++) {
          addColorBlock(colorData[i]);
        }
      });
  }
});

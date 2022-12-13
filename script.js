let input = document.querySelector(".search");
let btn = document.querySelector("#btn");
let result = document.querySelector("#result");


btn.addEventListener("click", (e) => {
  result.innerHTML = "";
  let array = [];
  e.preventDefault();
  let inputVal = input.value;

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=jeMvigjtlEAFHjrfJxcWres0ILHNxaIr&q=${inputVal}&limit=5&offset=0&rating=g`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderImages(data);
    })
    .catch(error => console.log(error));

  function renderImages(data) {
    data.data.forEach(element => {
      array.push(element.images.original.url);
      });
      for(let i=0;i < array.length;i++){
        result.innerHTML += `<img src="${array[i]}" alt = "">`;
      };
  }
});

let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");
let spinner = document.getElementById("spinner");
jokeBtn.addEventListener("click", function() {
    jokeText.textContent = "";
    spinner.classList.toggle("d-none");
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/jokes/random";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(textData) {
            spinner.classList.toggle("d-none");
            let {
                value
            } = textData;
            jokeText.textContent = value;
            console.log(textData);
        });
})

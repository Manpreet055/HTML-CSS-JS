let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let button = document.querySelector("button");

button.addEventListener("click", async () => {
    quote.textContent = "Loading...";
    author.textContent = "Loading...";
    let min = 0;
    let max = 30;
    let randomQuote = Math.floor(Math.random() * (max - min + 1)) + min;

    try {
        let response = await fetch('https://dummyjson.com/quotes');
        if (!response.ok) throw new Error("Something Went Wrong");
        let fetchedData = await response.json();
        let quoteAuthor = fetchedData.quotes[randomQuote];
        quote.textContent = quoteAuthor.quote;
        author.textContent = quoteAuthor.author;
    } catch (err) {
        console.log(err);
    }

})

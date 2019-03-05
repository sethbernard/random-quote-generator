let url =
  "https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

let text, author;

async function getNewQuote() {
  let response = await fetch(url, { cache: "no-cache" });
  let data = await response.json();
  text = data[0].content;
  newAuthor = data[0].title;
  document.getElementById("text").innerText = text;
  document.getElementById("author").innerText = newAuthor;
}

let quoteBtn = document.getElementById("new-quote");
quoteBtn.addEventListener("click", getNewQuote);

document.addEventListener("DOMContentLoaded", getNewQuote);

let url =
  "https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

let quote, author;

async function getNewQuote() {
  let response = await fetch(url, { cache: "no-cache" });
  let data = await response.json();
  quote = data[0].content;
  author = data[0].title;
  document.getElementById("text").innerText = quote;
  document.getElementById("author").innerText = author;
}

const sendTweet = () => {
  let twitterUrl = (document.getElementById("tweet-quote").href =
    "https://twitter.com/intent/tweet?text=");
  let tweet = twitterUrl + encodeURI(quote) + " -" + encodeURI(author);
  window.open(tweet);
};

let quoteBtn = document.getElementById("new-quote");
quoteBtn.addEventListener("click", getNewQuote);

let tweetBtn = document.getElementById("tweet-quote");
tweetBtn.addEventListener("click", sendTweet);

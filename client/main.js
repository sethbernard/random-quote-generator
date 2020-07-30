document.addEventListener('DOMContentLoaded', getNewQuote);

let url =
  'https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&filter[posts_per_page]=1';

let quote, author;

async function getNewQuote() {
  let response = await fetch(url, { cache: 'no-cache' });
  let data = await response.json();

  let length = data.length;
  let random = Math.floor(Math.random() * length);
  quote = data[random].content.rendered;
  author = data[random].title.rendered;
  document.getElementById('text').innerHTML = quote;
  document.getElementById('author').innerHTML = `-${author}`;
}

const sendTweet = () => {
  let twitterUrl = (document.getElementById('tweet-quote').href =
    'https://twitter.com/intent/tweet?text=');
  let tweet =
    twitterUrl + encodeURI(quote.replace(/(<([^>]+)>)/gi, ' ')) + ' -' + author;
  window.open(tweet);
};

let quoteBtn = document.getElementById('new-quote');
quoteBtn.addEventListener('click', getNewQuote);

let tweetBtn = document.getElementById('tweet-quote');
tweetBtn.addEventListener('click', sendTweet);

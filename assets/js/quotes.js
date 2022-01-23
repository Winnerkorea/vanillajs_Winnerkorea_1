const quotes = [
  {
    quotes: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quotes: "You’re off to great places, today is your day. Your mountain is waiting, so get on your way",
    author: "Albert Einstein",
  },
  {
    quotes: "Stay afraid, but do it anyway. What's important is the action. You don't have to wait to be confident. Just do it and eventually the confidence will follow.",
    author: "Carrie Fisher",
  },
  {
    quotes: "One can choose to go back toward safety or forward toward growth. Growth must be chosen again and again; fear must be overcome again and again.",
    author: "Abraham Maslow",
  },
  {
    quotes: "The swiftest way to triple your success is to double your investment in personal development.",
    author: "Robin Sharma",
  },
  {
    quotes: "Don't go through life, grow through life.",
    author: "Eric Butterworth",
  },
  {
    quotes: "We can't become what we need to be by remaining what we are.",
    author: "Oprah Winfrey",
  },
  {
    quotes: "Life's challenges are not supposed to paralyze you, they're supposed to help you discover who you are.",
    author: "Bernice Johnson Reagon",
  },
  {
    quotes: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
  {
    quotes: "People who are crazy enough to think they can change the world are the ones who do.",
    author: "Rob Siltanen",
  },
  {
    quotes: "If there is no struggle, there is no progress.",
    author: "Frederick Douglass",
  },
  {
    quotes: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default.",
    author: "J.K. Rowling",
  },
  {
    quotes: "Do the best you can until you know better. Then when you know better, do better.",
    author: "Maya Angelou",
  },
  {
    quotes: "I've got a theory that if you give 100% all the time, somehow things will work out in the end.",
    author: "Larry Bird",
  },
  {
    quotes: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton ",
  },
  {
    quotes: "Remember that wherever your heart is, there you will find your treasure.",
    author: "Paulo Coelho",
  },
  {
    quotes: "We should not judge people by their peak of excellence; but by the distance they have traveled from the point where they started.",
    author: "Henry Ward Beecher",
  },
  {
    quotes: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong",
    author: "Ella Fitzgerald",
  },
  {
    quotes: "Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.",
    author: "Hillary Clinton",
  },
  {
    quotes: "You can waste your lives drawing lines. Or you can live your life crossing them.",
    author: "Shonda Rhimes",
  },
];

const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

const TODAY_QUOTE = todayQuotes.quotes;
const TODAY_QUOTE_AUTHOR = todayQuotes.author;

quote.innerHTML = TODAY_QUOTE;
author.innerHTML = TODAY_QUOTE_AUTHOR;

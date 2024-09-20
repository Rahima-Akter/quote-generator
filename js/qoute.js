const quotes = [
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Jobs"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        author: "Aristotle"
    },
    {
        quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
        author: "Maya Angelou"
    },
    {
        quote: "We do not remember days; we remember moments.",
        author: "Cesare Pavese"
    },
    {
        quote: "To find yourself, think for yourself.",
        author: "Socrates"
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "Søren Kierkegaard"
    },
    {
        quote: "The wound is the place where the Light enters you.",
        author: "Rumi"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "Your life does not get better by chance, it gets better by change.",
        author: "Jim Rohn"
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The only journey is the one within.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "Life is a balance of holding on and letting go.",
        author: "Rumi"
    },
    {
        quote: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.",
        author: "Rumi"
    },
    {
        quote: "It is not the length of life, but depth of life.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Change is the law of life. And those who look only to the past or present are certain to miss the future.",
        author: "John F. Kennedy"
    }
];

document.getElementById('generate-btn').addEventListener('click', function(){
    // gives a rondom index from the quotes object
    let randomQuotes = Math.floor(Math.random() * quotes.length);

    // set randonQuotes as innerText to have randomizes qoutes
    const pQuotes = document.getElementById('p-quote');
    pQuotes.innerText = quotes[randomQuotes].quote;
    const author = document.getElementById('author');
    author.innerText = quotes[randomQuotes].author;

})

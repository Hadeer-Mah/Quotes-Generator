var quotes = [
    {   author: '― Oscar Wilde',
        quote: '“Be yourself; everyone else is already taken.”',
    },
    {   author: '― Albert Einstein',
        quote: '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',
    },
    {   author: '― Oscar Wilde',
        quote: '“So many books, so little time.”',
    },
    {   author: '― Marcus Tullius Cicero',
        quote: '“A room without books is like a body without a soul.”',
    },
    {   author: '― Mae West',
        quote: '“You only live once, but if you do it right, once is enough.”',
    },
    {   author: '― Robert Frost',
        quote: '“In three words I can sum up everything I have learned about life: it goes on.”',
    },
    {   author: '― Mark Twain',
        quote: '“If you tell the truth, you don\'t have to remember anything.”',
    },
    {   author: '― Mahatma Gandhi',
        quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
    },
    {   author: '― Andre Gide, Autumn Leaves',
        quote: '“It is better to be hated for what you are than to be loved for what you are not.”',
    },
    {   author: '― Narcotics Anonymous',
        quote: '“Insanity is doing the same thing, over and over again, but expecting different results.”',
    },

]

var displayQuote = document.getElementById("quote-display")
var displayAuthor = document.getElementById("author-display")  

function addQuote() {
    var totalQuote = quotes[Math.floor(Math.random() * quotes.length)]
    displayQuote.innerHTML = totalQuote.quote
    displayAuthor.innerHTML = totalQuote.author

    
}
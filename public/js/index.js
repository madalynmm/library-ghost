const apiKey = "AIzaSyBqzffvA4t9JXBJoUhqX0LD-DeCSfbBj0o"

// function to read the search box and pass the values into the book API
const searchButton = document.querySelector("#searchBtn")
searchButton.addEventListener('click', function () {
    var searchText = document.querySelector("#searchBox")
    var searchInfo = searchText.value

    bookSearch(searchInfo)

    //redirect to book-search page
    // document.location.replace('/book-search');
})

// function to search for a book based on user input in search bar
function bookSearch(searchInfo) {
    var url = `https://www.googleapis.com/books/v1/volumes?q=${searchInfo}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            //loop through data and display 5 items (ask how to write this)
            for (var i = 0; i < 4; i++) {
                var bookName = document.querySelector('.bookName')
                var bookISBN = document.querySelector('.bookISBN')
                var bookAuthor = document.querySelector('.bookAuthor')
                var bookNameTwo = data[i].volumeInfo.title
                var bookISBNTwo = data[i].industryIdentifiers.identifier
                var bookAuthorTwo = data[i].volumeInfo.authors[1]

                bookName.textContent = 'Book Title: ' + bookNameTwo
                bookISBN.textContent = 'Book ISBN: ' + bookISBNTwo
                bookAuthor.textContent = 'Book Author: ' + bookAuthorTwo
            }
        })
}

// querySelector for buttons to add to collection
var addCollection = document.querySelectorAll("#addToCollectionBtn")
searchButton.addEventListener('click', function () {
    addBook(bookTitle)
})

function addBook() {
    addCollection.forEach(async function () {
        //get title of specific book by traversing dom (want sibling)
        bookTitle = myButton.nextSibling()
        
        // make fetch request to PUT route to update record
        const response = await fetch(`/api/book-search/${bookTitle}`, {
            method: 'PUT',
            // body: JSON.stringify({ base_colo }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            alert('Book Added!');
            //         // //reload page
            //         // window.location.reload();
            //     }
        }
    })
}

// event listener to change page to collection page
var collectionButton = document.querySelector("#collectionButton")
collectionButton.addEventListener('click', function () {
    //redirect to new page
    document.location.replace('/collection');
})

//link html file(handlebars) to javascript, add unstyled button + text box,
const apiKey = "AIzaSyBqzffvA4t9JXBJoUhqX0LD-DeCSfbBj0o"


// function to read the search box and pass the values into the book API
var searchButton = document.querySelector("#searchBtn")
searchButton.addEventListener('click', function () {
    var searchText = document.querySelector("#searchBox")
    var searchInfo = searchText.value

    bookSearch(searchInfo)
})


// function to search for a book based on user input in search bar
function bookSearch(searchInfo) {
    var url = `https://www.googleapis.com/books/v1/volumes?q=${searchInfo}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

// querySelector for buttons to add to collection
var addCollection = document.querySelector("#addBtn")
searchButton.addEventListener('click', function () {
    addBookToCollection()
})
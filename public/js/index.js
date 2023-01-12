const apiKey = "AIzaSyBqzffvA4t9JXBJoUhqX0LD-DeCSfbBj0o"

$(document).ready(function () {
    // function to read the search box and pass the values into the book API
    document.getElementById("searchBtn").addEventListener('click', function (event) {
        event.preventDefault()
        var searchText = document.getElementById("searchBox")
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
                console.log(data.items)
                //loop through data and display 5 items (ask how to write this)
                for (var i = 0; i < 5; i++) {
                    var bookName = document.getElementById('bookName1')
                    var bookNameTwo = document.getElementById('bookName2')
                    var bookNameThree = document.getElementById('bookName3')
                    var bookNameFour = document.getElementById('bookName4')
                    var bookNameFive = document.getElementById('bookName5')
                    var bookNameDataOne = data.items[0].volumeInfo.title
                    var bookNameDataTwo = data.items[1].volumeInfo.title
                    var bookNameDataThree = data.items[2].volumeInfo.title
                    var bookNameDataFour = data.items[3].volumeInfo.title
                    var bookNameDataFive = data.items[4].volumeInfo.title

                    bookName.textContent = bookNameDataOne
                    bookNameTwo.textContent = bookNameDataTwo
                    bookNameThree.textContent = bookNameDataThree
                    bookNameFour.textContent = bookNameDataFour
                    bookNameFive.textContent = bookNameDataFive
                }
            })
    }

    var addToCollectionBtns = document.querySelectorAll('.addToCollectionBtn')
    for (let i = 0; i < addToCollectionBtns.length; i++) {
        addToCollectionBtns[i].addEventListener("click", () => {
            console.log(addToCollectionBtns[i].nextSibling.textContent)
            var bookTitle = addToCollectionBtns[i].nextSibling.textContent
            addBook(bookTitle)
        })
    }

    // button to redirect to collection page
    document.getElementById('viewCollectionBtn').addEventListener('click', function (event) {
        event.preventDefault()
        window.location.replace('/collection')
    })
    // button to redirect to homepage
    document.getElementById('homepageBtn').addEventListener('click', function (event) {
        event.preventDefault()
        // window.location.replace('/')
        console.log('hello')
    })

    async function addBook(title) {
        // make fetch request to PUT route to update record
            const response = await fetch("/api/book/books", {
                method: 'POST',
                body: JSON.stringify({ title }),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                alert('Book Added!');
            }
    }
})
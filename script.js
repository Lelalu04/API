// fetch(`https://api.chucknorris.io/jokes/random`)
// .then(res => res.json())
// .then(joke => {

//     let p = document.getElementById(`paragraf`)
//     let button = document.querySelector(`button`)
//     console.log(joke.value)
//     p.textContent = joke.value
//     button.addEventListener(`click`, () => {
//         window.location.reload()
//     })
// })

let p = document.getElementById(`paragraf`)
let randomJokeButton = document.getElementById(`change-joke-button`)
let categoryButton = document.getElementById(`category-button`)
let updarteJokeFronCategory = document.getElementById(`update-joke`)
let form = document.getElementById(`form-category-joke`)
let select = document.getElementById(`category-joke`)

form.addEventListener(`click`, (e) => {
    e.preventDefault()
    fetch(`https://api.chucknorris.io/jokes/categories`)
        .then(res => res.json())
        .then(categories => {
            categories.map(category => {
                let option = document.createElement(`option`)
                option.value = category
                option.textContent = category
                select.append(option)
            })
        })

})
updarteJokeFronCategory.addEventListener(`click`, () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
        .then(res => res.json())
        .then(joke => {
            pText_Color(joke.value, `black`)
        })
})

randomJokeButton.addEventListener(`click`, () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then(joke => {
            pText_Color(joke.value, `black`)
        })
})
let searchForm = document.getElementById(`form-search-joke`)
let searchInput = document.getElementById(`searchInput`)
let jokeArr = []
searchForm.addEventListener(`submit`, (e) => {
    e.preventDefault()
    fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput.value}`)
        .then(res => res.json())
        .then(joke => {
            if (joke.error) {
                pText_Color(joke.error, `red`)
            } else if (joke.total === 0) {
                pText_Color(`Not found joke`, `red`)

                // gfhh
            } else {
                if(select.value){
                    joke.result.map(element => {
                        if([...element.categories] == select.value){
                            jokeArr.push(element.value)
                        }
                    })
                    
                }else{
                    joke.result.map(element => {
                    jokeArr.push(element.value)
                })
                }
                console.log(jokeArr)
                let randomElement = jokeArr[Math.floor(Math.random() * jokeArr.length)]
                pText_Color(randomElement, `black`)
            }
            jokeArr= []
        })
        // e.target.reset()
})
function pText_Color(text, color) {
    p.textContent = text
    p.style.color = color
}


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
        .then(joke => {
            joke.map(element => {
                let option = document.createElement(`option`)
                option.value = element
                option.textContent = element
                select.append(option)
            })
        })

    })
    updarteJokeFronCategory.addEventListener(`click`, () => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${select.value}`)
    .then(res => res.json())
    .then(joke => {
        p.textContent = joke.value
    })
    })

    randomJokeButton.addEventListener(`click`, () => {
    fetch(`https://api.chucknorris.io/jokes/random`)
        .then(res => res.json())
        .then(joke => {
            p.textContent = joke.value
            console.log(`asd`)
        })
})


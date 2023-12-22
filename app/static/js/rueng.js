function main(lang) {
    if(lang == 1){
        langRu.addEventListener("click", ()=>{
            langRu.classList.add("activeLang")
            langEng.classList.remove("activeLang")
            fetch('/RuorEng.html', {
                method: 'POST'
            })
            lang1.textContent="Рецепты"
            lang2.textContent="Авторизация"
            lang3.textContent="Зарегистрироваться"
            lang4.textContent="Добавить рецепт"
            lang5.textContent="Выйти"
            lang6.textContent="Введите вашу почту:"
            lang7.textContent="Введите пароль:"
            lang8.textContent="Отправить"
            lang9.textContent="Введите ваше имя:"
            lang10.textContent="Введите вашу фамилию:"
            lang11.textContent="Введите пароль:"
            lang12.textContent="Введите вашу почту:"
            lang13.textContent="Отправить"
            lang14.textContent="Название рецепта:"
            lang15.textContent="Ингредиенты:"
            lang16.textContent="Рецепт:"
            lang17.textContent="Автор:"
            lang18.textContent="Введите название рецепта:"
            lang19.textContent="Введите ингредиенты:"
            lang20.textContent="Введите рецепт:"
            lang21.textContent="Отправить"
            lang22.textContent="Ошибка 404."
        })
    }else{
        langEng.addEventListener("click", ()=>{
            langRu.classList.remove("activeLang")
            langEng.classList.add("activeLang")
            fetch('/RuorEng.html', {
                method: 'POST'
            })
            lang1.textContent="Recipes"
            lang2.textContent="Authorization"
            lang3.textContent="Register"
            lang4.textContent="Add a recipe"
            lang5.textContent="Go out"
            lang6.textContent="Enter your email:"
            lang7.textContent="Enter password:"
            lang8.textContent="Send"
            lang9.textContent="Enter your name:"
            lang10.textContent="Enter your family:"
            lang11.textContent="Enter password:"
            lang12.textContent="Enter your email:"
            lang13.textContent="Send"
            lang14.textContent="Recipe name:"
            lang15.textContent="Ingredients:"
            lang16.textContent="Recipe:"
            lang17.textContent="Author:"
            lang18.textContent="Enter recipe name:"
            lang19.textContent="Enter ingredients:"
            lang20.textContent="Enter recipe:"
            lang21.textContent="Send"
            lang22.textContent="Error 404."
        })
    }
}

const langRu=document.querySelector(".langRu");
const langEng=document.querySelector(".langEng");

const lang1=document.getElementById("lang1")
const lang2=document.getElementById("lang2")
const lang3=document.getElementById("lang3")
const lang4=document.getElementById("lang4")
const lang5=document.getElementById("lang5")

const lang6=document.getElementById("lang6")
const lang7=document.getElementById("lang7")
const lang8=document.getElementById("lang8")

const lang9=document.getElementById("lang9")
const lang10=document.getElementById("lang10")
const lang11=document.getElementById("lang11")
const lang12=document.getElementById("lang12")
const lang13=document.getElementById("lang13")

const lang14=document.getElementById("lang14")
const lang15=document.getElementById("lang15")
const lang16=document.getElementById("lang16")
const lang17=document.getElementById("lang17")

const lang18=document.getElementById("lang18")
const lang19=document.getElementById("lang19")
const lang20=document.getElementById("lang20")
const lang21=document.getElementById("lang21")

const lang22=document.getElementById("lang22")

fetch('/RuorEng_current.html', {
    method: 'POST'
})
    .then(response => response.json())
    .then(data => {
        main(data);
})


lang1.textContent="Recipes"
        lang2.textContent="Authorization"
        lang3.textContent="Register"
        lang4.textContent="Add a recipe"
        lang5.textContent="Go out"
        lang6.textContent="Enter your email:"
        lang7.textContent="Enter password:"
        lang8.textContent="Send"
        lang9.textContent="Enter your name:"
        lang10.textContent="Enter your family:"
        lang11.textContent="Enter password:"
        lang12.textContent="Enter your email:"
        lang13.textContent="Send"
        lang14.textContent="Recipe name:"
        lang15.textContent="Ingredients:"
        lang16.textContent="Recipe:"
        lang17.textContent="Author:"
        lang18.textContent="Enter recipe name:"
        lang19.textContent="Enter ingredients:"
        lang20.textContent="Enter recipe:"
        lang21.textContent="Send"
        lang22.textContent="Error 404."
function display(a,b,c,d) {
    const nameElement = document.getElementById('name-data');
    const ingredientsElement = document.getElementById('ingredients-data');
    const recipeElement = document.getElementById('recipe-data');
    const avtorElement = document.getElementById('avtor-data');

    nameElement.innerHTML = a;
    ingredientsElement.innerHTML = b;
    recipeElement.innerHTML = c;
    avtorElement.innerHTML = d;
}

display(1,1,1,1)
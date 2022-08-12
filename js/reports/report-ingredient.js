fetch('http://127.0.0.1:5000/order/report/most-saled-ingredient')
    .then(response => response.json())
    .then(ingredient => {
        ingredients = new Array();
        ingredients.push(ingredient);
        let rows = ingredients.map(element => createReportIngredientTemplate(element));
        let table = $("#ingredient tbody");
        table.append(rows);
    });


function createReportIngredientTemplate(ingredient) {
    let template = $("#report-ingredient-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}

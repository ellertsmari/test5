var renderTemplateToElement = function(template, element){
    element.innerHTML = template;
}
var enterMainPage = function(){
    console.log("you are on the main page");
    renderTemplateToElement(mainTemplate, mainElement);
}

var mainTemplate = `
    <h1>this is main page</h1>
`
var headerTemplate= `<h2>main page</h2><h2>about us</h2>`
var aboutTemplate = `
<h1>this is about us page</h1>
`

var mainElement = document.querySelector("main");
var headerElement = document.querySelector("header");
enterMainPage();
renderTemplateToElement(headerTemplate, headerElement);

var links = document.querySelectorAll("h2");
mainLink = links[0];
aboutLink = links[1];



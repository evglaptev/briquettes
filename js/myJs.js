var buttons = document.querySelectorAll(".btn");
//console.dir(buttons);
Array.prototype.forEach.call(buttons, function (item) { item.addEventListener('click', onButtonClick); });


function getBut(className) {
    return Array.prototype.find.call(buttons, (function (item) {
       // console.dir("sfgsg");
        return item.classList.contains(className);
    }));
}
function onButtonClick(event) {
    
    var conteiner = event.target.parentNode;
    conteiner.querySelector('.btn').remove();

    function generate() {
        var element = document.createElement("div");



        var newElement = document.createElement("input");
        newElement.setAttribute("type", "text");
        newElement.classList.add("col-md-2");
        var newElement1 = document.createElement("p");
        newElement1.textContent = "PhoneNumber";
        newElement1.classList.add("col-sm-2");
        newElement1.classList.add("text-left");
        //newElement1.classList.add("text-vertical-default");

        element.classList.add("row");
        element.appendChild(newElement1);
        element.appendChild(newElement);

        return element;
    }

    var element = document.createElement("div");
    element.appendChild(generate());
    element.appendChild(generate());
    element.appendChild(generate());
    element.appendChild(generate());

    //conteiner.classList.add("well");
    conteiner.appendChild(element);
}
//console.log (getBut('ruf'));
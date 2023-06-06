//create element with markup returned in string
const myTable = document.querySelector(".my-table");

const elementWithString = `
<my-element data-element-name="gold"></my-element>
`;

const nodeWithStringElement = document.createElement("div");
nodeWithStringElement.innerHTML = elementWithString;

myTable?.appendChild(nodeWithStringElement);

//create element with class initialisation
const myClassElement = new MyElement();

myClassElement.elementName = "Lithium";

const nodeWithClassInit = document.createElement("div");

nodeWithClassInit.innerHTML = myClassElement.HTML;

myTable?.appendChild(nodeWithClassInit);

//create element with createElement()
const myCreatedElement = document.createElement("my-element");

myCreatedElement.elementName = "Calcium";

myTable?.appendChild(myCreatedElement);

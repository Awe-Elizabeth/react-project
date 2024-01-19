

function customRender (reactElement, container){
    /**
     const domElement = document.createElement(reactElement.type);
    domElement.innerhtml = reactElement.children;
    domElement.setAttribute('href', reactElement.attributes.href);
    domElement.setAttribute('target', reactElement.attributes.target);
    container.appendChild(domElement); 
     */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(let attribute in reactElement.attributes){
        if(attribute === 'Children') continue;
        domElement.setAttribute(attribute, reactElement.attributes[attribute]);
    }
    container.appendchild(domElement);   
}

const reactElement =
{
    type: 'a',
    attributes: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: "Click me to visit google"

}

const root = document.querySelector("#root");   

customRender(reactElement, root);
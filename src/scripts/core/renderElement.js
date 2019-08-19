function renderElement(element, template, name) {
    if (!element) return;

    const components = element.querySelectorAll('[md-component-id]');
    
    if (components.length < 1) return;

    for (var i = 0, node; node = components[i]; i++) {
        var componentName = node.getAttribute('md-component-id');
        if(componentName === name) {
            node.innerHTML = template;
            renderElement(node);
        }
       
    }
}

export default renderElement;   
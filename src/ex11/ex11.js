function enhancedQuerySelectorAll(pattern){
    const [parentSelector, childSelector] = pattern.split("<");
    if (!childSelector) return document.querySelectorAll(parentSelector);
    const parents = document.querySelectorAll(parentSelector);
   
    parents.forEach(parent => {
        const children= parent.querySelectorAll(`${parentSelector} > ${childSelector}`);
        children.forEach(child =>{
            child.parentElement.dataset.selected = true;
    })})
    
    const res = document.querySelectorAll("[data-selected]");
    return res
}


module.exports = {enhancedQuerySelectorAll}
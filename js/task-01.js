
const itemElement = document.querySelectorAll('.item');
console.log('Number of categories:' , itemElement.length);
itemElement.forEach(element => {
    const titleEl = element.firstElementChild;
    const innerLiEl = element.lastElementChild.children;
    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , innerLiEl.length);
});

const itemList = document.getElementById('itemList');
const searchBar = document.getElementById('searchBar')

let jsonData = [];
console.log(searchBar)
searchBar.addEventListener('keyup', (e)=>{
    const searchString = e.target.value;
    console.log(searchString)  

   const filterItems =  jsonData.filter( textItem =>{
    return textItem.IdKrav.includes(searchString)
   });
   displayItems(filterItems);
})

const loadtextItems = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        jsonData = await res.json();
        displayItems(jsonData);
       console.log(jsonData)
    } catch (err) {
        console.error(err);
    }
};

const displayItems = (textItems) => {
    const htmlString = textItems
        .map((textItem) => {
            return `
            <li class="textItem">
                <h2>${textItem.id}</h2>
                <p>House: ${textItem.title}</p>
                <p> gender:${textItem.body}</p>
            </li>
        `;
        })
        .join('');
    itemList.innerHTML = htmlString;
};

loadtextItems();

import hpCharacters from './data.js'

////***************************///////






const demo = document.getElementById('charactersList');
const search = document.getElementById('searchBar');

const formSelect = document.getElementById('select');
const formSelect2 = document.getElementById('selects'); 

const pagination_element = document.querySelector('.pagination');
// const first =  document.getElementById('page-item');
// const second =  document.getElementById('page-items');


///*****************23 home work**********************///

let current_page = 1;
let rows = 9;


function DisplayList(array, wrapper, rows, current_page){
  let html = ``
  current_page--
  let start = current_page * rows
  let end = start + rows
  let pagination = array.slice(start, end) 
  loadData(pagination)
}

DisplayList(hpCharacters, demo, rows, current_page)


function displayButton(array, wrapper, rows){
  let numberOfBtn = Math.ceil(array.length / rows);
  for(let i = 1; i <= numberOfBtn; i++){
    createBtn(i)
    console.log(i);
  }
}

function createBtn(i){
  let btn = document.createElement('button');
  btn.addEventListener('click', ()=>{
    current_page = i
    DisplayList( hpCharacters, demo, rows, current_page  )
  })
  btn.innerHTML = i
  pagination_element.appendChild(btn)
}
displayButton(hpCharacters,pagination_element, rows)





////////**********************20-21 home work**********************/////////////










formSelect.addEventListener('click',()=>{
  let searchBrand = formSelect.value;
  let filteredData = hpCharacters.filter(el => {
    return el.brand.includes(searchBrand)
  })
  loadData(filteredData)
})
formSelect2.addEventListener('click',()=>{
  let searchPrice = formSelect2.value;
  let filteredData = hpCharacters.filter(el =>{
    return el.price == searchPrice 
  })
  loadData(filteredData)
})



search.addEventListener('keyup', ()=>{
    let searchItem = search.value.toLowerCase();
    let filteredDate = hpCharacters.filter(el => {
        return (
          el.name.toLowerCase().includes(searchItem) || 
          el.brand.toLowerCase().includes(searchItem)
          );
    })
    loadData(filteredDate)
});
  
function loadData(hpCharacters){
  let html = ``
  hpCharacters.forEach(character => {
    html += `
        <div class="server col-lg-4">
          <div class='card'>
            <img class='img img-fluid' src=${character.image}>
            <h5 class="name">${character.name}</h5>
            <h5>${character.brand}</h5>
            <h4>${character.price}</h4>
            <div> 
              
              <i class="  ${character.rating >= 1 ? 'fas fa-star' : character.rating >= 0.5 && character.rating < 1 ? 'fas fa-star-half'  : 'far fa-star'} "></i>
              <i class="  ${character.rating >= 2 ? 'fas fa-star' : character.rating >= 1.5 && character.rating < 2 ? 'fas fa-star-half'  : 'far fa-star'} "></i>
              <i class="  ${character.rating >= 3 ? 'fas fa-star' : character.rating >= 2.5 && character.rating < 3 ? 'fas fa-star-half'  : 'far fa-star'} "></i>
              <i class="  ${character.rating >= 4 ? 'fas fa-star' : character.rating >= 3.5 && character.rating < 4 ? 'fas fa-star-half'  : 'far fa-star'} "></i>
              <i class="  ${character.rating >= 5 ? 'fas fa-star' : character.rating >= 4.5 && character.rating < 5 ? 'fas fa-star-half'  : 'far fa-star'} "></i>
            </div>
            <button class="btn btn-primary ${  character.countInStock == 0 ? "disabled" : 'btn'  }">Buy</button>
          </div>
        </div>  
        `
        demo.innerHTML = html;
      })
 }
/*  loadData(hpCharacters)
 */

window.onscroll = function showHeader(){
  let header = document.querySelector('.header');
  if(window.pageYOffset > 200){
    header.classList.add('header-items');
  }else{
    header.classList.remove('header-items');
  }
}


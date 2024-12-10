
let searchBtn = document.querySelector('#search-btn'),
searchBean = document.querySelector('#search-bar');

searchBtn.addEventListener('click', () =>{
    searchBean.classList.toggle('active');
})
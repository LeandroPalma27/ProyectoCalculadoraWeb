var btnTypes = document.getElementById('btnTypes');
var types = document.querySelector('.types');
var desc = document.querySelector('.calculadora__desc');
var typeTitle = document.querySelector('.type__title');
var queryBtnTypes = document.querySelector('#btnTypes');

btnTypes.addEventListener('click', function(e) {
    types.classList.toggle('active');
    // desc.classList.toggle('active');
    typeTitle.classList.toggle('active');
    queryBtnTypes.classList.toggle('active');
});

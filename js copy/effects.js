var btnTypes = document.getElementById('btnTypes');
var types = document.querySelector('.types');
var desc = document.querySelector('.calculadora__desc');
var typeTitle = document.querySelector('.type__title')

btnTypes.addEventListener('click', function(e) {
    types.classList.toggle('active');
    desc.classList.toggle('active');
    typeTitle.classList.toggle('active');
});

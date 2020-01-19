var items = ['Uyanış', 'Kitap Okuma', 'Sudoku Çözme', 'Satranç Oyanama'];
var liste = document.querySelector('#myList');

items.forEach(function(item){
    createItem(item);
});

liste.addEventListener('click', function(item){
    if(item.target.tagName == 'LI'){
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }
});

document.querySelector('#deleteAll').onclick = function(){
    var elements = document.querySelectorAll('.checked');
    elements.forEach(function(item){
        item.style.display = 'none';
    })      
}

function ToogleDeleteButton(){
    var checkList = document.querySelectorAll('.checked');
    if(checkList.length > 0){
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.querySelector('#btnCreate').onclick = function(){
    var item = document.querySelector('#txtItem').value;
    if(item === ''){
        alert('Lütfen bir todo giriniz.');
        return;
    }
    createItem(item);

}

function createItem(item){
    var lis = document.createElement('li');
    var t = document.createTextNode(item);
    lis.className = 'list-group-item';
    lis.appendChild(t);
    liste.appendChild(lis);
    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    lis.appendChild(span);
    span.onclick = function(){
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }
}

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerContent = 'Goodbye';
//console.log(headerTitle.innerContent);
//headerTitle.innerHTML = '<h3> hello </h3>';

//header.style.borderBottom = 'solid 3px #000';


//GETELEMENTSBYCLASSNAME  //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello 2' ;
items[2].style.fontWeight = 'bold';
items[2].style.color= 'green';
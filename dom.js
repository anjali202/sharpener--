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
/* var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello' ;
items[2].style.fontWeight = 'bold';
items[2].style.backgroundColor = 'green';

for (var i=0; i < items.length; i++)
{
    li[i].style.backgroundColor = "#f4f4f4";
}

 */

//QUERY SELECTOR //
/* var header = document.querySelector('#main-header');
header.style.borderbottom ='solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit  = document.querySelector('input[type="submit"]');
submit.value ="SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'white';
 */
//queryselectorALL //

var titles = document.querySelectorAll('title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i< odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = '#ccc';
}
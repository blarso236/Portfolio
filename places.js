const output = document.querySelector('.output');


console.log(output);
const url = 'sample.json';
let myList = [];
let localData = localStorage.getItem('myList');
console.log(localData);

        myList = JSON.parse(localStorage.getItem('myList'));
        console.log(myList);
        jsLoader();

function jsLoader() {
    fetch(url).then(rep => rep.json())
        .then((data) => {
            myList = data;
            maker();
            savetoStorage();
        });
}

function maker() {
    output.innerHTML = '';
    myList.forEach((el, index) => {
        makeList(el, index);
    });
}

function makeList(item, index) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `${item.name}`;
    div.innerHTML = `${item.address}`;
    div.innerHTML=`<iframe src = ${item.map} width="350"
    height="350"> </iframe>`;
    
    output.append(div);
    savetoStorage();
}
    if (item.status) {
      div.classList.add('confirmed');  
    } else {
        div.classList.add('notConfirmed')
    }




function savetoStorage() {
    console.log(myList);
    localStorage.setItem('myList', JSON.stringify(myList));
}
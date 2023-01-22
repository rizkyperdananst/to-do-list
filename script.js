const input = document.getElementById('input');
const btnAdd = document.querySelector('.add');
const btnClear = document.querySelector('.clear');
const card_body = document.querySelector('.card-body');
const paragraf = document.querySelectorAll('.paragraf');
const trash = document.querySelectorAll('.fa-trash');

btnAdd.addEventListener('click', function() {
    if(input.value == '') {
        alert('Harap Mengisi Inputan');
        return false;
    } else {
        const divBaru = document.createElement('div');
        divBaru.setAttribute('class', 'paragraf');
        const pBaru = document.createElement('p');
        const textPBaru = document.createTextNode(input.value);
        pBaru.appendChild(textPBaru);
        divBaru.appendChild(pBaru);
        const iBaru = document.createElement('i');
        iBaru.setAttribute('class', 'fa-solid fa-trash')
        pBaru.appendChild(iBaru);
        card_body.appendChild(divBaru);
    }
})

btnClear.addEventListener('click', function() {
    input.value = '';
})

card_body.addEventListener('click', function(e) {
    if(e.target.className == 'fa-solid fa-trash') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
})

// Cara Pertama
// for (let i = 0; i < trash.length; i++) {
//     trash[i].addEventListener('click', function(e) {
//         p[i].style.display = 'none';
//         trash[i].parentElement.style.display = 'none'; // parentElement itulah DOM Traversal
//         e.target.parentElement.style.display = 'none';
//     })
// }

// Cara Kedua
// trash.forEach(function(p) {
//     p.addEventListener('click', function(e) {
//         e.target.parentElement.parentElement.style.display = 'none';
//         // e.preventDefault();
//         e.stopPropagation();
//     })
// })



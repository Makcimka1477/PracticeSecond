'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoImg = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),

      movieList = document.querySelector('.promo__interactive-list'),
      movieItem = document.querySelectorAll('.promo__interactive-item'),
      form = document.querySelector('.add'),
      formInput = form.querySelector('.adding__input'),
      conf = form.querySelector('button'),
      check = form.querySelector('input[type="checkbox"]');

// 1
promoImg.forEach(elem => {
    elem.remove();
});

// 2
genre.textContent = 'Драма';
// 3
poster.style.backgroundImage = 'url("img/bg.jpg")';
// 4 && 5
movieDB.movies.sort();
movieList.innerHTML = '';

// 1 and 2
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML +=
    `<li class='promo__interactive-item'>${i + 1} ${film}
        <div class='delete'></div>
    </li>`;
});
let delTrash = document.querySelectorAll('.delete');
const delElement = (e, i) => {
    console.log(e.parentElement);
    e.target.parentElement.remove();
    movieDB.movies.splice(i, 1);

};
delTrash.forEach(elem => {
    elem.addEventListener('click', delElement);
});



form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    movieList.innerHTML +=
    `<li class='promo__interactive-item'>
        ${movieDB.movies.length + 1} ${formInput.value}
        <div class='delete'></div>
    </li>`;
    movieDB.movies.push(formInput.value);
    console.log(movieDB.movies);
    formInput.value = '';
    
    let delTrash = document.querySelectorAll('.delete');
    const delElement = (e, i) => {
        console.log(e.parentElement);
        e.target.parentElement.remove();
        movieDB.movies.splice(i, 1);
        console.log(e.target.parentElement);
    };
              
    
    delTrash.forEach(elem => {
        elem.addEventListener('click', delElement);
    });
});


// 3



// 4
// check.addEventListener('click', (e) => {
//     if (check.checked == true) {
//         console.log('Добавляем любимый фильм');
//     }
// });


/* 1) Реализовать функционал, что после заполнения формы и нажатия 
кнопки "Подтвердить" - новый фильм добавляется в список.
Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */













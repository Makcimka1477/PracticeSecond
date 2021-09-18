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
      filmList = document.querySelectorAll('.promo__interactive-item'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

// 1
promoImg.forEach((elem) => {
    elem.remove();
});
// 2
genre.textContent = 'Драма';
// 3
poster.style.backgroundImage = 'url("img/bg.jpg")';
// 4 && 5
movieList.innerHTML = '';
const movieDBSorted = movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
    movieList.innerHTML += `<li class='promo__interactive-item'>${i + 1}. ${item}</li>
    <div class='delete'></div>`;
});

// function watchedFilms(array) {
//     array.forEach((film, i) => {
//         const newLi = document.createElement('li');
//         const newDel = document.createElement('div');
//         newLi.classList.add('promo__interactive-item');
//         newDel.classList.add('delete');
//         newLi.textContent = `${i + 1}. ${film}`;
//         movieList.append(newLi);
//         newLi.append(newDel);
//     });
// }
// watchedFilms(movieDB.movies);



// const del = document.querySelectorAll('.delete');
// filmList.forEach((elem, i) => {
//     if (i == 0) {
//         elem.innerHTML = `<span></span>${i + 1}. ${movieDBSorted[i]} <div class='delete'></div>`;
//     } else {
//     elem.textContent = `${i + 1}. ${movieDBSorted[i]}`;
//     elem.innerHTML += `<div class='delete'></div>`;
//     }
// });
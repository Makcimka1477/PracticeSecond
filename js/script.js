'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const advBlock = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          bg = document.querySelector('.promo__bg'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          input = addForm.querySelector('input'),
          favorite = addForm.querySelector('[type="checkbox"]'),
          basket = movieList.querySelectorAll('.delete');

    const removeAdv = () => {    
        advBlock.forEach(adv => {
            adv.remove();    
        });
    };

    const changes = () => {
        genre.textContent = 'драма';
        bg.style.backgroundImage = 'url("img/bg.jpg")';
    };

    movieList.innerHTML = '';

    const sortArray = () => {
        movieDB.movies.sort();
    };
    sortArray();

    const createFilm = () => {
        movieDB.movies.forEach((item, i) => {
            movieList.innerHTML += `<li class="promo__interactive-item">
                ${i + 1} ${item}
            <div class="delete"></div>
        </li>`;
        });
        document.querySelectorAll('.delete').forEach((bsk, i) => {
            bsk.addEventListener('click', (e) =>{
                e.target.parentElement.remove();
                movieDB.movies.splice(i, 1);
                movieList.innerHTML = '';
                createFilm();
            });
        });
    };

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = input.value;
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }
            if (favorite.checked) {
                console.log('Добавляете любимый фильм');
            }
            movieDB.movies.push(newFilm);
            movieList.innerHTML = '';
            sortArray();
            createFilm(); 
        }
        favorite.checked = false;
        input.value = '';
    });

    
    removeAdv();
    changes();
    createFilm();
    // delElem();
});
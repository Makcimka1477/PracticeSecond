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

    let promoAdv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          form = document.querySelector('form.add'),
          input = form.querySelector('.adding__input'),
          favorite = document.querySelector('input[type="checkbox"]');

          console.log(favorite);
    form.addEventListener('submit', (event) => {
        
        event.preventDefault();
            
        if (input.value) {
            if (input.value.length > 21) {
                input.value = `${input.value.slice(0, 22)}...`;
            }

        if (favorite.checked) {
            console.log('Любимый фильм');
        }
            movieDB.movies.push(input.value);
            arrSorter(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }
        event.target.reset();
    });
    







    const removeAdv = (adv) => {
        adv.forEach(item => {
            item.remove();
        });
    };
    
    const someChanges = () => {
        genre.textContent = 'Драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const arrSorter = (arr) => {
        arr.sort();
    };

    let createMovieList = (films, parent) => {
        parent.innerHTML = '';   
        arrSorter(films);

        films.forEach((film, i) => {
            parent.innerHTML +=
                `<li class='promo__interactive-item'>${i + 1} ${film}
                    <div class='delete'></div>
                </li>`;
            });


            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(movieDB.movies, movieList);
                });
            });
    };

    removeAdv(promoAdv);
    someChanges();
    createMovieList(movieDB.movies, movieList);
});    
            // Если в форме стоит галочка "Сделать любимым"
            // - в консоль вывести сообщение: 
            // "Добавляем любимый фильм"


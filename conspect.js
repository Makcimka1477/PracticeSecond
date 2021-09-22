

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

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),

        movieList = document.querySelector('.promo__interactive-list'),
        movieItem = document.querySelectorAll('.promo__interactive-item'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

        const deleteAdv = (arr) => {
            arr.forEach(elem => {
                elem.remove();
            });
        };
        deleteAdv(adv);
        const makeChanges = () => {
            // 2
            genre.textContent = 'Драма';
            // 3
            poster.style.backgroundImage = 'url("img/bg.jpg")';
        };
        makeChanges();
        const sortArr = (arr) => {
            arr.sort();
        };

        const delTr = () => {
            document.querySelectorAll('.delete').forEach((btn, i) => {
                btn.addEventListener('click', (e) => {
                    btn.parentElement.remove();
                    movieDB.movies.splice(i, 1);
                    createMovieList(movieDB.movies, movieList);
                });
            });
        };
        
        function createMovieList (films, parent) {
            sortArr(movieDB.movies);
            parent.innerHTML = '';
            films.forEach((film, i) => {
                parent.innerHTML +=
                `<li class='promo__interactive-item'>${i + 1} ${film}
                    <div class='delete'></div>
                </li>`;
            });
            delTr();

        }
        movieList.innerHTML = '';

        createMovieList(movieDB.movies, movieList);


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            if (favorite) {
                console.log('Добавляем любимый фильм');
            }
        }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);     
            createMovieList(movieDB.movies, movieList);
        
        delTr();
        event.target.reset();
                 // евент таргет = эддФорм
        
        }); 
    });

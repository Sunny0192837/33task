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

const adBlocks = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    background = document.querySelector('.promo__bg'),
    input = document.querySelector('.adding__input'),
    checkBox = document.querySelector('[type="checkbox"]'),
    btn = document.querySelector('.add button'),
    movieList = document.querySelector('.promo__interactive-list');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    movieDB.movies.push(input.value);
    if (checkBox.checked) {
        console.log('Добавляем любимый фильм!');
    }



    recreateMovielist();
});

function setDelete() {
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            recreateMovielist();
        });
    });
}

recreateMovielist();

deleteAd(adBlocks);

changeGenre('Драма');

changeBg('/img/bg.jpg');

function changeBg(newBg) {
    background.style.backgroundImage = `url('${newBg}')`;
}

function deleteAd(adImgs) {
    adImgs.forEach(item => {
        item.remove();
    });
}

function changeGenre(newGenre) {
    genre.textContent = (newGenre);
}

function recreateMovielist() {
    movieList.innerHTML = '';
    movieDB.movies.sort();
    movieDB.movies.forEach((item, i) => {
        if (item.length > 21) {
            item = `${item.slice(0, 22)}...`;
        }
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
        `;
    });
    setDelete();
}


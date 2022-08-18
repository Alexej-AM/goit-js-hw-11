import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from "axios";
import './css/common.css';

const refs = {
    formEl: document.querySelector('#search-form'),
    inputEl: document.querySelector('input'),
    buttonSearchEl: document.querySelector('button-search'),
    buttonLoadEl: document.querySelector('.button-load'),
    galleryEl: document.querySelector('.gallery'),
}

refs.buttonLoadEl.classList.add('invisible');

const BASE_URL = "https://pixabay.com/api/";

const key = '29365633-60606ea12614ba8c3cfb381aa';
const nameSearch = refs.inputEl.value;
let currentPage = 1;
let perPage = 40;
const totalPages = 500 / perPage;

// fetch(`${BASE_URL}?key=${key}&q=${nameSearch}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=${perPage}`);

const createMarkup = img => `
  <div class="photo-card">
         <a href="${img.largeImageURL}" class="gallery_link">
          <img class="gallery__image" src="${img.webformatURL}" alt="${img.tags}" width="370px" loading="lazy" />
          </a>
        <div class="info">
              <p class="info-item">
              <b>Likes<br>${img.likes}</b>
              </p>
              <p class="info-item">
              <b>Views<br>${img.views}</b>
              </p>
              <p class="info-item">
              <b>Comments<br>${img.comments}</b>
              </p>
              <p class="info-item">
              <b>Downloads<br>${img.downloads}</b>
              </p>
        </div>
    </div>
`; 


import Books from './books.js';

const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const BookInfo = document.getElementById('booksContainer');
const titreSect1 = document.getElementById('title-sec1');
const addBookButton = document.getElementById('add-book');
let BL = '';
export const getmylibrary = JSON.parse(localStorage.getItem('mesLivres1'));
if (getmylibrary === null) {
  localStorage.mesLivres1 = JSON.stringify([]);
}

export function renderBook() {
  BookInfo.innerHTML = '';
  getmylibrary.forEach((element, index) => {
    const cardBody = document.createElement('tr');
    const title = document.createElement('td');
    title.classList.add('ms-4', 'fs-5');
    const spanelm = document.createElement('span');
    spanelm.classList.add('ms-3');
    spanelm.innerText = `"${element.title}" by ${element.author}`;
    title.appendChild(spanelm);
    cardBody.appendChild(title);
    const deletebtn = document.createElement('td');
    deletebtn.classList.add('d-flex');
    const deleteCard = document.createElement('button');
    deleteCard.classList.add('btn', 'btn-warning', 'fs-5');
    deleteCard.innerText = 'Delete';
    deleteCard.classList.add('mx-auto');
    deleteCard.addEventListener('click', (e) => {
      e.preventDefault();
      BL.deleteBook(index);
    });
    deletebtn.appendChild(deleteCard);
    cardBody.appendChild(deletebtn);
    BookInfo.appendChild(cardBody);
  });

  if (getmylibrary.length === 0) {
    titreSect1.innerHTML = '';
    titreSect1.innerHTML += 'there are no books yet but they will soon appear here';
  } else {
    titreSect1.innerHTML = '';
    titreSect1.innerHTML += 'All awesome books';
  }
}

export default class StorageFun {
  constructor(array) {
    this.array = array;
  }

      updateStorage = () => {
        localStorage.mesLivres1 = JSON.stringify(this.array);
      };

      addBook = () => {
        const newBook = new Books(titleInput.value, authorInput.value);
        this.array.push(newBook);
        this.updateStorage();
        renderBook();
        titleInput.value = '';
        authorInput.value = '';
      };

     deleteBook = (i) => {
       this.array.splice(i, 1);
       this.updateStorage();
       renderBook();
     };
}

BL = new StorageFun(getmylibrary);
addBookButton.addEventListener('click', () => {
  BL.addBook();
});

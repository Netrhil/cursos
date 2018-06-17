import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    //Clase para manipular el form
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
}

//inicializacion de store
const initialState = [
    {
        "title" : "despacito",
    },
    {
        "title" : "One more time",
    },
    {
        "title" : "the same asylum as before",
    },
]

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('playlist');
const dataPlayList = store.getState();

dataPlayList.forEach(item => {
    const template = document.createElement('p');
    template.textContent = item.title;
    $container.appendChild(template);    
});


import { createStore } from 'redux';

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    //Clase para manipular el form
    const data = new FormData($form);
    const title = data.get('title');
   
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title 
        }
    });
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

const reducer = function(state, action) {
    switch (action.type) {
        case 'ADD_SONG':
            return [...state, action.payload];            
        default:
            return state;
    }
    
}

const store = createStore(
    reducer,
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


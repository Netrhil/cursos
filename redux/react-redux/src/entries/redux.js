const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    //Clase para manipular el form
    const data = new FormData($form);
    const title = data.get('title');
    console.log(title);
    
    
}

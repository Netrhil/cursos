function get(URL) {
    //New Promise recibe una funcion
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.send(null);

        xhr.onreadystatechange = function () {
            const DONE = 4
            const OK = 200
            if (this.readyState === DONE) {
                if (this.status === OK) {
                    //Todo OK
                    resolve(JSON.parse(this.responseText))
                } else {
                    //Hubo un error
                    reject(newError(`Se produjo un error al realizar el request ${this.status}`))
                }
            }
        }

   
    })
}

/* Funcion para tratar el error */
function handleError(err){
    console.log(`Request failed: ${err}`)
}

let luke

/*llamada al metodo */
get('http://www.swapi.co/api/people/1/')
    //lamada a funcion normal
    .then(function (response) {
        luke = response
        //promesa
        return get(luke.homeworld)
    })
    /*  Segunda llamada a la funcion 
        el nuevo then viene de la segunda llamda de get */
    .then((homeworld) => {
        luke.homeworld = homeworld
        console.log(`${luke.name} nació en ${luke.homeworld.name}`)
    })
    .catch((err) => handleError(err))
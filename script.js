
function buscar(){
    
    const api = document.querySelector('#texto_buscar').value
    if (api){
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ api
        console.log(url)
        fetch(url)// peticion fetch y te devuelve una promesa
            //.then(respuesta => console.log(respuesta))//promensa
        .then(respuesta => respuesta.json())//promesas la pasamos en formato Json para poderla mostrar y quede resuelta 

        .then(data => {
            console.log(data)
            let los_cocteles = data.drinks
            
            if(data && los_cocteles){


            
                
                los_cocteles.forEach(coctel => {
                console.log(coctel.strDrink)
                const dircard = document.createElement('dircard')
                let contenedor = document.getElementById('container')
                let contenedor_auxiliar=contenedor.innerHTML
                
                var card_coctel = '<div class="col-4">'+  //Hicimos un string de html para pintar los elementos de la api en el html
                '<div class="card text-center">'+
                '<img src="'+coctel.strDrinkThumb+'" class="card-img-top" alt="...">'+
                '<div class="card-body">'+
                '<h5 class="card-title">'+coctel.strDrink+'</h5>'+
                '<p class="card-text">'+coctel.strIngredient1+
                //'<a href="#" class="btn btn-primary">Mostrar</a>'+
                '</div></div></div>'
                contenedor_auxiliar=contenedor_auxiliar +  card_coctel

                    contenedor.innerHTML = contenedor_auxiliar

                    //resultados.appendHtml(card) //para agregar nuevos elementos a un documento existente o para mover elementos de una pagina
                    
                console.log(coctel)
                });
            
             /*console.log(data))*///promesas captura la data
            }else{
                alert("Busqueda no valida")
            }
        }) 
        .catch(err => console.log(err))//capture el catch que si la respuesta algunas de las promesas fallan se lanzan el catch del error 

        }
        else{
            console.log("Busqueda no valida")
        }

        
        console.log(api)
    }


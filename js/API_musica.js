var artista="";

function buscar(){
    var element = document.getElementById("elem");
    element.innerHTML="";

    busart=document.getElementById("art").value;
    console.log("artistId"+artista);
        

    const url = "https://itunes.apple.com/search?term=jack+johnson&limit=25";

    fetch(url+busart)
    .then(function(response){
        return response.json();    
    })

    .then(function(data){
        long=data.results.length;
        console.log("lenght:"+ long);
        console.log(data.results);

        for (i = 0; i < long; i++) {
            var div=crearNodo("div");
            var div2=crearNodo("div");
            var id=crearNodo("p");
            var poster=crearNodo("img");
            var blog=crearNodo("a");
            
            id.innerHTML=" ["+data.results[i].artistName+ "]:";
            poster.src=data.results[i].artworkUrl100;
            blog.innerHTML=" Blog ";
            blog.setAttribute("href",data.results[i].artistViewUrl);
            blog.target="_blanck";
            
            adjuntar(div,poster);
            adjuntar(div,div2)
            adjuntar(div2,id);
            adjuntar(div2,blog);
            adjuntar(element,div); 
        }
    })

    .catch(function(error){
        console.log(error);           
    });

    function crearNodo(elemento){
        return document.createElement(elemento);
    }

    function adjuntar(padre,hijo){
        return padre.appendChild(hijo);
    }    

}

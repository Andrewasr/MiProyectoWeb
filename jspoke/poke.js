var idp=1;
var long=0;

    const url = "https://lauragaguilar.github.io/ejem_json_api/poke.json";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.figures);
            long=data.figures.length;
            console.log("lenght:"+ long);
        
            var res= data.figures.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('pkmn-img');
            imagen.src=res[0].figure;
            var p1=document.getElementById('name');
            p1.innerHTML="<b>Nombre: </b>"+res[0].name;
            var p2=document.getElementById('type');
            p2.innerHTML="<b>Tipo: </b>"+res[0].type;
            var p3=document.getElementById('height');
            p3.innerHTML="<b>Altura: </b>"+res[0].height+"cms.";
            var p4=document.getElementById('weight');
            p4.innerHTML="<b>Peso: </b>"+res[0].weight+"kg.";
            var p5=document.getElementById('des');
            p5.innerHTML="<b>Descripción: </b>"+res[0].des;
        })

        .catch(function(error){
            console.log(error);           
        });

        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }
        
    }    
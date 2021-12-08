document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Select").addEventListener('change', mostrardatos);
});

function mostrardatos(e){
    
    e.preventDefault();
    

    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','Estudiantes.json',true);
    xhttp.send();
    xhttp.onreadystatechange =function () {
        if(this.readyState==4 && this.status==200){
            let dato=JSON.parse(this.responseText);
            switch (e.target.value) {
                case "1":
                    document.getElementById("ci").innerHTML = dato[0].cedula;
                    document.getElementById("nombre").innerHTML = dato[0].nombre;
                    document.getElementById("direc").innerHTML = dato[0].direccion;
                    document.getElementById("telf").innerHTML = dato[0].telefono;
                    document.getElementById("email").innerHTML = dato[0].correo;
                    document.getElementById("curso").innerHTML = dato[0].curso;
                    document.getElementById("paral").innerHTML = dato[0].paralelo;
        
                    break;
                case "2":
                    document.getElementById("ci").innerHTML = dato[1].cedula;
                    document.getElementById("nombre").innerHTML = dato[1].nombre;
                    document.getElementById("direc").innerHTML = dato[1].direccion;
                    document.getElementById("telf").innerHTML = dato[1].telefono;
                    document.getElementById("email").innerHTML = dato[1].correo;
                    document.getElementById("curso").innerHTML = dato[1].curso;
                    document.getElementById("paral").innerHTML = dato[1].paralelo;
        
                    break;
                case "3":
                    document.getElementById("ci").innerHTML = dato[2].cedula;
                    document.getElementById("nombre").innerHTML = dato[2].nombre;
                    document.getElementById("direc").innerHTML = dato[2].direccion;
                    document.getElementById("telf").innerHTML = dato[2].telefono;
                    document.getElementById("email").innerHTML = dato[2].correo;
                    document.getElementById("curso").innerHTML = dato[2].curso;
                    document.getElementById("paral").innerHTML = dato[2].paralelo;
        
                    break;
                case "4":
                    document.getElementById("ci").innerHTML = dato[3].cedula;
                    document.getElementById("nombre").innerHTML = dato[3].nombre;
                    document.getElementById("direc").innerHTML = dato[3].direccion;
                    document.getElementById("telf").innerHTML = dato[3].telefono;
                    document.getElementById("email").innerHTML = dato[3].correo;
                    document.getElementById("curso").innerHTML = dato[3].curso;
                    document.getElementById("paral").innerHTML = dato[3].paralelo;
        
                    break;
                case "5":
                    document.getElementById("ci").innerHTML = dato[4].cedula;
                    document.getElementById("nombre").innerHTML = dato[4].nombre;
                    document.getElementById("direc").innerHTML = dato[4].direccion;
                    document.getElementById("telf").innerHTML = dato[4].telefono;
                    document.getElementById("email").innerHTML = dato[4].correo;
                    document.getElementById("curso").innerHTML = dato[4].curso;
                    document.getElementById("paral").innerHTML = dato[4].paralelo;
        
                    break;
                case "6":
                    document.getElementById("ci").innerHTML = dato[5].cedula;
                    document.getElementById("nombre").innerHTML = dato[5].nombre;
                    document.getElementById("direc").innerHTML = dato[5].direccion;
                    document.getElementById("telf").innerHTML = dato[5].telefono;
                    document.getElementById("email").innerHTML = dato[5].correo;
                    document.getElementById("curso").innerHTML = dato[5].curso;
                    document.getElementById("paral").innerHTML = dato[5].paralelo;
        
                    break;    
                case "7":
                    document.getElementById("ci").innerHTML = dato[6].cedula;
                    document.getElementById("nombre").innerHTML = dato[6].nombre;
                    document.getElementById("direc").innerHTML = dato[6].direccion;
                    document.getElementById("telf").innerHTML = dato[6].telefono;
                    document.getElementById("email").innerHTML = dato[6].correo;
                    document.getElementById("curso").innerHTML = dato[6].curso;
                    document.getElementById("paral").innerHTML = dato[6].paralelo;
        
                    break;    
                case "8":
                    document.getElementById("ci").innerHTML = dato[7].cedula;
                    document.getElementById("nombre").innerHTML = dato[7].nombre;
                    document.getElementById("direc").innerHTML = dato[7].direccion;
                    document.getElementById("telf").innerHTML = dato[7].telefono;
                    document.getElementById("email").innerHTML = dato[7].correo;
                    document.getElementById("curso").innerHTML = dato[7].curso;
                    document.getElementById("paral").innerHTML = dato[7].paralelo;
        
                    break;    
                case "9":
                    document.getElementById("ci").innerHTML = dato[8].cedula;
                    document.getElementById("nombre").innerHTML = dato[8].nombre;
                    document.getElementById("direc").innerHTML = dato[8].direccion;
                    document.getElementById("telf").innerHTML = dato[8].telefono;
                    document.getElementById("email").innerHTML = dato[8].correo;
                    document.getElementById("curso").innerHTML = dato[8].curso;
                    document.getElementById("paral").innerHTML = dato[8].paralelo;
        
                    break;
                case "10":
                    document.getElementById("ci").innerHTML = dato[9].cedula;
                    document.getElementById("nombre").innerHTML = dato[9].nombre;
                    document.getElementById("direc").innerHTML = dato[9].direccion;
                    document.getElementById("telf").innerHTML = dato[9].telefono;
                    document.getElementById("email").innerHTML = dato[9].correo;
                    document.getElementById("curso").innerHTML = dato[9].curso;
                    document.getElementById("paral").innerHTML = dato[9].paralelo;
        
                    break; 
                case "0":
                    document.getElementById("ci").innerHTML = "Seleccione";
                    document.getElementById("nombre").innerHTML = "un";
                    document.getElementById("direc").innerHTML = "estudiante";
                    document.getElementById("telf").innerHTML = "";
                    document.getElementById("email").innerHTML = "";
                    document.getElementById("curso").innerHTML = "";
                    document.getElementById("paral").innerHTML = "";
                    break;
                
            }
        }
    }
}







    

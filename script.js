
//FUNCION PARA AGREGAR PROYECTOS AL ARREGLO projects 

function proyecto(nombre, url, descripcion, lenguaje) {
    return {
        nombre: nombre,
        url_imagen: url,
        descripcion:descripcion,
        lenguaje:lenguaje
    }
}

const skill =(imagen, descripcion, link, disenador, otroUno, otroDos, otroTres)=>{
    return {
        imagen:imagen,
        descripcion:descripcion,
        link:link,
        disenador:disenador,
        otroUno:otroUno,
        otroDos:otroDos,
        otroTres:otroTres
    }
}


let projects = [
    {
        nombre: 'Podcast Webpage',
        url_imagen: "./images/podcast.png",
        descripcion:'',
        lenguaje:''
    },
    {
        nombre: 'GIFOS',
        url_imagen: "./images/gifos.png",
        descripcion:'',
        lenguaje:''
    },
    {
        nombre: 'Costo Patronal',
        url_imagen: "./images/costopatronal.png",
        descripcion:'',
        lenguaje:''
    },
    {
        nombre: 'Calculo Asimilados',
        url_imagen: "./images/asimilados.png",
        descripcion:'',
        lenguaje:''
    },
    {
        nombre: 'SuperApp V2',
        url_imagen: "./images/superappV2.png",
        descripcion:'',
        lenguaje:''
    }
]

let skills = [

]

const cargar = (projects) => {

    let n = 1;
    let arraylength = projects.length;
    console.log(arraylength);
    let nombre = document.querySelector('.proj-Name');
    let imagen = document.querySelector('.proj-img');
    setInterval(()=>{
        
        if (n < arraylength) {
            nombre.innerHTML=projects[n].nombre;
            imagen.src=projects[n].url_imagen;
            n++;        
        } 
        else if(n === arraylength) {
            n=0;
        }

        

    },2000);

    }

    cargar(projects);

    document.addEventListener('click', e => {
        if (e.target.classList[0] === 'fa-solid') {
            let element = e.target.nextElementSibling;
            element.classList.toggle('data-project');

        }

    })

    let showMore = document.getElementById('more');
    let showLess = document.getElementById('less');
    let lastParag = document.getElementById('continue');

    showMore.addEventListener('click', () => {
        showMore.style.display = 'none';
        showLess.style.display = 'flex';
        lastParag.style.display = 'flex';


    })

    showLess.addEventListener('click', () => {
        showMore.style.display = 'flex';
        showLess.style.display = 'none';
        lastParag.style.display = 'none';


    })

    let burger = document.getElementById('burger');
    let menu = document.querySelector('#main-nav');
    let titulo = document.querySelector('#titulo');
    console.log(titulo);

    burger.addEventListener('click', () => {
        
        
        
        let fig = burger.innerHTML;
        console.log(fig);
        if (fig === '☰') {
            burger.innerHTML = 'x';
            titulo.style.display='none';
            menu.style.display='flex';
                
        }
        else {
            burger.innerHTML = '☰';
            titulo.style.display='flex';
            menu.style.display='none';
        
        }


    });



    /*
    cuando de un click en la imagen con clase lang-icons
    verificar su parentNode
    si parentNode es igual a figure
    asignale la clase .figure al parent
    y a su nextSibling cambia el estilo a display flex
    */

    document.addEventListener('click', e => {
        let popUp = e.target.parentNode;
        let caption = e.target.nextElementSibling;
        if (popUp.localName === 'figure') {
            popUp.classList.toggle('figure');
            caption.classList.toggle('figcaption');
        }

    })
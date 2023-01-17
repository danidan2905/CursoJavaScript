(function(){
    // Declaración variables

    var lista = document.getElementById("lista"),
        entradaTexto = document.getElementById("entradaTexto"),
        botonAgregar = document.getElementById("botonAgregar");

    // Funciones

    function agregarTarea(e){
        // Evitamos que el botón recargue la página cada vez que es presionado:
        e.preventDefault();

		var tarea = entradaTexto.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
            entradaTexto.className = "error entradaTexto";
			entradaTexto.placeholder= "Ingresa una tarea válida";
			return false;
        }

        // Agregamos el contenido al enlace
        enlace.appendChild(contenido);
        // Establecemos un atributo href
        enlace.setAttribute("href", "#");
        // Agregamos el enlace a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        // Agregamos la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        // Limpiamos la entrada de texto una vez presionado el botón
        entradaTexto.value = "";

        // Ejecutamos un ciclo para añadir el evento a cada tarea que se cree
        for (var i = 0; i <= lista.children.length - 1; i++){
            lista.children[i].addEventListener("click", eliminarTarea);
        }
    }

    function probarEntrada(){
        entradaTexto.className = "entradaTexto";
        entradaTexto.setAttribute("placeholder", "Agregar tarea")
    };

    function eliminarTarea(){
        // Eliminamos la tarea de la lista
        // EXPLICACIÓN:
        // "this" se refiere al elemento en el que se está trabajando actualmente, es como trabajar sin variables
        // "parentNode" se refiere al elemento padre de "this"
        // (¿Se entiende?)
        this.parentNode.removeChild(this);
        // alert("Eliminando tarea...");
    };

    // Eventos
    // Agregar tarea
    botonAgregar.addEventListener("click", agregarTarea);

    // Comprobar entrada
    entradaTexto.addEventListener("click", probarEntrada);

    // Borrar elementos lista (usando un bucle)
    // Aquí, el bucle se va a ejecutar mientras que i sea menor o igual a la cantidad de elementos hijo (children)
    // de la lista
    for (var i = 0; i <= lista.children.length - 1; i++){
        lista.children[i].addEventListener("click", eliminarTarea);
    }
}())
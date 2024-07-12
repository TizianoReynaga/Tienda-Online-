const navbar =
    `
    <nav class="navbar navbar-expand-lg bg-black">
    <div class="container-fluid ">
        <a class="navbar-brand text-white">Tienda Online</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
             data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
             aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon bg-warning"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="index.html">Inicio</a>
                </li>
                <li class="nav-item">
                                <a class="nav-link active text-white" aria-current="page" href="productos.html" >Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="contacto.html" >Contactanos</a>
                </li>
            </ul>
            <div>
                <button id="ingresar" class="btn btn-outline-warning" type="submit">Ingresar</button>
            </div>

            <div id="user">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item dropdown text-white">
                    <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" class="bi bi-person-circle text-white" viewBox="0 0 16 16">
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                                        </svg> </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item">Cuenta</a></li>
                        <li><a class="dropdown-item">Pedido</a></li>
                    </ul>
                                </li>
                                <div>
                                    <button id="salir" class="btn btn-outline-warning" type="submit">Salir</button>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>` 
            export {navbar} 
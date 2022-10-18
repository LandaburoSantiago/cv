export const htmlEn = `
<h1>INGLES</h1>
<div class="fixed-action-btn" style="bottom: 85px;">
        <div class="label text" id="labelThemeMode">
            
        </div>
        <div class="button" >
            <a id="switch-theme" type="button" onclick="ToggleTheme();" class="btn-floating btn-large text">
                <i class="material-icons">brightness_3</i>
            </a>
        </div>
    </div>
    <div class="fixed-action-btn">
        <div class="label text" id="label">
            <label for="">Descargar CV</label>
        </div>
        <div class="button" >
            <a href="./assets/cv.pdf" target="_blank" class="btn-floating btn-large text">
            <i id="fButton" class="large material-icons">description</i>
            </a>
        </div>
    </div>
    <main class="container" id="main">
        <section class="row skills justify-content-center mt-4">  
            <div class="col-12">
                <p class="text-center text" style="font-family: monospace; font-weight: bold;">Code skills</p>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="js-skill" class="mx-auto skill-image" src="./assets/img/skills/jsLogo.svg" alt=""/>
                <div id="js-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/jsLogo.svg" alt=""><div class="levels high-level"></div><div class="levels high-level"></div><div class="levels high-level"></div> 
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/reactLogo.svg" alt=""><div class="levels middle-level"></div><div class="levels middle-level"></div>
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/nodeLogo.svg" alt=""><div class="levels middle-level"></div><div class="levels middle-level"></div>
                    </div> 
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/ajaxLogo.svg" alt=""><div class="levels low-level"></div>
                    </div>    
                </div>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="python-skill" class="mx-auto skill-image" src="./assets/img/skills/pyLogo.svg" alt=""/>
                <div id="python-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/pyLogo.svg" alt=""><div class="levels middle-level"></div><div class="levels middle-level"></div> 
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/flaskLogo.svg" alt=""><div class="levels low-level"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="php-skill" class="mx-auto skill-image" src="./assets/img/skills/phpLogo.svg" alt=""/>
                <div id="php-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/phpLogo.svg" alt=""><div class="levels low-level"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="git-skill" class="mx-auto skill-image" src="./assets/img/skills/gitLogo.svg" alt=""/>
                <div id="git-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/githubLogo.svg" alt=""><div class="levels high-level"></div><div class="levels high-level"></div><div class="levels high-level"></div>
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/gitlabLogo.svg" alt=""><div class="levels high-level"></div><div class="levels high-level"></div><div class="levels high-level"></div> 
                    </div>    
                </div>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="css-skill" class="mx-auto skill-image" src="./assets/img/skills/cssLogo.svg" alt=""/>
                <div id="css-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/cssLogo.svg" alt=""><div class="levels middle-level"></div><div class="levels middle-level"></div> 
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/bootstrapLogo.svg" alt=""><div class="levels middle-level"></div><div class="levels middle-level"></div> 
                    </div>
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/materializecssLogo.svg" alt=""><div class="levels low-level"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 text-center px-1 px-sm-3">
                <img id="html-skill" class="mx-auto skill-image" src="./assets/img/skills/htmlLogo.svg" alt=""/>
                <div id="html-sub-skills" class="mt-1 sub-skills mx-auto">
                    <div class="d-flex align-items-center my-1">
                        <img src="./assets/img/skills/htmlLogo.svg" alt=""><div class="levels high-level"></div><div class="levels high-level"></div><div class="levels high-level"></div>
                    </div>    
                </div>
            </div>            
        </section>
        <section class="section introduccion">  
            <div class="imagen">
                <img src="./assets/img/1.png" alt="Santiago Landaburo">
            </div>
            <div class="descripcion">
                <p>
                    <span id="firstParagraph">Hola mi nombre es Santiago Landaburo soy Analista en Sistemas de Información y continuo estudiando para la Licenciatura en Sistemas de Información y Desarrollador Jr.</span>
                    <br/>
                    <br/>
                    <span id="secondParagraph">Actualmente estoy trabajando en <a target="_blank" href="https://bombieri.com.ar/" id="">BOMBIERI</a> como desarrollador Javascript donde principalemente realizo tareas de frontend (ReactJS). También realizo tareas de backend (NestJS)</span>
                </p>
            </div>
        </section>
        <hr style="background-color:white"/>
        <section class="section informacion">
            <div class="info-personal">
                <h4>Información Personal</h4>
                <ul>
                    <li><i class="material-icons">today</i> <b>Fecha de nacimiento:</b> 12/11/1998 (23 años)</li>
                    <li><i class="material-icons">place</i> <b>Lugar de nacimiento:</b> Gualeguaychú, Entre Rios</li>
                    <li><i class="material-icons">mail</i> <b>E-mail:</b> santiagomartinlandaburo@gmail.com</li>
                </ul>
            </div>
        </section>
        <hr style="background-color:white"/>
        <section class="section experiencia">
            <div class="experiencia-laboral">
                <h4>Experiencia laboral</h4>
                <ul>
                    <li><b>REBrit SRL</b> Marzo 2021 - Junio 2021 (Desarrollo de sitios web de tipo Fintech utilizando un framework de php creado en la empresa llamado REBrit generator. Mis principales tareas fueron de frontend.)</li>
                    <li><b>Bombieri</b> Junio 2021 - Actualidad (Desarrollador de aplicaciones web con tecnologías Javascript)</li>
                </ul>
            </div>
        </section>
        <hr style="background-color:white"/>
        <section class="section educacion">
            <div class="info-educacion">
                <h4>Educación</h4>
                <ul>
                    <li><i class="material-icons">school</i><b>Secundario: 2011-2017 </b>| Técnico en Computación | EET N° 2 "Pbro José María Colombo"</li>
                    <li><i class="material-icons">book</i><b>Terciario: 2018-2022 </b>| Analista en Sistemas de Información | UADER-FCYT</li>
                    <li><i class="material-icons">book</i><b>Universitario: 2018-Actualidad </b>| Licenciatura en Sistemas de Información | UADER-FCYT</li>
                </ul>
            </div>
        </section>
        <hr style="background-color:white"/>
        <section class="section proyectos" id="section-4"> 
            <div class="info-proyectos">
                <h4>Proyectos: </h4>
                <ul>
                    <li><i class="material-icons">code</i><a href="http://proyecto-fotocopiadoras.herokuapp.com/" target="_blank" class="link"><b>Proyecto fotocopiadoras:</b></a> (Flask, Html, CSS, Javascript, Firebase) <span> App para librerias. Calcula el precio de la copia de un documento .PDF.</span></li>
                    <li><i class="material-icons">code</i><a href="https://landaburosantiago.github.io/SPA-WebPack/" target="_blank" class="link"><b>Web de Péliculas y Series:</b></a> (Node JS, Webpack, HTML, CSS, Bootstrap, API) <span> SPA para la catedra de Programación Avanzada 2020 | UADER FCYT.</span></li>
                    <li><i class="material-icons">code</i><a href="https://friendly-knuth-fbed6b.netlify.app/" target="_blank" class="link"><b>Web de Péliculas y Series:</b></a> (React, Bootstrap) <span> SPA desarrollada en React JS para la catedra de Programación Avanzada 2020 | UADER FCYT</span></li>
                    <li><i class="material-icons">code</i><a href="https://funko-pop-store-frontend.vercel.app/" target="_blank" class="link"><b>FunkoPopStore:</b></a> (React, Nestjs, PostgreSQL, Firebase) <span>Proyecto final para el titulo de Analista en sistemas. Para este proyecto se realizó tanto el diseño del sistema como la implementación. Se trata de un e-commerce de Funko Pops para la ciudad de Concepción del Uruguay. </span></li>
                </ul>
            </div>
        </section>
        <hr style="background-color:white"/>
        <section class="section-redes" >
            <div class="item">  
                <div class="item-git">
                    <a href="https://github.com/LandaburoSantiago" target="_blank">
                        <img src="assets/img/git.png" alt="">
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="item-link">
                    <a href="https://www.linkedin.com/in/santiago-martin-landaburo-322ab71b6/" target="_blank">
                        <img src="assets/img/link.png" alt="">
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="item-mail">
                    <a href="mailto:santiagomartinlandaburo@gmail.com" target="_blank">
                        <img src="assets/img/mail.png" alt="">  
                    </a>
                </div>
            </div>
            <div class="item">
                <div class="item-twitter">
                    <a href="https://twitter.com/slandaburo" target="_blank">
                        <img src="assets/img/tw.png" alt="">  
                    </a>
                </div>
            </div>
        </main>  
    </div>  
    <footer>Con <i class="em em-hearts" aria-role="presentation" aria-label="BLACK HEART SUIT"></i> Santiago Landaburo | <span id="year"></span></footer>
`;

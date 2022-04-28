function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "INICIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "SOBRE MÍ")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PORTFOLIO")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTÁCTAME"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Nancy ", /*#__PURE__*/

    React.createElement("strong", null, "Bautista")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Full stack developer"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "&"), " Graphics designer")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "Mi portfolio"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Contáctame")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "¿Quién soy?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Mi nombre es Nancy Bautista"), /*#__PURE__*/
    React.createElement("p", null, "Soy desarrolladora FullStack developer Jr. y diseñadora de gráfica"), /*#__PURE__*/


    React.createElement("p", null, "Me encanta conectarme con diferentes personas, soy una apasionada de la tecnología y el diseño web. Tengo experiencia trabajando en proyectos bajo metodologías scrum y desarrollo de habilidades que me permiten trabajar colaborativamente.")), /*#__PURE__*/


    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "¿Qué hago?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Front-end"), /*#__PURE__*/
    React.createElement("p", null, "Como front-end developer, generalmente trabajo con Javascript, ya sea de forma individual o con frameworks como ReactJS. También para que la web se vea atractiva uso Sass, CSS y, cuando sea necesario, cualquiera de sus amigos: Bootstrap, Ant design, etc."), /*#__PURE__*/

    React.createElement("p", null, "")), /*#__PURE__*/


    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Back-end"), /*#__PURE__*/
    React.createElement("p", null, "Como desarrolladora back-end trabajo con NodeJS, Express, y bases de datos como lo son MongoDB, Mysql, Firebase y Docker."), /*#__PURE__*/

    React.createElement("p", null, "")), /*#__PURE__*/



    React.createElement("div", { className: "desc" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Diseñadora gráfica"), /*#__PURE__*/
    React.createElement("p", null, "Me especializo en la creación de diseños visuales potentes utilizando ilustraciones digitales, imágenes y tipografía."), /*#__PURE__*/

)))));



};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    html5: 'fab fa-html5',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: repo, target: "_blank", rel: "noopener noreferrer" }, "Link ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" })), /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Repositorio ", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};


/* Trabajo */


const Works = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Experiencia"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
   

    React.createElement("div", { className: "SanAntonio" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Pasteleria San Antonio",
      img: 'https://larepublica.pe/resizer/cO1zn4MCQBI3LsQYH1rt7BgkiTo=/1250x735/top/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/L7FB4WJAMJD5FON52ZBNOVJQOY.png',
      tech: "woocommerce sql",
      repo: "https://www.linkedin.com/company/pasteleria-san-antonio" }, /*#__PURE__*/

    React.createElement("small", null, "Desarrollé con la herramienta de wordpress y bases de datos con sql"), /*#__PURE__*/


    React.createElement("p", null, "Trabajé en las diversas webs de Pastelerías San Antonio usando la herramienta de Woocommerce, manejando la gestion de los productos y pedidos. Además de na gestión con una base de datos de  MySQL.")), /*#__PURE__*/

    ),
    React.createElement("div", { className: "Lidera" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "Lidera Digital",
      img: 'data:image/png;base64,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',
      tech: "woocommerce sql",
      repo: "https://www.linkedin.com/company/lideradigitalperu/",}, /*#__PURE__*/

    React.createElement("small", null, "Desarrollé con la herramienta de wordpress y bases de datos con sql"), /*#__PURE__*/


    React.createElement("p", null, "Fui participe de proyectos de Lidera Digital en el área de backend y frontend.")), /*#__PURE__*/

    )

    ))))
  }


/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Mis Proyectos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Aquí hay una ", /*#__PURE__*/
    React.createElement("u", null, "lista "), "de la mayoría de los proyectos en los que he estado trabajando en los últimos 11 meses para obtener mi certificación Full-Stack Developer. Estos fueron subidos en mi página",
    ' ', /*#__PURE__*/ 
    React.createElement("a", { href: "https://github.com/nangebav?tab=repositories", target: "_blank", rel: "noopener noreferrer" }, "Github"), "")), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
    React.createElement(Project, {
      title: "CRIPTO (CAESAR CIPHER)",
      img: 'https://user-images.githubusercontent.com/77282012/138919721-0f95d11d-b712-4269-8d25-8f6d2c8f9383.png',
      tech: "js html5 css",
      link: "https://nangebav.github.io/LIM014-cipher/src/",
      repo: "https://github.com/nangebav/LIM014-cipher" }, /*#__PURE__*/

    React.createElement("small", null, "Se usó javascript genérico, html5 y css."), /*#__PURE__*/


    React.createElement("p", null, "CRIPTO es una plataforma virtual que permite a nuestros usuarios cifrar y descifrar textos secretos mediante el sistema de encriptado de desplazamiento Caesar, bastante facil de usar.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "Juego Olímpicos de Río de Janeiro",
      img: 'https://user-images.githubusercontent.com/77282012/138922231-d19803e4-f0fc-49a7-ad98-02e71cff96f4.png',
      tech: "js html5 css",
      link: "https://nangebav.github.io/LIM014-data-lovers/src/",
      repo: "https://github.com/nangebav/LIM014-data-lovers" }, /*#__PURE__*/

    React.createElement("small", null, "Se usó javascript genérico, html5 y css."), /*#__PURE__*/


    React.createElement("p", null, "Es una página web que organiza y permite la visualización de todos los atletas que obtuvieron medallas en los Juegos Olímpicos de Rio 2016.")), /*#__PURE__*/




    React.createElement(Project, {
      title: "librería Mdlinks",
      img: 'https://user-images.githubusercontent.com/77282012/138919706-5dea9455-918f-457e-b3b5-e42d272e83a5.png',
      tech: "js node",
      link: "https://github.com/nangebav/LIM014-mdlinks",
      repo: "https://github.com/nangebav/LIM014-mdlinks", /*#__PURE__*/
    }, /*#__PURE__*/

    React.createElement("small", null, "Built using Node, Express, MongoDB, JS + jQuery, CSS + Bootstrap and Pug."), /*#__PURE__*/
    React.createElement("p", null, "Es una librería que se ejecuta como herramienta de una linea de comando de terminal, que lee y analiza archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas"),
    React.createElement("p", null, "Para la instalación se debe colocar el siguiente comando en la terminal:"),/*#__PURE__*/
    React.createElement("h5", null, "npm install -g nangebav/LIM014-mdlinks")), /*#__PURE__*/




    React.createElement(Project, {
      title: "API Burguer-Queen para restaurantes.",
      img: 'https://user-images.githubusercontent.com/77282012/138922508-9a1e3f27-30ae-4a69-827a-ddf0c068378c.png',
      tech: "node",
      link: "https://yagoestevez-issue-tracker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-issue-tracker" }, /*#__PURE__*/

    React.createElement("small", null, "Este proyecto fue realizado con Node, Express, MongoDB y Docker"), /*#__PURE__*/
    React.createElement("p", null, "API para enviar consultas y recibir respuestas de pedidos de comida, mediante el protocolo de HTTP.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Servicio Burguer-Queen para restaurantes.",
      img: 'https://user-images.githubusercontent.com/77282012/138922580-ae270dc8-b37c-4162-9241-52971b142249.png',
      tech: "sass react",
      link: "https://yagoestevez-issue-tracker.glitch.me/",
      repo: "https://github.com/yagoestevez/fcc-issue-tracker" }, /*#__PURE__*/

    React.createElement("small", null, "Este proyecto fue realizado con la librería de React, Node, Express, MongoDB, JS + jQuery, Sass"), /*#__PURE__*/
    React.createElement("p", null, "Servicio web del cual se pueden tomar pedidos, y enviarlos a la cocina para que se preparen de manera ordenada y eficiente, fue desarrollada con la librería React")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Whatsup!",
      img: 'https://user-images.githubusercontent.com/77282012/138919722-b6deca84-45eb-4813-abee-924159fe68fe.png',
      tech: "php",
      link: "https://github.com/nangebav/REG003-wordpress-plugin",
      repo: "https://github.com/nangebav/REG003-wordpress-plugin" }, /*#__PURE__*/

    React.createElement("small", null, "Este proyecto fue realizado con wordpress y php"), /*#__PURE__*/
    React.createElement("p", null, "Plugin de WordPress que habilita un cuadro de chat con contacto directo a través de WhatsApp web o móvil")), /*#__PURE__*/



    React.createElement(Project, {
      title: "Números romanos",
      img: 'https://user-images.githubusercontent.com/77282012/138919725-87c7a800-fa84-453d-a264-810268c01eff.png',
      tech: "js node",
      link: "https://github.com/nangebav/REG003-roman-numerals",
      repo: "https://github.com/nangebav/REG003-roman-numerals" }, /*#__PURE__*/

    React.createElement("small", null, "Este proyecto fue realizado con node"), /*#__PURE__*/
    React.createElement("p", null, "Es una librería que se ejecuta como herramienta de una linea de comando de terminal, que puede traducir números arábicos a romanos y viceversa")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Números romanos: slash command de Slack",
      img: 'https://user-images.githubusercontent.com/77282012/139755708-0b65467b-50a5-4256-b78d-76fc7694b32e.png',
      tech: "js node",
      link: "https://roman-numerals2021.herokuapp.com/",
      repo: "https://github.com/nangebav/REG003-roman-numerals-slack" }, /*#__PURE__*/

    React.createElement("small", null, "Este proyecto fue realizado con express y node"), /*#__PURE__*/
    React.createElement("p", null, " App de Slack que implemente un slash command, que permite a las usuarias convertir números enteros en números romanos y viceversa.")), /*#__PURE__*/



    React.createElement(Project, {
      title: "RUN GAME",
      img: 'https://user-images.githubusercontent.com/77282012/138919727-e35de79a-535d-4fb4-a2f8-cb90134020c2.png',
      tech: "js html css",
      link: "https://nangebav.github.io/game_prototipe/",
      repo: "https://github.com/nangebav/game_prototipe" }, /*#__PURE__*/

    React.createElement("small", null, "En este proyecto se usó javascript, html y css básico"), /*#__PURE__*/
    React.createElement("p", null, "Este es un juego donde se debe correr evitando los obstátulos ")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Red Social MiurArt",
      img: 'https://user-images.githubusercontent.com/77282012/138923629-bcc1ad08-be25-4d94-a4df-00eb8e6315df.png',
      tech: "js html css firebase",
      link: "https://miurart---red-social.web.app/",
      repo: "https://github.com/nangebav/LIM014-social-network" }, /*#__PURE__*/

    React.createElement("small", null, "En este proyecto se usó javascript, html y css, además de como base de datos firebase"), /*#__PURE__*/
    React.createElement("p", null, "MiurArt es una red social enfocada en artistas de murales que permite compartir datos, información, y la interacción entre los miembros de esta comunidad a través de comentarios y reacciones. Los miembros de esta comunidad tienen un perfil en donde pueden poner una breve descripción suya. También hay una sección para publicar lo que crean conveniente relacionado a su trabajo y arte.")), /*#__PURE__*/

    ))));







};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "¿Cómo contactarme? "), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Este es mi correo electrónico para contactarse conmigo")), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("h2", { id: "contact-form", action: "#" }, /*#__PURE__*/
    'nangebav@gmail.com'
    
    ))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), "Nancy Ba\xE9utista"), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/nangebav",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link de perfil de github" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "https://www.linkedin.com/in/nancy-angelica-bautista-vargas-10263a184/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link de perfil de Linkedin" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-linkedin" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Works, null),
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null),
  
      ));
  


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));

//--main header--
class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <div id="loader"></div>

    <div id="scroll-top">
       <a href="#">
         <svg
           class="w-6 h-6"
           fill="none"
           stroke="currentColor"
           <!-- viewBox="0 0 24 24" -->
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M5 11l7-7 7 7M5 19l7-7 7 7"
           ></path>
         </svg>
       </a>
     </div>




    <nav class="navbar navbar-expand-lg bg-dark sticky-top">
    <div class="container-fluid">

      <div class="header">
        <a class="navbar-brand text-white" href="index.html">
          <img class="logo" src="Los Pollos Hermanos_files/194763407-27a595b0-4361-42ca-b661-ba5d69dbb645.png"
            alt="logo">
          <b>Los Pollos Hermanos</b>
        </a>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">

          <span class="navbar-toggler-icon text-white"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link act text-white text-lg" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white text-lg" aria-current="page" href="./menu.html">Menu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white text-lg" href="./aboutus.html">About</a>
          </li>
          <li>
            <a class="nav-link text-white text-lg" href="contact.html">Contact</a>
          </li>
        </ul>
        <form class="d-flex justify-content-center align-items-center" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <div class="btn btn-success">
            <i class="fa fa-search"></i>
          </div>
        </form>
      </div>
    </div>
  </nav>
    `
  }
}

customElements.define('main-header', MainHeader)



// pre-loader function
const loadTimeout = setTimeout(myGreeting, 1750);
function myGreeting() {
    console.log("hello")       
    document.getElementById("loader").style.display = "none"
}


// header top fixed
let mybutton = document.getElementById("scroll-top");
      window.onscroll = function () { scrollFunction() };
      function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      function topFunction() {
        document.documentElement.scrollTop = 0;
      }




AOS.init();

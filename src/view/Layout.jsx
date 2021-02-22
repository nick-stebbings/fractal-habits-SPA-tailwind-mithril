import Footer from "./components/Footer.jsx";
import watermark from "../images/wm2.png";

export default function () {
  return {
    view: (vnode) => (
      // <Nav />
      // <HeroSection />
      // <CardSection />
      // <Footer/>
      <div class="container w- h-full flex flex-col justify-between">
        <nav class="container flex justify-between items-center flex-none h-12">
          <a class="logo-link bg-red-300 block w-8 h-8">
            <svg  id="logo" 
                  class="fill-current h-8 w-8 md:ml-1 md:mt-2 md:fixed" 
                  width="54" height="54" viewBox="0 0 54 54"
                  xmlns="http://www.w3.org/2000/svg">
              <path d="M15.34,45.5C8.26,45.5,2.5,39.74,2.5,32.66s5.76-12.84,12.84-12.84h1.31v8.37l-1.31,0c-2.47,0-4.47,2.01-4.47,4.47  c0,2.47,2.01,4.48,4.47,4.48c2.47,0,4.47-2.01,4.47-4.48l0-1.92v-15.4c0-7.08,5.76-12.84,12.84-12.84c7.08,0,12.84,5.76,12.84,12.84  s-5.76,12.84-12.84,12.84h-1.31v-8.37l1.31,0c2.47,0,4.47-2.01,4.47-4.47c0-2.47-2.01-4.47-4.47-4.47c-2.47,0-4.47,2.01-4.47,4.47  l0,1.92v15.4C28.18,39.74,22.42,45.5,15.34,45.5z"/>
            </svg>
          </a>
          <button class="hamburger md:hidden w-6 h-6 bg-gray-100 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        <main class="container bg-right-bottom bg-no-repeat bg-50% container flex flex-col flex-auto bg-red-200 justify-between"
        style={{ backgroundImage: `url(${watermark})`}}>
          <section class="main-content">
            Some cards.
          </section>
          <div class="container flex-none flex flex-col justify-end h-64 flex-none bg-gradient-to-b from-transparent to-black">
            <span>Here is some other  footer content</span>
            <footer class="text-center bg-transparent">This is some copyright information.</footer>
          </div>
        </main>
      </div>
    ),
  };
}
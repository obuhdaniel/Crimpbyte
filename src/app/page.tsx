
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (

    <>

    <Head>
    <title>CrimpByte - Innovating Technology Solutions</title>
        <meta name="description" content="CrimpByte offers cutting-edge technology solutions to drive your business forward. Discover our innovative services and products." />
        <meta name="keywords" content="CrimpByte, technology solutions, innovative tech, business solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.crimpbyte.com" />
        <meta property="og:title" content="CrimpByte - Innovating Technology Solutions" />
        <meta property="og:description" content="CrimpByte offers cutting-edge technology solutions to drive your business forward. Discover our innovative services and products." />
        <meta property="og:url" content="https://www.crimpbyte.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.crimpbyte.com/heroimage.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      
    </Head>
    <main>
       <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">crimp<span className="text-orange-400">BYTE</span></div>
          <div>
            <a href="#about" className="text-gray-300 hover:text-white mx-2">About Us</a>
            <a href="#solutions" className="text-gray-300 hover:text-white mx-2">Solutions</a>
            <a href="#get-started" className="text-gray-300 hover:text-white mx-2">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 p-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to crimp<span className="text-orange-400">BYTE</span> </h1>
            <p className="text-gray-700 mb-8 ">
              We provide innovative solutions to help your business grow. Join us and discover the
              future of technology.
            </p>
            <a href="#get-started" className="bg-orange-400 text-white px-6 py-3 rounded">Get Started</a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero2.png"
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-gray-700 mb-8 px-5 text-xl">
            At crimpByte, we are dedicated to providing the best tech solutions for your business.
            Our team of experts works tirelessly to stay ahead of the curve and deliver top-notch
            services.
          </p>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
          <div className="flex justify-center space-x-8">
            <div>
              <h3 className="text-2xl font-bold">50+</h3>
              <p className="text-gray-700">Solutions Discovered</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">1000+</h3>
              <p className="text-gray-700">Companies Satisfied</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">50000+</h3>
              <p className="text-gray-700">Satisfied Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="py-20 bg-orange-400 text-black text-center">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="mb-8">
            Join us today and take the first step towards a brighter future with TechCompany.
          </p>
          <a href="#" className="bg-black text-orange-400 px-6 py-3 rounded ">Get Started</a>
        </div>
      </section>
      

      {/* Footer */}
        <footer className="text-gray-800 w-4/5 mx-auto inter md:pt-24">
          <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="flex-grow flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-900 text-base mb-3">
                  About
                </h2>
                <nav className="list-none mb-10 flex flex-col text-sm space-y-3 font-normal">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Company News
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Roadmap
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-900 text-base mb-3">
                  Company
                </h2>
                <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Company News
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Meet the Team
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Press Releases
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Roadmap
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-900 text-base mb-3">
                  Contact
                </h2>
                <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Get in Touch
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Feature Requests
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                      Roadmap
                    </a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="font-medium text-gray-900 text-base mb-3">
                  Socials
                </h2>
                <nav className="list-none mb-10 flex flex-col space-y-3 text-sm font-normal items-center">
                  <ul className="list-none items-center flex flex-col  gap-5 lg:flex-row ">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"><path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 32 32"><path fillRule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"> <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50"><path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path></svg>
                    </a>
                  </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
        </footer>

    </div>
    </main>
    </>
  );
}

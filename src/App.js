import React from 'react';

const LawyerZone = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-green-500 text-white py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">LawyerZone</h1>
          <div>
            <button className="bg-white text-green-500 rounded-md px-4 py-2 mx-2">Log in</button>
            <button className="bg-green-700 text-white rounded-md px-4 py-2 mx-2">Sign up</button>
          </div>
        </nav>
      </header>
      <div className="container mx-auto flex justify-center pt-12">
        <form className="w-full max-w-xl">
          <div className="flex items-center border-b border-gray-600 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search by location, expertise, name, etc."
              aria-label="Full name"
            />
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-md p-4">
          <img
            className="object-cover w-full h-48 rounded-md"
            src="https://source.unsplash.com/random"
            alt="Featured Lawyer"
          />
          <h2 className="text-xl font-bold mt-2 mb-1">Jennifer Smith</h2>
          <p className="text-gray-700 mb-2">Criminal Defense Lawyer</p>
          <p className="text-gray-600 text-sm mb-4">San Francisco, CA</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full">
            Book
          </button>
        </div>
        <!-- Repeat the above featured lawyer card 2 more times -->
      </div>
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto my-4">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <img
                className="object-cover w-full h-48 rounded-md"
                src="https://source.unsplash.com/random"
                alt="Testimonial"
              />
              <p className="text-lg font-bold mt-2 mb-1">John Doe</p>
              <p className="text-gray-400 mb-4">Personal Injury Lawyer</p>
              <p className="text-gray-400 text-sm mb-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <!-- Repeat the above testimonial card 2 more times -->
          </div>
        </div>
      </div>
      <div className="container mx-auto my-12">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <img
              className="object-cover w-full h-64 rounded-md"
              src="https://source.unsplash.com/random"
              alt="Featured Lawyer"
            />
            <h2 className="text-xl font-bold mt-2 mb-1">Jennifer Smith</h2>
            <p className="text-gray-700 mb-2">Criminal Defense Lawyer</p>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.707 7.293a.999.999 0 00-1.414-1.414L9 8.586 7.707 7.293a.999.999 0 00-1.414 1.414L7.586 10l-1.293 1.293a.999.999 0 101.414 1.414L9 11.414l1.293 1.293a.999.999 0 101.414-1.414L10.414 10l1.293-1.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-green-500 font-bold">{`5.0 (5)`}</p>
            </div>
            <p className="text-gray-600 text-sm mb-4">San Francisco, CA</p>
            <div className="flex items-center mb-4">
              <p className="text-gray-400 text-sm mr-2">Fee:</p>
              <p className="font-bold">$250/hour</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-400 text-sm mr-2">Availability:</p>
              <p className="font-bold">Available</p>
            </div>
            <div className="flex items-center mb-4">
              <p className="text-gray-400 text-sm mr-2">Expertise:</p>
              <div className="flex flex-wrap">
                <span className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full text-sm mr-2 mb-2">Criminal Defense</span>
                <span className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full text-sm mr-2 mb-2">Litigation</span>
                <span className="bg-gray-300 text-gray-700 py-1 px-2 rounded-full text-sm mr-2 mb-2">Contracts</span>
              </div>
            </div>
            <div className="flex mb-4">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                Book
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full">
                Contact
              </button>
            </div>
          </div>
          <!-- Repeat the above lawyer profile card 2 more times -->
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-2">LawyerZone</h2>
            <p className="text-gray-400 text-sm mb-4">
              Find the perfect lawyer for your legal needs
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms and Conditions
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Directory</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Experts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Locations
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Information</h3>
            <ul className="list-none">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  How it Works
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-white text-sm">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LawyerZone;

import React from 'react';

const HomePage = () => {
  const featuredLawyers = [
    {
      id: 1,
      name: 'John Doe',
      location: 'Los Angeles, CA',
      expertise: ['Criminal Law', 'Family Law'],
      rating: 4.8,
      fee: '$200/hour',
      availability: 'Available now',
      image: 'https://source.unsplash.com/random/400x400',
    },
    {
      id: 2,
      name: 'Jane Smith',
      location: 'New York, NY',
      expertise: ['Personal Injury', 'Immigration Law'],
      rating: 4.9,
      fee: '$250/hour',
      availability: 'Available in 2 days',
      image: 'https://source.unsplash.com/random/401x400',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      location: 'Chicago, IL',
      expertise: ['Bankruptcy Law', 'Real Estate Law'],
      rating: 4.7,
      fee: '$180/hour',
      availability: 'Available in 5 days',
      image: 'https://source.unsplash.com/random/402x400',
    },
    {
      id: 4,
      name: 'Karen Williams',
      location: 'Miami, FL',
      expertise: ['Business Law', 'Employment Law'],
      rating: 4.6,
      fee: '$220/hour',
      availability: 'Available in 7 days',
      image: 'https://source.unsplash.com/random/403x400',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      title: 'CEO, ABC Company',
      image: 'https://source.unsplash.com/random/100x100',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo eu urna ultricies, sit amet hendrerit neque sollicitudin. Nullam nec ex vel nulla pharetra aliquam.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      title: 'Lawyer',
      image: 'https://source.unsplash.com/random/101x100',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo eu urna ultricies, sit amet hendrerit neque sollicitudin. Nullam nec ex vel nulla pharetra aliquam.',
    },
    {
      id: 3,
      name: 'Mike Wilson',
      title: 'Entrepreneur',
      image: 'https://source.unsplash.com/random/102x100',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo eu urna ultricies, sit amet hendrerit neque sollicitudin. Nullam nec ex vel nulla pharetra aliquam.',
    },
    {
      id: 4,
      name: 'Karen Johnson',
      title: 'Manager',
      image: 'https://source.unsplash.com/random/103x100',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit justo eu urna ultricies, sit amet hendrerit neque sollicitudin. Nullam nec ex vel nulla pharetra aliquam.',
    },
  ];

  return (
    <div className="bg-gray-100">
      <header className="px-4 py-3 bg-green-700 shadow-md">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-lg uppercase">Lawyerzone</h1>
          <div>
            <button className="px-4 py-2 bg-white text-green-700 rounded-md mr-4 hover:bg-gray-200 transition duration-300 ease-in-out">
              Login
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="px-4 py-6">
          <div className="max-w-3xl mx-auto">
            <form>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Expertise"
                    className="w-full p-2 border border-gray-400 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-2 border border-gray-400 rounded-md"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Fee"
                    className="w-full p-2 border border-gray-400 rounded-md"
                  />
                </div>
                <div className="w-1/2">
                  <select className="w-full p-2 border border-gray-400 rounded-md">
                    <option value="featured">Featured Lawyers</option>
                    <option value="all">All Lawyers</option>
                  </select>
                </div>
              </div>
              <div className="text-right">
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="px-4 py-6 bg-gray-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Featured Lawyers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredLawyers.map((lawyer) => (
                <div key={lawyer.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{lawyer.name}</h3>
                      <p className="text-gray-500">{lawyer.location}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {lawyer.expertise.map((expertise) => (
                      <span
                        key={expertise}
                        className="bg-green-500 text-white text-xs px-2 py-1 rounded-md mr-2"
                      >
                        {expertise}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 11l7-7 7 7M5 19l7-7 7 7"
                      />
                    </svg>
                    <p className="text-yellow-400">{lawyer.rating}</p>
                    <p>{lawyer.fee}</p>
                    <p className="text-green-500">{lawyer.availability}</p>
                  </div>
                  <button className="w-full rounded-md py-2 bg-green-500 text-white hover:bg-green-600">
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-4 py-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 mb-4">{testimonial.testimonial}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="px-4 py-6 bg-gray-700 text-white">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <a href="/" className="font-bold text-lg uppercase">
                Lawyerzone
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Terms and Conditions
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Terms of Service
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Privacy Policy
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Experts Directory
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Locations
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                About Us
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                How it Works
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                FAQ
              </a>
              <a href="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                Contact Us
              </a>
            </div>
          </nav>
          <div className="flex items-center justify-between">
            <p className="text-gray-400">© 2023 Lawyerzone. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.73 3.99999C3.40006 5.32999 3.40006 7.47999 4.73 8.80999L9.59 13.67C10.92 14.9999 13.08 14.9999 14.41 13.67L19.27 8.80999C20.6 7.47999 20.6 5.32999 19.27 3.99999L14.41 8.85999C13.89 9.37999 13.12 9.37999 12.6 8.85999L10.5 6.75999C9.98 6.23999 9.22 6.23999 8.7 6.75999L5.59 9.85999C5.07 10.38 4.3 10.38 3.78 9.85999L3.78 9.85999C3.26 9.33999 3.26 8.56999 3.78 8.04999L6.88 4.93999C7.4 4.40999 8.16 4.40999 8.68 4.93999L10.78 7.03999"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-400 hover:text-white transition duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 12H4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
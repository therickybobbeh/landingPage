import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 md:py-24 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Full-Stack Developer
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-80">
                Passionate about creating elegant solutions to complex problems. Specializing in web development, 
                cloud architecture, and API design.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/resume" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  View Resume
                </Link>
                <Link href="#contact" className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-6 py-3 rounded-md font-medium transition-colors">
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">Profile Photo</span>
                </div>
                {/* Uncomment when you have an actual image */}
                {/* <Image 
                  src="/profile.jpg" 
                  alt="Developer Profile" 
                  fill 
                  style={{objectFit: 'cover'}} 
                /> */}
              </div>
            </div>
          </div>
        </section>
        
        {/* GitHub Projects Section */}
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured GitHub Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will be dynamically loaded here */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project Title</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Brief description of the project and the technologies used.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Node.js</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end">
                  <Link href="https://github.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </Link>
                </div>
              </div>
              
              {/* Placeholder projects */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Another Project</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Description of another interesting project in your portfolio.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">GraphQL</span>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 flex justify-end">
                  <Link href="https://github.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="https://github.com" className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 font-medium" target="_blank" rel="noopener noreferrer">
                See all projects on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section - Now using our ContactForm component */}
        <ContactForm />
      </div>
      
      <Footer />
    </main>
  );
}
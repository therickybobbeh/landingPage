'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Dynamically import the PDF viewer component with no SSR
const PDFViewer = dynamic(
  () => import('react-pdf').then((mod) => mod.Document),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-[80vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
      </div>
    )
  }
);

const PDFPage = dynamic(
  () => import('react-pdf').then((mod) => mod.Page),
  { ssr: false }
);

// Make sure pdfjs worker is properly set up
const PDFJS_OPTIONS = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isClient, setIsClient] = useState(false);

  // This ensures we only render the PDF viewer on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1)
        ? newPageNumber
        : prevPageNumber;
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  // URL to your resume PDF file
  const resumePdfUrl = "/sample-resume.pdf"; // Update with actual path

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto max-w-5xl px-4 py-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">My Resume</h1>
        
        {isClient && (
          <div className="bg-white dark:bg-gray-800 p-4 md:p-8 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <a 
                href={resumePdfUrl}
                download
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Download PDF
              </a>
            </div>

            <div className="flex justify-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <PDFViewer
                file={resumePdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                options={PDFJS_OPTIONS}
                className="max-w-full"
              >
                <PDFPage 
                  pageNumber={pageNumber} 
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={1.5}
                />
              </PDFViewer>
            </div>
            
            {numPages && (
              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      
      <Footer />
    </main>
  );
}
import React, {useState} from 'react'
import Home from './home';
import Project from './project';
import ContactMe from './contactMe';
import Resume from './resume';
import Navigation from './navigation';
import Footer from './footer';
import Header from './header';
export default function ContentContainer () {
    const [currentPage, setCurrentPage] = useState('Home');

const renderPage = () => {
    if (currentPage === 'Home') {
        return <Home />;
     }
     if (currentPage === 'Portfolio') {
        return <Project />;
     }
     if (currentPage === 'ContactMe') {
        return <ContactMe />;
     }
     if (currentPage === 'Resume') {
        return <Resume />;
     }
     return <Home />
    };
     const handlePageChange = (page) => setCurrentPage(page);

     return (
        <div>
            <Header />
          {/* We are passing the currentPage from state and the function to update it */}
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          {/* Here we are calling the renderPage method which will return a component  */}
          {renderPage()}
          <Footer />
        </div>
      );
}


import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { ComputersCanvas } from "./components/canvas";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Hero Section */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        {/* Computer Model Section */}
        <ComputersCanvas />
        
        {/* Content Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        
        {/* Contact & Footer */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

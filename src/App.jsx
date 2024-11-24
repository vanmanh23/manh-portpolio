import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    // <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <div className="z-50">
          <Navbar />
          </div>
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
          <Works isopen={false}/>
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    // </BrowserRouter>
  );
}

export default App;

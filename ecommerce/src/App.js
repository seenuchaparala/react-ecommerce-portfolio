
import './App.css';
import Navbar from './navbar/Navbar';
import Slideshow from './Slideshow/Slideshow';
import Productcard from './Productscard/Productcard';

function App() {
  return (
    
    <div className='flex flex-col justify-center'>
      <Navbar />
      <div className='my-0 mx-auto'>
        <Slideshow />
        <div className='grid md:grid-cols-4 gap-8 my-5 mx-0 max-w-7xl'>
        <Productcard />
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
      </div>
    </div>
  );
}

export default App;

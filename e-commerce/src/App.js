
import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
     <div><HomePage/></div>
     <Footer/>
    </div>
  );
}

export default App;

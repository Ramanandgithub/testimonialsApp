// import logo from './logo.svg';
import './App.css';
import { data } from './data';
import Testinomials from './component/Testinomials';


function App() {
  return (
    <div className="App">

      <div>
        <h2 className='heading'>
        Testimonials
          <div className='underline' ></div>
        </h2>
        <Testinomials data = {data} />
      </div>
      
    </div>
  );
}

export default App;

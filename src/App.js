import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widget from "./Components/Widget"
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [ { user } , dispatch] = useStateValue();

  return (
    <div className="app">
    
      {!user ? (<Login />):(
        <>  
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
   
 
    </>
      )
      }
       </div>
  );
}

export default App;

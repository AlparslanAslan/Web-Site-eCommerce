import data from './data'
import './App.css';
import HomeScreen from './Screens/HomeScreen'
import ProductScreen from './Screens/ProductScreen'
import LoginScreen from './Screens/LoginScreen'
import PersonScreen from './Screens/PersonScreen'
import Hakkımızda from './Screens/Hakkımızda'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Üreticilerimiz from './Screens/Üreticilerimiz';
import SignUp from './Screens/SignUp';
import Profil from './Screens/Profil';
import İletişim from './Screens/İletişim';
import İnsanKaynakları from './Screens/İnsanKaynakları';


function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div class="grid-container">
    <header class="header">
      <div class="brand">
       <button onClick={openMenu}>
          &#9776;
        </button>
       <Link to='/' className="maşa">maşa</Link> 
       
        
      </div>
      <div>
      <img className="logo" src="/images/logo.png"  />
      </div>
      <div class="header-links">
      
        <Link to='/Sepet' className="maşa">	&#128722;</Link>
        <Link to='/Login' className="maşa">Giriş</Link>
        <Link to='/SignUp' className="maşa">Kayıt ol</Link>
      </div>
    </header>
    <aside class="sidebar">
      <h3>Menü</h3>
      <button class="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul >
        <li class="linkler">
        <Link to='/Hakkımızda' className="hakkımızda" onClick={closeMenu}>Hakkımızda</Link>
        </li>

        <li class="linkler">
        <Link to='/İletişim' className="hakkımızda" onClick={closeMenu}>İletişim</Link>
        </li>

        <li class="linkler">
        <Link to='/Üreticilerimiz' className="hakkımızda" onClick={closeMenu}>Üreticilerimiz</Link>
        </li>

        <li class="linkler">
        <Link to='/İnsanKaynakları' className="hakkımızda" onClick={closeMenu}>İnsan Kaynakları</Link>
        </li>

      </ul>
    </aside>
    <main className="main">
    
      <div class="content">
        <Route path = '/product/:id' component = {ProductScreen}/>
        <Route path="/" exact={true} component={HomeScreen}/>
        <Route path="/Login"  component={LoginScreen}/>
        <Route path="/üreticiler"  component={PersonScreen}/>
        <Route path="/Hakkımızda"  component={Hakkımızda}/>
        <Route path="/Üreticilerimiz"  component={Üreticilerimiz}/>
        <Route path="/SignUp"  component={SignUp}/>
        <Route path="/Profil"  component={Profil}/>
        <Route path="/İletişim"  component={İletişim}/>
        <Route path="/İnsanKaynakları"  component={İnsanKaynakları}/>
      </div>

    </main>
    <footer class="footer">
      Tüm Hakları Saklıdır
    </footer>
  </div>
  </BrowserRouter>
   
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Desktop from './components/Desktop/Desktop';
import Mobile from './components/mobile/Mobile';
import IntroText from './components/IntroText/IntroText';
import Logo from './components/logo/Logo';
import SocialMedia from './components/SocialMediaLogos/SocialMedia';

function App() {
  
  return (
    <div className="App">
      <div className='container'>
        <div className='logo-component'>
          <Logo />
        </div>
        <div className='desktop-component'>
          <Desktop />
        </div>
        <div className='mobile-component'>
          <Mobile />
        </div>
        <div className='text-component'>
          <IntroText />
        </div>
        <div className='socialmedia-component'>
          <SocialMedia/>
        </div>
      </div>
    </div>
  );
}

export default App;

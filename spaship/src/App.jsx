import logo from './logo.svg';
import './App.css';
import photo from './image/image-1.jpg'

function App() {
  return (
    <div className="card">
    <img 
      src={photo}
      alt="Spaceship" 
      className="card-image" 
    />
    <div className="card-content">
      
      <h1 className="header-small">Scroll Linked Animation</h1>
      <h2 className="header-large">
        Slide Through Unlimited Dimensions With CSS Scroll Timelines
      </h2>
      <p className="text-main">
        The creator of CSS has said he originally envisaged CSS as the main web technology 
        to control behavior on web pages, with scripting as a fallback when things weren’t 
        possible declaratively in CSS. The rationale for a CSS-first approach was…
      </p>
      <p className="text-date">Sep 27, 2024</p>
    </div>
    
  </div>
);
};

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app default-font">

      <div className="header-block">
        <img className="image__header-git-hub-logo" src={process.env.PUBLIC_URL + '/images/github-mark-white-black-background.png'} alt="github logo"/>
        <a className="default-font a__github-reference" href="https://github.com/KoTeuKaSeeker">github.com/KoTeuKaSeeker</a>
      </div>

      <div className="content">
        <div className="center-block">
          <h1 className="default-font font_size-30px">
            Difining a natural disaster
          </h1>

          <textarea className="default-font textarea-style textarea-style__prompt-textarea" placeholder="Enter a prompt...">

          </textarea>

          <button className="default-font button_style button-style__define-button">
            to define
          </button>

          <div className="h1__disaster_text">
            Disaster
          </div>

          <p className="default-font">
            This text is 90% likely to be about a natural disaster
          </p>
      </div>
      </div>

    </div>
  );
}

export default App;
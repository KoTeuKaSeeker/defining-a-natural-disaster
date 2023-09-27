import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app default-font">
      <div className="container container__content">
        <div className="container container__header">
          <div className="side-block">
            <div className="container container__github-logo-container">
              <div className="scince-gradient-circle scince-gradient-circle__github-icon"></div>
              <div className="scince-gradient-circle scince-gradient-circle__github-icon scince-gradient-circle_blured"></div>
              <img class="circle-icon circle-icon__github-icon" src="images/github-mark-white.png" alt="Link to github"/>
              </div>
          </div>

          <div className="container container__header-text">
            <div className="container container__header-name-container">
              <p className="background-text background-text__header-text header-text_blue-purpure-gradiented">Sentiment analysis</p>
              <p className="background-text background-text__blured-header-text header-text_blured header-text_blue-purpure-gradiented">Sentiment analysis</p>
            </div>
          </div>

          <div className="container">
          </div>
        </div>

        <div className="container container__prompt-input-container">
          <div class="container container__prompt-field">
            <div className="scince-gradient-circle scince-gradient-circle__prompt-field"></div>
            <div className="scince-gradient-circle scince-gradient-circle__prompt-field scince-gradient-circle_blured"></div>
            <textarea className="textarea default-font textarea__prompt-field"></textarea>
          </div>
        </div>

        <div className="container">

        </div>
      </div>


    </div>
  );
}

export default App;
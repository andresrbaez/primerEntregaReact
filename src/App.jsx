// import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
// import quotes from './quotes.json'

const colors = ["#5539A5", "#322F20", "#6A5837", "#988F2A", "#ffc75f", "#C28E70", "#90905C", "#4b4453", "#b0a8b9", "#c34a36"]

function App() {

  /* --- Generé mucho comentario ya que había realizado el ejercicio en este mismo espacio, preferí no borrarlo para guiarme más adelante --- */

  // const random = Math.floor(Math.random() * quotes.length);
  // const [ index, setIndex ] = useState(random);

  // const changeQuote = () => {
  // const random = Math.floor(Math.random() * quotes.length);
  //   setIndex(random)
  // }

  // const randomColorIndex = Math.floor(Math.random() * colors.length);

  // const color = colors[randomColorIndex]

  // document.body.style = `background: ${color}`;

  //className="App" style={{ color: color }}

  return (
    <>
      <div>
        <QuoteBox/>

      </div>
      {/* <div className="App" style={{color: color}}>
        <div className="container">
          <div className="card">
            <div className="quote-autor">
              <div className="quote">
                <p>
                  {quotes[index].quote}
                </p>
              </div>
              <div className="autor">
                <p>
                  {quotes[index].author}
                </p>
              </div>
              <div className="btn-cambio">
              <button style={{backgroundColor: color}} onClick={changeQuote}><i class="fa-solid fa-shuffle"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default App

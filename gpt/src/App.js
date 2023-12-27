import "./App.css";
import axios from "axios";
import { useState } from "react";
import ai from './assets/ai.png'

function App(){
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/chat", { prompt })
      .then((res) => {
        setResponse(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <div className='App'>
      <div className='gradient__bg'>
        <div className='gpt3__header section__padding' id='home'>
          <div className='gpt3__header-content'>
            <h1 className='gradient__text'>Ask Me Something Interesting</h1>
            <form className='gpt3__header-content__input' onSubmit={handleSubmit}>
              <input 
                type='text'
                placeholder='Your Email Address'
                name="name"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)} 
              />
              <button type='submit'>Generate</button>
            </form>
            <div className='gpt3__header-content'>
              <p>{ response }</p>
            </div>
          </div>
          <div className='gpt3__header-image'>
            <img src={ai} alt='ai'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;
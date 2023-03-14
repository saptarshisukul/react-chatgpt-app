import {Configuration,OpenAIApi} from "openai";
import './App.css'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './MockData/options'
import Translation from './components/Translation'
import { useState } from 'react'
function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });

  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const[input, setInput] = useState("");
  const[result, setResult] = useState("");
 
 const selectOption = (option)=>{
  setOption(option);

 }

  const checkStuff=async()=>{
      
      let object = {...option , prompt : input}
      const response = await openai.createCompletion(object);
      // console.log(response);
      setResult(response.data.choices[0].text);
  }


  //console.log(input);
  
  return (
    <div className="App">
      
      
      {Object.values(option).length === 0 ?<OptionSelection items = {arrayItems} options = {selectOption}/>:
       <Translation checkStuff={checkStuff} setInput={setInput} result={result}/>}
    </div>
  )
}

export default App

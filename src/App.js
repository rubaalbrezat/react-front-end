import axios from 'axios';
import {useState} from 'react';
import './App.css';
import Person from './components/Person';

function App() {

  const [name, setName]=useState('Your Name');
  const [age, setAge]=useState('Your age after 5 years');
  const [gender, setGender]=useState('Your gender');

async function handleSubmit(e) {
  e.preventDefault();
  const url = `${process.env.REACT_APP_LINK}/person`;
  const obj = {age : e.target.a.value};
  let response = await axios.post(url,obj);
  console.log(response.data);
  let newAge = response.data;
  setName(e.target.n.value);
  setGender(e.target.g.value);
  setAge(newAge);
}

  return (
    <div >
      <Person name={name} age={age} gender={gender} func={handleSubmit}/>
    </div>
  );
}

export default App;

import './App.css';

const names = ["Jessie", "Jean", "Sonimac", "James"];
const nameList = names.map((item)=> <li>{item}</li>);
const greetings = <h1>Hey There!</h1>;

const vehicles = ["Mustang","Van", "Bike"]
let types = vehicles.map((machine)=><li>{machine}</li>);

// Numbers Array
// Map eachother and Map combines

let numberGroup1 = [1,2,3,4,5,6,7,8,9,0,21,3,122,312,12];
let group1 = numberGroup1.map((number)=><li>{number}</li>);

let numberGroup2 = [1,2,3,4,5,6,7,8,9,0,21,3,122,312,12];
let group2 = numberGroup2.map((number)=><li>{number}</li>);

let combines2Numbs = [...numberGroup1, ...numberGroup2];
let combinedRes = combines2Numbs.map((numbers)=><li>{numbers}</li>);
let [first, sec, ...rest] = numberGroup1;

const fruit = {
  name: "Apple",
  color: "Green"
}

function App() {
  return (
    <div className="App">
      <div>
        {fruit.name} {fruit.color}
      </div>
      {greetings}
      {first}<br/>
      {sec}<br/>
      {rest}
      <ol>
        {nameList}
      </ol>
      <hr/>
      <ol>
        {types}
      </ol>
      <hr/>
      <ul>
        <h3>Group 1</h3>
        {group1}
      </ul>
      <ol>
        <h3>Group 2</h3>
        {group2}
      </ol>

      <ul>
        <h3>Merge</h3>
        {combinedRes}
      </ul>

    </div>
  );
}

export default App;

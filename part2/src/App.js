import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addName = (event) => {
    event.preventDefault();

    //if name is empty do not add to array
    if(newName === '' || newNumber === ''){
      alert('Data neds to be filled out')
      return;
    }

    //if name is already in array then do not add to array
    const exists = persons.some((person) => {
      if(person.name === newName){
        alert(`${newName} is already added to phonebook`);
        return true;
      }
      return false;
    })

    if(exists){
      return;
    }


    const newPerson = {
      name: newName,
      number: newNumber
    }

    const copy = [...persons];



    copy.push(newPerson);

    console.log(copy)

    setPersons(copy);
    setNewName('')
    setNewNumber('')
  }

  const nameChange = (event) =>{
    setNewName(event.target.value)
  }

  const numberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const filterChange = (event) =>{
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Input text="filter shown with" value={filter} onChange={filterChange} />


      <h2>add a new</h2>
      <form onSubmit={addName}>
        <Input text="name:" value={newName} onChange={nameChange} />
        <Input text="number:" value={newNumber} onChange={numberChange} />

        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}


const Input = (props) => {
  const text = props.text;
  const value = props.value;
  const filter_val = props.filter;
  const onChange = props.onChange;

  return(
    <div>
      {text} <input value={value} onChange={onChange}/>
    </div>
  )
}

const Persons = (props) => {
  const persons = props.persons;

  const personsToShow = persons.filter((person) => 
    person.name.includes(filter_val)
  )

  return(
    <div>
      {personsToShow.map((person, i) =>
        <p key={i}>{person.name} {person.number}</p>
      )}
    </div>
  )
}


export default App
import React, { useState } from 'react'

const App = () => {
  const anecdote_obj = [
    {
      anecdote:'If it hurts, do it more often',
      votes:0
      
    },
    {
      anecdote:'Adding manpower to a late software project makes it later!',
      votes:0
      
    },
    {
      anecdote:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      votes:0
      
    },
    {
      anecdote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      votes:0
      
    },
    {
      anecdote:'Premature optimization is the root of all evil.',
      votes:0
      
    },
    {
      anecdote:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      votes:0
      
    },
    {
      anecdote:'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
      votes:0
      
    }
  ]
   
  const [selected, setSelected] = useState(0)
  const [anecdotes, setAnecdotes] = useState(anecdote_obj)
  const [mostVotes, setMostVotes] = useState(0)

  const nextAnecdote = () =>{
    const random = Math.floor(Math.random() * anecdotes.length);

    setSelected(random);
  }

  const vote = () => {
    const copy = [...anecdotes];

    copy[selected]['votes'] += 1;
    setAnecdotes(copy);

    if(copy[selected]['votes'] > copy[mostVotes]['votes']){
      setMostVotes(selected);
    }


  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]['anecdote']}</p>
      <p>has {anecdotes[selected]['votes']} votes.</p>
      <br></br>
      <Button text="vote" onClick={vote} />
      <Button text="next anecdote" onClick={nextAnecdote} />

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]['anecdote']}</p>
      <p>has {anecdotes[mostVotes]['votes']} votes.</p>
    </div>
  )
}

const Button = (props) => {
  const text = props.text;
  const onClick = props.onClick;

  return(
    <button onClick={onClick}>{text}</button>
  )
}

export default App
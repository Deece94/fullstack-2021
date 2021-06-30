
import Part from "./Part.js";

const Course = (props) => {
    const { parts, name } = props;
  
    const total = parts.reduce((a, b) => 
      a + (b['exercises'] || 0), 0
    )
  
    return(
      <div>
        <h1>{name}</h1>
        {parts.map(part => 
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <p><b>total of {total} exercises</b></p>
      </div>
    )
  
  
  }

  export default Course
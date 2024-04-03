/* eslint-disable react/prop-types */
//Esta parte se podría escribir así
//const Title = ({course}) =>{ return <h1> {course} </h1> }
//
const Title = (props) =>{

  return <h1> {props.course} </h1>
}

const Content = (props) =>{
  
  return <p>{props.text} {props.number} </p>
}

const Operation_lol  = (props) =>{

 
  return <p>Number of excercises {props.number} </p>}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Content text={part1} number={exercises1}/>
      <Content text={part2} number={exercises2}/>
      <Content text={part3} number={exercises3}/>
      <Operation_lol number={exercises1+exercises2+exercises3}/>  
    </div>
  )
}

export default App

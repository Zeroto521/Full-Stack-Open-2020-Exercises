import { Part } from './Part'


const Content = (props) => {
  return (
    <div>
      {
        props.parts.map(
          (element) =>
            <Part key={element.id} name={element.name} exercises={element.exercises} />
        )
      }
    </div>
  )
}

export { Content }

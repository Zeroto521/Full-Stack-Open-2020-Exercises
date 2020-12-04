import { Part } from './Part'

const Content = (props) => {
  return (
    <div>
      {
        props.parts.map(
          (element) =>
            <Part key={element.id} part={element} />
        )
      }
    </div>
  )
}

export { Content }

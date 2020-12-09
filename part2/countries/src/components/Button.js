const Button = (props) => {
  const { countryShow, setShow, name } = props

  const handleChange = () => {
    let changeShow = { ...countryShow }
    changeShow[name] = !countryShow[name]
    setShow(changeShow)
  }

  return (
    <button onClick={handleChange}>
      {
        !countryShow[name] &&
        "Show"
      }
      {
        countryShow[name] &&
        "Don't Show"
      }
    </button>
  )
}

export { Button }

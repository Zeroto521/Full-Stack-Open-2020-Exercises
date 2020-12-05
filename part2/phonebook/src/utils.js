const handleChange = (func) => (event) => {
  func(event.target.value)
}

export { handleChange }

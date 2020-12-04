const random0tom = (max) => {
    return Math.floor(Math.random() * (max))
}

const setToValue = (func, newValue) => () => {
    func(newValue)
}

export { random0tom, setToValue }

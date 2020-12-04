const random0tom = (max) => {
    return Math.floor(Math.random() * (max + 1))
}

const setToValue = (func, newValue) => () => {
    func(newValue)
}

export { random0tom, setToValue }

const setToValue = (func, newValue) => () => {
    func(newValue)
}

export { setToValue }

const Notification = ({ message, error }) => {
  if (message === null) {
    return null
  }

  if (error) {
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  return (
    <div className="message">
      {message}
    </div>
  )
}

export { Notification }

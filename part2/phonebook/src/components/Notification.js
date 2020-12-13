const Notification = ({ message }) => {
  if (message) {
    return (
      <div className="message">
        {message}
      </div>
    )
  }

  return null
}

export { Notification }

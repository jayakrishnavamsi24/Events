import './index.css'

const EventItem = props => {
  const {eachEvent, selectEvent} = props
  const {imageUrl, isSelected, name, location, id} = eachEvent

  const onEventSelect = () => {
    selectEvent(id)
  }

  const cardStyle = isSelected ? 'card-color' : ''

  return (
    <li className="event-card">
      <button type="button">
        <img
          className={cardStyle}
          src={imageUrl}
          alt="event"
          onClick={onEventSelect}
        />
      </button>
      <p className="event-title"> {name} </p>
      <p className="event-location"> {location} </p>
    </li>
  )
}

export default EventItem

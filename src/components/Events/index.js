import {Component} from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import './index.css'

const initialEventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
    isSelected: false,
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
    isSelected: false,
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
    isSelected: false,
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
    isSelected: false,
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
    isSelected: false,
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
    isSelected: false,
  },
]

class Events extends Component {
  state = {
    eventsList: initialEventsList,
    registrationMsg: [{registrationStatus: 'none'}],
  }

  selectEvent = id => {
    this.setState(prevState => ({
      eventsList: prevState.eventsList.map(eachEvent => {
        if (id === eachEvent.id) {
          return {...eachEvent, isSelected: true}
        }
        return {...eachEvent, isSelected: false}
      }),
      registrationMsg: prevState.eventsList.filter(eachEvent => {
        if (id === eachEvent.id) {
          return true
        }
        return false
      }),
    }))
  }

  render() {
    const {eventsList, registrationMsg} = this.state

    return (
      <div className="bg-container">
        <div className="events-list-container">
          <h1> Events </h1>
          <ul className="events-list-section">
            {eventsList.map(eachEvent => (
              <EventItem
                eachEvent={eachEvent}
                key={eachEvent.id}
                selectEvent={this.selectEvent}
              />
            ))}
          </ul>
        </div>
        <div className="registration-status">
          <ActiveEventRegistrationDetails
            status={registrationMsg[0].registrationStatus}
          />
        </div>
      </div>
    )
  }
}

export default Events

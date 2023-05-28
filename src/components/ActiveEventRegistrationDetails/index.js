import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const yetToRegisterMsg = () => (
    <div className="msg-container yet-to-register">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        {' '}
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.{' '}
      </p>
      <button type="button"> Register Here </button>
    </div>
  )

  const registeredMsg = () => (
    <div className="msg-container registered">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1> You have already registered for the event </h1>
    </div>
  )

  const registrationsClosedMsg = () => (
    <div className="msg-container registrations-closed">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1> Registrations are Closed Now! </h1>
      <p> Stay tuned. We will reopen </p>
    </div>
  )

  const eventNotSelectedMsg = () => (
    <>
      <p className="none-p">
        Click on an event, to view its registration details{' '}
      </p>
    </>
  )

  switch (status) {
    case registrationStatus.yetToRegister:
      return yetToRegisterMsg()
    case registrationStatus.registered:
      return registeredMsg()
    case registrationStatus.registrationsClosed:
      return registrationsClosedMsg()
    default:
      return eventNotSelectedMsg()
  }
}

export default ActiveEventRegistrationDetails

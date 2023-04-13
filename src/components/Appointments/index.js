// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {name: '', date: new Date(), appointmentList: []}

  onChangeNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeDateInput = event => {
    this.setState({
      date: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, date} = this.state

    const newComment = {
      id: v4(),
      name,
      date,
      isFavorite: false,
    }

    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newComment],
      name: '',
      date: '',
    }))
  }

  renderAppointmentList = () => {
    const {appointmentList} = this.state

    return appointmentList.map(eachComment => (
      <AppointmentItem
        key={eachComment.id}
        appointmentDetails={eachComment}
        toggleIsFavorite={this.toggleIsFavorite}
      />
    ))
  }

  onClickStarred = () => {
    const {appointmentList} = this.state
    const {id} = appointmentList
    const isCheckedFavorite = appointmentList.filter(eachContact => {
      if (id === eachContact.id) {
        //   eachContact.isFavorite = !eachContact.isFavorite
        return this.renderAppointmentList()
      }
      return eachContact
    })
    return isCheckedFavorite
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachContact => {
        if (id === eachContact.id) {
          //   eachContact.isFavorite = !eachContact.isFavorite
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {name, date, appointmentList} = this.state
    const {isFavorite} = appointmentList
    const {isCheckedFavorite} = this.onClickStarred

    return (
      <div className="container">
        <div className="card-container">
          <div className="flex-row-container">
            <div className="flex-col-container">
              <h1 className="heading">Add Appointment</h1>
              <form onSubmit={this.onAddComment}>
                <label className="title" htmlFor="tittleId">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Title"
                  className="input-element"
                  id="tittleId"
                  value={name}
                  onChange={this.onChangeNameInput}
                />
                <br />
                <label className="title" htmlFor="dateId">
                  DATE
                </label>
                <br />
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-element"
                  id="dateId"
                  value={date}
                  onChange={this.onChangeDateInput}
                />
                <br />
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointments-img"
            />
          </div>
          <hr className="line" />
          <div className="flex-container">
            <h1 className="appointments">Appointments</h1>
            <button
              type="button"
              className="star-button"
              onClick={this.onClickStarred}
              data-testid="star"
            >
              Starred
            </button>
          </div>
          <ul className="comments-list">
            {isFavorite ? isCheckedFavorite : this.renderAppointmentList()}
          </ul>
        </div>
      </div>
    )
  }
}
export default Appointments

// Write your code here
import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsFavorite} = props
  const {id, name, date, isFavorite} = appointmentDetails

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="list-item-container">
      <div className="flex-item">
        <div>
          <p className="name">{name}</p>
          <p className="date">{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
        </div>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
          data-testid="star"
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}
export default AppointmentItem

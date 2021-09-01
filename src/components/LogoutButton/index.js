// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const {history} = props
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="logout-container">
      <button
        type="submit"
        className="logout-button"
        onClick={onClickLogoutButton}
      >
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)

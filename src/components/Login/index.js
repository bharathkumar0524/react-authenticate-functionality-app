// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const onClickLoginButton = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const {history} = props
      const data = await response.json()
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1 className="login-heading">Please Login</h1>
      <button
        type="button"
        className="login-button"
        onClick={onClickLoginButton}
      >
        Login with sample creds
      </button>
    </div>
  )
}
export default Login

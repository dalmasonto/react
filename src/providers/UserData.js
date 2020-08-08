const signup = (details) => {
  localStorage.setItem('userData', JSON.stringify(details));
  localStorage.setItem('userLoggedInStatus', JSON.stringify({ 'username': details.username, 'loggedInStatus': true }))
}

const login = (loginUsername, loginPassword) => {
  const userData = localStorage.getItem('userData');
  if (userData === undefined) {
    return;
  }
  else {
    const userDetails = JSON.parse(userData);
    const username = userDetails.username;
    const password = userDetails.password;
    if (username === loginUsername && password === loginPassword) {
      localStorage.setItem('userLoggedInStatus', JSON.stringify({ 'username': username, 'loggedInStatus': true }))
      console.log('Successfully loged in', userDetails)
      return userDetails;
    }
    else {
      const errorData = {
        error: 'username does not exist or password mismatch'
      }
      return errorData
    }
  }
}

const checkLoginStatus = () => {
  const userData = localStorage.getItem('userLoggedInStatus');
  if (userData === undefined) {
    userData = {
      username: 'Anonymous user',
      loggedInStatus: false
    }
  }
  return userData
}

const logout = () => {
  localStorage.setItem('userLoggedInStatus', JSON.stringify({ 'username': 'Anonymous user', 'loggedInStatus': false }))
}

export { signup, login, checkLoginStatus,logout }
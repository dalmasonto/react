import React, { Component } from 'react'
// import data from './Data';
import { signup, login, checkLoginStatus, logout } from './UserData';


const Applicationcontext = React.createContext();

class Applicationprovider extends Component {

  state = {
    news: [],
    sortedNews: [],
    loading: true,
    loggedIn: checkLoginStatus(),
  }

  async componentDidMount() {
    let data;
    const url =
      "http://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=be64b79bc5a54295bde012c21cc488e3";
    const req = new Request(url);
    fetch(req).then(resp => resp.json()).then(response => {
      // console.log(response);
      data = response.articles;
      console.log('THE DATjkbkhjA IS', data)

      this.setState({
        news: data,
        sortedNews: data,
        loading: false
      })

    });

    // offline version
    // const userState = checkLoginStatus();

    // await this.setState({
    //   news: data,
    //   sortedNews: data,
    //   loading: false,
    //   loggedIn: userState
    // })

  }

  formatData(items) {
    let tempData = items.map(item => {
      let update = { ...item }
      return update;
    })
    return tempData
  }

  getUpdate = title => {
    const tempUpdates = [...this.state.news];
    const update = tempUpdates.find(someUpdate => someUpdate.title === title)
    return update;
  }

  handleSegment = segment => {
    let sorted = this.state.sortedNews.filter(update => update.category === segment)
    this.setState({
      sortedNews: sorted
    })
  }

  signUpUser = (details) => {
    signup(details);
  }

  loginUser = (username_, password) => {
    const dataToLogin = login(username_, password);
    // this.setState({
    //   news: data,
    //   sortedNews: data,
    //   loading: false,
    //   loggedIn: JSON.stringify({
    //     username: username_,
    //     loggedInStatus: true
    //   })
    // })
    return dataToLogin;
  }

  checkUserStatus = () => {
    const userState = this.state.loggedIn;
    // this.setState({
    //   news: data,
    //   sortedNews: data,
    //   loading: false,
    //   loggedIn: userState
    // })
    return userState;
  }

  logoutUser = () => {
    logout();
    this.setState({
      // news: data,
      // sortedNews: data,
      // loading: false,
      loggedIn: this.checkUserStatus()
    })

  }

  render() {
    return (
      <Applicationcontext.Provider value={{
        ...this.state,
        getUpdate: this.getUpdate,
        handleSegment: this.handleSegment,
        userSignup: this.signUpUser,
        userLogin: this.loginUser,
        userLogout: this.logoutUser,
        checkStatus: this.checkUserStatus
      }}>
        {this.props.children}
      </Applicationcontext.Provider>
    )
  }
}

const Applicationconsumer = Applicationcontext.Consumer;

export {
  Applicationprovider,
  Applicationcontext,
  Applicationconsumer
}
 
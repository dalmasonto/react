import React, { Component } from 'react'
// import data from './Data'


const Applicationcontext = React.createContext();

class Applicationprovider extends Component {

  state = {
    news: [],
    sortedNews: [],
    loading: true
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

    let newsUpdates = data;
    console.log("okay", newsUpdates);

    // this.setState({
    //   news: newsUpdates,
    //   sortedNews: newsUpdates,
    //   loading: false
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

  render() {
    return (
      <Applicationcontext.Provider value={{
        ...this.state,
        getUpdate: this.getUpdate,
        handleSegment: this.handleSegment
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

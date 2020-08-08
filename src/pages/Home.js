
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import HomeBlog from '../components/HomeBlog';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonPage, IonSearchbar, IonSegmentButton, IonSegment } from '@ionic/react';

import Nav from '../components/Nav';
import Margin from '../components/Margin';

import { Applicationcontext } from '../providers/Application';
import { IoIosColorFilter, IoMdColorFilter } from 'react-icons/io';

export default class Home extends Component {

  static contextType = Applicationcontext;

  getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
  }


  render() {
    let { news, sortedNews, handleSegment } = this.context;
    console.log(sortedNews)

    let categories = this.getUnique(news, 'category');
    let new_categories = ['all', ...categories];

    this.state = {
      news: news,
      category: 'all',
      sorted: news
    }

    let getSorted = (segment) => {
      console.log(segment)
      this.setState({
        category: segment
      })
      handleSegment(this.state.category)
    }

    let newsBlogs = sortedNews.map(
      (map_update, index) => {
        return <HomeBlog key={index} update={map_update} />
      }
    )

    return (
      <>
        <Nav page="Home" />

        <IonContent className="ion-margin-bottom mb-3 jumbotron">
          <div className="container">
            <div className="row">
              
            </div>
          </div>
            <IoIosColorFilter />

            <div className="container-fluid">
              <div className="row">
                {newsBlogs}
              </div>
            </div>
            {/* {
              this.state.sorted.map((update, index) => {
                return <HomeBlog key={index} update={update} />
              })
            } */}
          <Margin />
        </IonContent>
      </>
    )
  }
}





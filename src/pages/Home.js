
import React, { Component } from 'react';
import {Link} from 'react-router-dom'


import HomeBlog from '../components/HomeBlog';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenuButton, IonPage, IonSearchbar, IonSegmentButton, IonSegment } from '@ionic/react';

import Nav from '../components/Nav';
import Margin from '../components/Margin';

import { Applicationcontext } from '../providers/Application';
import { IoIosColorFilter } from 'react-icons/io';

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

    // let stateUpdate = (e) => {
    //   let cat = e.target.innerHTML;
    //   let { news, category, sorted } = this.state;
    //   let sorted = [...news];
    //   this.state.news.filter((new_update, index) => new_update.category === cat.trim(cat))
    //   if (category !== 'all'){
    //     sorted = sorted.filter((new_update, index) => new_update.category === cat.trim(cat))
    //   }
    //   this.setState({
    //     sorted: sorted
    //   });
    // }

    let newsBlogs = sortedNews.map(
      (map_update, index) => {
        return <HomeBlog key={index} update={map_update} />
      }
    )

    // let segments = new_categories.map((cat, index) => {
    //   let url = `?${cat}`;
    //   return (
    //     <>
    //       <IonSegmentButton value={cat} key={index} href={url} routerLink={url}> 
    //         {cat}
    //       </IonSegmentButton>
    //     </>)
    // })

    return (
      <>
        <Nav page="Home" />

        {/* <IonHeader>
          <IonToolbar>
            <div className="row" >
              <div className="col-md-2 col-sm-3 col-xs-3">
                <IonButtons slot="start">
                  <IonMenuButton></IonMenuButton>
                </IonButtons>
              </div>
              <div className="col-md-6 col-sm-9 col-xs-9">
                <IonSearchbar mode="ios"></IonSearchbar>
              </div>
            </div>
          </IonToolbar>
        </IonHeader> */}

        <IonContent className="ion-margin-bottom mb-3 jumbotron">
          <div className="row">
            <IoIosColorFilter />

            {/* <IonSegment value={this.state.category}>
              {segments}
            </IonSegment> */}

            {newsBlogs}

            {
              this.state.sorted.map((update, index) => {
                return <HomeBlog key={index} update={update} />
              })
            }

          </div>
          <Margin />
        </IonContent>
      </>
    )
  }
}





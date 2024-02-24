import React from 'react'
import { Link } from 'react-router-dom';
import NewRelease from '../../components/newRelease';
import ComicRecent from '../../components/comicRecent';
import Recommended from '../../components/recommended';
import CommingSoon from './../../components/commingSoon';
import Top15Comics from '../../components/top15Comics';
import ComedyComics from '../../components/comeryComics';
import FreeComic from './../../components/freeComic';
import NewsComics from '../../components/newsComics';
import NewUsers from '../../components/newUsers';
import Rank from './../../components/rank';
import Comments from './../../components/comments';
import NovelList from '../../components/novelList';


const Novel = () => {
  return (
    <>
    <div className="cont">
      <div className="title-released-comic ">
        <h2>New Released Novel</h2>
        <Link to="/newRelease">
          <p>See all</p>
        </Link>
      </div>
      <NovelList index={0}/>

      <div className="title-released-comic">
        <h2>Recent Novel</h2>
        <Link to="/recent">
          <p>See all</p>
        </Link>
      </div>
      <ComicRecent ></ComicRecent>

      <div className="title-released-comic">
        <h2>Recommended Novel</h2>
        <Link to="/recommended">
          <p>See all</p>
        </Link>
      </div>
      <Recommended />
      <div className="title-released-comic">
        <h2>Comming Soon Novel</h2>
        <Link to="/commingsoon">
          <p>See all</p>
        </Link>
      </div>
      <CommingSoon></CommingSoon>

      <div className="title-released-comic">
        <h2>Top 15 Best Novel of the Week</h2>
        <Link>
          <p>See all</p>
        </Link>
      </div>
      <Top15Comics />

      <div className="title-released-comic">
        <h2>Comedy Novel</h2>
        <Link>
          <p>See all</p>
        </Link>
      </div>
      <ComedyComics />
      <div className="title-released-comic">
        <h2>Free Novel</h2>
        <Link to={`/`}>
          <p>See all</p>
        </Link>
      </div>
      <FreeComic></FreeComic>
    </div>
    </>
  )
}

export default Novel
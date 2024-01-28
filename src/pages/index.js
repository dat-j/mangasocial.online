import SliderImg from "../components/sliderImg";
import SliderImg2 from "../components/sliderImg2";
import CommingSoon from "../components/commingSoon";
import slider1 from "../assets/imgSlider/Rectangle 1.svg";
import slider2 from "../assets/imgSlider/image 6.svg";
import slider3 from "../assets/imgSlider/image 8.svg";
import slider4 from "../assets/imgSlider/image 9.svg";
import slider5 from "../assets/imgSlider/image 5.svg";
import slider6 from "../assets/imgSlider/image 7.png";
import slider7 from "../assets/imgSlider/Vector 3.png";
import Rank from "../components/rank";
import ComicRecent from "../components/comicRecent";
import News from "../components/news";
import { Link } from "react-router-dom";
import NewUsers from "../components/newUsers";
import Comments from "../components/comments";
import NewRelease from "../components/newRelease";
import Page_Comedy from "./Comedy/Comedy";
import Page_Recommended from "./Recommended/Recommended";
import BestComicOfWeek from "./bestComicOfWeek/BestComicOfWeek";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Recommended from "../components/recommended";
import ComedyComics from './../components/comeryComics';
import Top15Comics from "../components/top15Comics";

export default function Index() {
  let sv = useSelector((state)=>state.server.sv)
  return (
    <>
      <div className="cont">
        <div className="slider">
          <SliderImg
            arrImage={[slider1, slider2, slider3, slider4]}
          ></SliderImg>
          <div className="slider2">
            <SliderImg2 arrImage2={[slider5, slider6, slider7]}></SliderImg2>
          </div>
        </div>
        <img className="blur-dots" src="/images/Vector 2.svg" alt=""></img>
        <div className="background-dots"></div>
        <div className="title-released-comic mt-[500px]">
          <h2>New Released Comic</h2>
          <Link to="/newRelease">
            <p>See all</p>
          </Link>
        </div>
        <NewRelease key={sv}/>

        <div className="title-released-comic">
          <h2>Recent Comics</h2>
          <Link to="/recent">
            <p>See all</p>
          </Link>
        </div>
        <ComicRecent ></ComicRecent>

        <div className="title-released-comic">
          <h2>Recommended Comics</h2>
          <Link to="/recommended">
            <p>See all</p>
          </Link>
        </div>
        <Recommended />
        <div className="title-released-comic">
          <h2>Comming Soon Comics</h2>
          <Link to="/commingsoon">
            <p>See all</p>
          </Link>
        </div>
        <CommingSoon></CommingSoon>

        <div className="title-released-comic">
          <h2>Top 15 Best Comics of the Week</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <Top15Comics />

        <div className="title-released-comic">
          <h2>Comedy Comics</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <ComedyComics />
        <div className="title-released-comic">
          <h2>Free Comicss</h2>
          <Link to={`/`}>
            <p>See all</p>
          </Link>
        </div>
        <Recommended></Recommended>
        <div className="title-released-comic">
          <h2>News</h2>
          <Link>
            <p>See all</p>
          </Link>
        </div>
        <div className="news">
          <News></News>
          <NewUsers></NewUsers>
        </div>
        <div className="title-released-comic">
          <h2>Rank</h2>
        </div>
        <Rank></Rank>
        <div className="title-released-comic">
          <h2>Comment</h2>
        </div>
        <Comments></Comments>
      </div>
      </>
  );
}

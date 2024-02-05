import { useState, useContext } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import SubMenu from "../components/SubMenu/SubMenu";
import platform from "platform";
import ios from "../pages/img/ios.png";
import adroi from "../pages/img/adroi.png";
import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";
import axios from "axios";
import "../assets/scss/_dropdown.scss";
import { SviContext } from ".";
import { changeServer } from "../Redux/Feature/serverSlice";
import { useDispatch, useSelector } from "react-redux";
let path = "";
export default function Layout() {
  const [isHovered, setIsHovered] = useState(false);
  const [isServerHovered, setIsServerHovered] = useState(false);
  const [link, setLink] = useState("");

  
  //handle search
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [server, setSever] = useState("0");
  const [open, setOpen] = useState(false);
  const [checkSearch, setCheckSearch]= useState(false);
  const [url, setURL] = useState("");
  const sv = useSelector((state)=>state.server.sv);
  const dispatch = useDispatch();
  function test(){
    
    console.log("sv:",sv)
  }
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInput((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

 

  const fetchData = (value) => {
    fetch("https://hanico.online/")
      .then((response) => response.json())
      .then((res) => {
        console.log(res[1].data);
        // const results = data.filter((data) => {
        //     return data && data.title_manga && data.title_manga.toLowerCase().includes(value)
        // })
        // console.log(results)
      });
  };
  const fetchServer = async () => {
    try {
      const response = await axios.get(
        "https://hanico.online/all-server"
      );
      console.log("Response: ", response.data);
    } catch (error) {
      console.log(error);
    }
    
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "https://hanico.online/search-manga-by-name-in-sever/"+sv,
        input
      );
      console.log(response);
      if(response.status==200){
        setCheckSearch(true);
      }
      let a = (response.data)[0].id_manga;
      let url = a.lastIndexOf("manga");
      path = a.slice(url,1000);
      console.log(path)
      setSearch((response.data)[0]);
    } catch (error) {
      console.log(error);
    }
    
  };
  console.log(path)
  const handleCloseSearch =()=>{
    setCheckSearch(false);
  }
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleServerMouseEnter = () => {
    setIsServerHovered(true);
  };

  const handleServerMouseLeave = () => {
    setIsServerHovered(false);
  };

  let getSessionData = () => {
    return sessionStorage.getItem("user");
  };

  let isLogin = getSessionData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const os = platform.os.family;

    if (os === "iOS") {
      setModalContent(ios);
      setIsModalOpen(true);
      setLink(
        "https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720"
      );
    } else if (os === "Android") {
      console.log("androi");
      setModalContent(adroi);
      setIsModalOpen(true);
      setLink(
        "https://play.google.com/store/apps/details?id=com.thinkdiffai.futurelove"
      );
    } else {
      console.log("Đây là laptop");
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  function changeSV(index){
    dispatch(changeServer(index));
    this.forceUpdate();
  } 
  return (
    <>
      <div className="header-top">
        <Link to="/">
          <div className="title">
            <img className="img-manga" src="/images/Ellipse 1.svg" alt=""></img>
            <h3>MangaSocial</h3>
          </div>
        </Link>
        <div className="menu-header">
          <Link to="/">
            <div
              className="comic"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p>Comic</p>
              <img
                className="arrow-img"
                src={
                  isHovered
                    ? "/images/Polygon cam.svg"
                    : "/images/Polygon 1.svg"
                }
                alt="Arrow"
              />
            </div>
          </Link>

          <Link to="/genres">
            <p>Genres</p>
          </Link>

          <p>Popular</p>

          {/* <div
            className="server"
            onMouseEnter={handleServerMouseEnter}
            onMouseLeave={handleServerMouseLeave}
          >
            <p>Server</p>
            <img
              className="arrow-img"
              src={
                isServerHovered
                  ? "/images/Polygon cam.svg"
                  : "/images/Polygon 1.svg"
              }
              alt="Arrow"
            />
          </div> */}
          <div className="dropdown">
            <button onClick={()=>handleOpen()}>Server</button>
            {open ? (
              <ul className="menu grid grid-cols-2" onClick={()=>handleOpen()}>
                <li className="menu-item" >
                  <button onClick={()=>dispatch(changeServer(1))}>Server 1</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(2))}>Server 2</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(3))}>Server 3</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(4))}>Server 4</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(5))}>Server 5</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(6))}>Server 6</button>
                </li>
                <li className="menu-item" >
                  <button onClick={()=>dispatch(changeServer(7))}>Server 7</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(8))}>Server 8</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(9))}>Server 9</button>
                </li>
                <li className="menu-item">
                  <button onClick={()=>dispatch(changeServer(10))}>Server 10</button>
                </li>
              </ul>
            ) : null}
          </div>
          

          <Link to="/contact-us">
            <p className="contact">Contact us</p>
          </Link>
          <Link to="/policy">
            <p className="policy">Policy</p>
          </Link>
          <Link
            to={`https://apps.apple.com/us/app/manga-reader-mangakomi-online/id6446646720`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt=""
              className="w-5 h-5 lg:w-12 lg:h-12 hover:scale-105 transition-all cursor-pointer"
            />
          </Link>
        </div>
        <div className="avatar_search">
          <CiSearch
            color="red"
            size={32}
            onClick={handleSearch}
            className="mr-2 cursor-pointer"
            
          />
          <input
            className="w-full border-none outline-none bg-transparent opacity-100"
            placeholder="Enter your email"
            name="content"
            onChange={handleOnChange}
          />
          {!isLogin ? (
            <div className="flex justify-center align-middle items-center ml-4">
              <Link to="/login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            // <Link to="/user-profile">
            //     <div className="avatar">
            //         <img src="/images/usersquare.svg" alt="usersquare"></img>
            //     </div>
            // </Link>
            <SubMenu />
          )}
          {/*  */}
          {checkSearch?
          (
           
                <div className="h-80 w-[17rem] bg-[#DADADA] absolute mt-[375px] ml-[50px] rounded-lg border-double flex justify-center flex-col items-center">
                  
                <div className="w-[90%] h-[30%] border-double border-red-900 rounded-lg flex border-4 cursor-pointer">
                  <img className="w-1/3 h-full py-2 rounded-lg" src={search?.poster} alt="" />
                  <Link  to={`/chapter/`+path} onClick={()=>window.location.href="/chapter/"+path}>
                  <div className="text-lg flex flex-col ml-6 justify-center">
                    <div>
                    {search?.title}
                    </div>
                    <div>
                      Rate:{search?.rate}
                    </div>
                    <div>
                      Views: {search?.views}
                    </div>
                  </div>
                  </Link>  
                </div>
                
                <div className="text-white border-5 border-white bg-blue-400 rounded-lg h-6 w-24 flex text-center content-center justify-center mt-[60px]">
                  <button onClick={()=>handleCloseSearch()}>Close</button>
                </div>
              </div>
            
        )
        :(
          null
        )
          }
        </div>
      </div>
      <Outlet></Outlet>

      {isModalOpen && (
        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="z-10 p-8 text-center bg-white rounded-md">
            <h2 className="mb-4 text-2xl font-bold">Dowload App</h2>
            <Link to={link}>
              <img src={modalContent} alt="ios" style={{ width: "200px" }} />
            </Link>
            <button
              onClick={closeModal}
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

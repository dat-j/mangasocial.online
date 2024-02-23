import { Link } from "react-router-dom";
import ComicRecent from "../../components/comicRecent";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

function UserProfile() {
  const [userData, setUserData] = useState();
  const inputRef = useRef(null);
  const fetchUserData = async () => {
    try {
      const res = await axios.get(
        "https://hanico.online/user/" + sessionStorage.getItem("user_id")
      );
      setUserData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeAvatar = () => {
    inputRef.current.click();

   
  }
   const chosefile = (e)=> {
    let file = e.target.files[0];
    console.log(file);
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log(inputRef.current)
  return (
    <div className="bg-[#000000] h-full">
      <div className="mx-5">
        <div className="flex flex-col items-center text-[#fff] relative">
          <img
            src="images\UserProfile\Rectangle 457.png"
            alt=""
            className="w-full h-[500px] bg-[#ffff] bg-cover rounded-b-[150px]"
          />
          <div className="h-60 w-full relative">
            <div className="flex absolute bottom-0">
              <div>
                <img
                  src={userData?.avatar_user}
                  alt="user avatar"
                  className="w-[312px] h-[312px]
                            rounded-full object-cover border-solid border-8"
                />
               <div className="mx-auto flex justify-center h-6 w-6" onClick={()=>handleChangeAvatar()}> 
               <input type="file" className="hidden" ref={inputRef} onChange={(e)=>chosefile(e)} />
                    <svg
                    alt="change avatar"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-switch-camera text-slate-500 opacity-20 hover:opacity-70 cursor-pointer absolute bottom-10 rounded-lg"
                    >
                    <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
                    <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="m18 22-3-3 3-3" />
                    <path d="m6 2 3 3-3 3" />
                    </svg>              
               </div>
              </div>
              <div className="flex flex-col font-normal text-[28px]  justify-center ml-6 mt-6">
                <h2 className="text-[#fff] text-[45px] font-semibold">
                  {userData?.name_user}
                </h2>
                {/* <p className="self-start">{userData.date_of_birth?(userData.date_of_birth):"Date of birth has not been set"}</p> */}
                <p className="self-start">0 Friends</p>
                <p className="self-start">
                  Joined {userData?.participation_time}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[526px] max-h-[352px] bg-[#676767] mt-[52px] text-[#fff] mb-24 rounded-lg">
          <div className="ml-6">
            <div>
              <h2 className="text-[36px] text-[#fff]">Introduce</h2>
              <p className="text-[24px]">
                {userData?.introduction ? userData.introduction : "Not set yet"}
              </p>
            </div>
            <div className="flex mb-[30px]">
              <img
                src="images\UserProfile\material-symbols_work-sharp.png"
                alt=""
                className="w-[32px] h-[32px]"
              />
              <p className="text-[22px] pl-2">
                {userData?.job ? userData.job : "Not set yet"}
              </p>
            </div>
            <div className="flex mb-[30px]">
              <img
                src="images\UserProfile\ph_gender-intersex-bold.png"
                alt=""
                className="w-[32px] h-[32px]"
              />
              <p className="text-[22px] pl-2">{userData?.gender}</p>
            </div>
            <div className="flex mb-[30px]">
              <img
                src="images\UserProfile\Frame 48097208.png"
                alt=""
                className="w-[32px] h-[32px]"
              />
              <p className="text-[22px] pl-2">Manga-Action-Mystery</p>
            </div>
            <div className="flex mb-[30px]">
              <img
                src="images\UserProfile\jam_birthday-cake-f.png"
                alt=""
                className="w-[32px] h-[32px]"
              />
              <p className="text-[22px] pl-2">
                {userData?.date_of_birth
                  ? userData.date_of_birth
                  : "Date of birth has not been set"}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-6xl text-white mb-10">
            <Link to="">Recent Read Comics</Link>
          </div>
          <div className="">
            <ComicRecent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

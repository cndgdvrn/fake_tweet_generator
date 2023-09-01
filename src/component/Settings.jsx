/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import {
  setAvatar,
  setBookmarkCount,
  setLikeCount,
  setName,
  setQuoteCount,
  setRetweetCount,
  setTweet,
  setUsername,
  setDate,
  setTime,
  setViews,
} from "../redux/tweetSlice";
import html2canvas from "html2canvas";
import { useEffect } from "react";

const Settings = () => {
  const dispatch = useDispatch();

  

  return (
    <div className="col-span-1 bg-black text-white flex flex-col items-center gap-y-4 p-4 overflow-auto ">
      <h1 className="text-3xl w-full">Tweet Ayarları</h1>
      {/* BORDER */}
      <div className="h-[1px] w-full bg-gray-800 mt-3"></div>
      {/* BORDER */}

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Ad Soyad</label>
        <input
          
          onChange={(e) => dispatch(setName(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Kullanıcı Adı</label>
        <input
          onChange={(e) => dispatch(setUsername(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Tweet</label>
        <textarea
          onChange={(e) => dispatch(setTweet(e.target.value))}
          maxLength={280}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Avatar</label>
        <input
          onChange={(e) =>
            dispatch(setAvatar(URL.createObjectURL(e.target.files[0])))
          }
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="file"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Retweet</label>
        <input
          onChange={(e) => dispatch(setRetweetCount(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">
          Alıntı Tweetler
        </label>
        <input
          onChange={(e) => dispatch(setQuoteCount(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Beğeni</label>
        <input
          onChange={(e) => dispatch(setLikeCount(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">
          Yer işaretleri
        </label>
        <input
          onChange={(e) => dispatch(setBookmarkCount(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Tarih Seçiniz</label>
        <input
          onChange={(e) => dispatch(setDate(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="date"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">Saat Giriniz</label>
        <input
          onChange={(e) => dispatch(setTime(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="time"
        />
      </div>

      <div className="flex flex-col gap-y-2 w-full p-2">
        <label className="text-twitter-gray font-semibold">
          Görüntülenme Sayısı
        </label>
        <input
          onChange={(e) => dispatch(setViews(e.target.value))}
          className="outline-none p-1 bg-transparent border-b-2 border-gray-800"
          type="text"
        />
      </div>


    </div>
  );
};

export default Settings;

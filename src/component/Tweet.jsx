import { BsThreeDots } from "react-icons/bs";
import {
  BookmarkIcon,
  CommentIcon,
  LikeIcon,
  RetweetIcon,
  ShareIcon,
} from "../Icons/icons";
import { useSelector } from "react-redux";

import html2canvas from "html2canvas";
import { useRef } from "react";

const Tweet = () => {
  const {
    name,
    username,
    tweet,
    avatar,
    retweetCount,
    quoteCount,
    likeCount,
    bookmarkCount,
    date,
    time,
    views,
  } = useSelector((state) => state.tweet);

  const ref = useRef(null);
  


  const captureScreenshot = () => {
    if (ref.current) {
      const element = ref.current;
      html2canvas(element).then(canvas => {
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      });
    }
  };

  return (
    <div className="col-span-3 bg-black h-full flex flex-col justify-center items-center gap-y-8 ">
      <div
        ref={ref}
        className="flex flex-col w-[566px] bg-black px-4 pt-4 pb-4 !box-content border-[1px] border-gray-800">
        {/* HEADER START */}
        <div className="flex justify-between h-[44px] items-center">
          {/* LEFT SIDE */}
          <div className="flex items-center h-full space-x-2">
            <div className="flex items-center justify-center">
              {avatar ? (
                <img
                  className="w-[42px] h-[42px] object-cover rounded-full"
                  src={avatar}
                />
              ) : (
                <div>
                  <div className="w-[42px] h-[42px] bg-gradient-to-r from-twitter-blue to-gray-800 rounded-full"></div>
                </div>
              )}
            </div>
            <div className="flex flex-col text-twitter-gray text-sm">
              <span className="text-white font-semibold">
                {(name && name) || "Buraya isim gelecek"}
              </span>
              <span>@{(username && username) || "username"}</span>
            </div>
          </div>
          {/* LEFT SIDE END */}

          {/* RIGHT SIDE START*/}
          <div className="text-twitter-gray hover:text-twitter-blue cursor-pointer transition-all">
            <BsThreeDots />
          </div>
          {/* RIGHT SIDE END*/}
        </div>
        {/* HEADER END */}

        {/* CONTENT START */}
        <div className="mt-3">
          <p className="text-white text-[17px]">
            {(tweet && tweet) ||
              "Buraya tweet gelecek Buraya tweet gelecek Buraya tweet gelecek Buraya tweet gelecek Buraya tweet gelecek"}
          </p>
        </div>
        {/* CONTENT END */}

        {/* TRANSLATE START */}
        <div className="text-twitter-blue text-xs mt-[6px]">
          <a>Translate post</a>
        </div>
        {/* TRANSLATE END */}

        {/* TIME SECTION START */}
        <div className="text-twitter-gray flex items-center space-x-1 mt-3 text-[15px]">
          <span>{time}</span>
          <span className="w-[2px] h-[2px] rounded-full bg-twitter-gray"></span>
          <span>
            {date.month && date.month} {date.day},{date.year}
          </span>
          <span className="w-[2px] h-[2px] rounded-full bg-twitter-gray"></span>

          <p>
            <span className="text-white font-semibold"> {views}</span> Views
          </p>
        </div>
        {/* TIME SECTION END */}

        {/* BORDER */}
        <div className="h-[1px] w-full bg-gray-800 mt-3"></div>
        {/* BORDER */}

        {/* INTERACTION START */}
        <div className="text-twitter-gray text-sm flex gap-x-3 mt-3">
          <p className="flex gap-x-1">
            {" "}
            <span className="text-white font-semibold">
              {(retweetCount && retweetCount) || "0"}
            </span>
            Repost{" "}
          </p>
          <p className="flex gap-x-1">
            {" "}
            <span className="text-white font-semibold">
              {(quoteCount && quoteCount) || "0"}
            </span>
            Quote{" "}
          </p>
          <p className="flex gap-x-1">
            {" "}
            <span className="text-white font-semibold">
              {(likeCount && likeCount) || "0"}
            </span>
            Likes{" "}
          </p>
          <p className="flex gap-x-1">
            {" "}
            <span className="text-white font-semibold">
              {(bookmarkCount && bookmarkCount) || "0"}
            </span>
            Bookmark{" "}
          </p>
        </div>
        {/* INTERACTION END */}

        {/* BORDER */}
        <div className="h-[1px] w-full bg-gray-800 mt-3"></div>
        {/* BORDER */}

        {/* ICONS START */}
        <div className="flex justify-between mt-3 px-10">
          <CommentIcon />
          <RetweetIcon />
          <LikeIcon />
          <BookmarkIcon />
          <ShareIcon />
        </div>
        {/* ICONS END */}
      </div>
      <button
        onClick={() => captureScreenshot()}
        className="bg-twitter-blue py-3 px-20 rounded-md text-lg text-white">
        İndir
      </button>
    </div>
  );
};

export default Tweet;

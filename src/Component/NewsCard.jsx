import React from "react";
import { FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { IoBookmarksOutline } from "react-icons/io5";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    // authorName,
    // date,
    author,
    image_url,
    details,
    rating,
    total_view
  } = news;
  //  const formattedDate = new Date(news.author.published_date);

  return (
    <div className="card bg-white p-5 rounded-xl shadow-md mx-auto mt-6">

      {/* Top: Author */}
      <div className="flex justify-between items-center bg-[#F3F3F3] w-auto rounded-sm p-4 w-">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold">{author.name}</h4>
            <p className="text-xs text-gray-500">{author.published_date}</p>
            {/* <p className="text-xs text-gray-500">{formattedDate.toLocaleString()}</p> */}

          </div>
        </div>

        <div className=" ">
          <button className=" flex space-x-2 text-xl text-gray-600 hover:text-black">
            <FaShareAlt />
            <IoBookmarksOutline />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt="news"
        className="w-full mt-4 rounded-lg"
      />

      {/* Details */}
      {/* <p className="text-gray-700 mt-3">
        {details.slice(0, 130)}...
        <span className="text-blue-600 cursor-pointer ml-1">
          Read More
        </span>
      </p> */}

      {/* Details  */}

      <div className="">
            {details.length > 130 ? (
              <>
                {details.slice(0,130)}...
                <Link to={`/news-details/${id}`} className="text-blue-400 font-semibold hover:font-bold cursor-pointer hover:under-line">Read More</Link>
              </>
            )
          :(details)}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2 text-orange-500">
         {Array.from({length: rating.number}).map((_,i)=> (  <FaStar key={i} />))}
          <span className="text-gray-700 font-semibold">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;

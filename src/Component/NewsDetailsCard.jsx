import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className='space-y-5 mx-4'>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl font-bold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link className='btn border-y-indigo-200 hover:bg-blue-300' to={`/category/${news.category_id}`} > Back to Category</Link>
 
        </div>
    );
};

export default NewsDetailsCard; 
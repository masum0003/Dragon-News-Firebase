import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';


const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(id , data)

    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
        }
        else if (id == "1") {
            const filterNews = data.filter((news) => news.others.is_today_pick === true);
            setCategoryNews(filterNews)
        }
        else {
            const filterNews = data.filter((news) => news.category_id == id);
            setCategoryNews(filterNews)
        }
    }, [id, data])

    // useEffect(() => {

    //     if (id == 0) {
    //         setCategoryNews(data);
    //         return;
    //     }
    //     else if (id === "1") {
    //         const fillterNews = data.filter(
    //             (news) => news.others.is_today_pick == true,
    //         );
    //         setCategoryNews(fillterNews)
    //     }
    //     else {

    //         const fillterNews = data.filter(news => news.category_id == id);
    //         // console.log(fillterNews);
    //         setCategoryNews(fillterNews)
    //     }

    // }, [id, data])
    return (
        <div>
            {/* <h2>CateGory all best -{id}</h2> */}
            <h2>Total News Found: <span className='text-red-700'>{categoryNews.length}</span></h2>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news) => (
                        <NewsCard key={news.id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>

    );
};

export default CategoryNews; 
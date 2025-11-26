import React, { useEffect, useState } from 'react';
import Hearder from '../Component/Hearder';
import RightAside from '../Component/homelayout/RightAside';
import NewsDetailsCard from '../Component/newsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [news, setNews] = useState({});
    // console.log(data, id, news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails);
    }, [id, data]);

    return (
        <div>
            <header className='py-3'>
                <Hearder></Hearder>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto py-4'>
                <section className='col-span-9'>
                    <h1 className='font-bold mb-5'>News section</h1>
                    <NewsDetailsCard news={news}>
                    </NewsDetailsCard>
                </section>

                <section className='col-span-3'>
                    <aside>
                        <RightAside></RightAside>
                    </aside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;
import React, { use } from 'react';
import { NavLink } from 'react-router';


const CategoryPromise = fetch("/categories.json")
    .then(res => res.json())
const Catogoties = () => {
    // console.log(CategoryPromise)
    const categories = use(CategoryPromise)
    return (
        <>
            <h1 className='font-black'>This is Category {categories.length}</h1>

            <div className='grid grid-cols-1 mt-2 gap-3'>

                {
                    categories.map((category) => (
                        <NavLink
                            to={`/category/${category.id}`}
                            key={category.id}
                            className={"btn btn-base-100 border-0  hover:bg-base-200 font-semibold text-accent"
                            }
                        >
                            {category.name}
                        </NavLink>
                    ))
                }
            </div>
        </>
    );
};

export default Catogoties;
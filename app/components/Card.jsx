'use client';
import React from 'react';
import Image from 'next/image';
import RatingStars from './RatingStars';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducers/addItems';
import Link from 'next/link';
import { truncateText } from '../utils/TruncateText';

const Card = ({ res }) => {
    const dispatch = useDispatch();

    return (
        <div className='p-[20px] bg-gray-200 rounded-xl h-full'>
            <Link
                href={`/details/${res._id}?id=${res._id}`}
                className=''
                key={res._id}>
                <div className='flex items-center flex-col justify-center h-[245px]'>
                    <Image
                        priority={
                            res._id === 1 || res._id === 21 ? true : false
                        }
                        fetchPriority={
                            res._id === 1 || res._id === 21 ? 'high' : 'low'
                        }
                        src={res.image}
                        sizes='200px'
                        alt='items-image'
                        width={200}
                        height={245}
                        className='md:hover:scale-110 transition-all duration-300 ease-in-out flex overflow-hidden object-cover rounded-lg'
                    />
                </div>
            </Link>
            <div className='flex justify-between items-center mt-[20px]'>
                <h2 className='text-black font-medium max-w-[200px]'>
                    {truncateText(res.title, 20)}
                </h2>
                <span className='bg-gray-300 px-2 py-1 border-none rounded-sm text-black font-bold relative z-20'>
                    ${res.price}
                </span>
            </div>
            <div className='flex justify-between items-center my-[20px]  md:mt-[20px]'>
                <button
                    onClick={() => dispatch(addItem(res))}
                    className='bg-black rounded-[30px] text-white font-semibold py-1 px-4 hover:bg-slate-400'>
                    Add To Cart
                </button>
                <RatingStars rating={res.rating} />
            </div>
        </div>
    );
};

export default Card;

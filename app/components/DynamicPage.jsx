'use client';
import Image from 'next/image';
import Loading from './Loading';
import { useFetch } from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducers/addItems';
import RatingStars from './RatingStars';

const DynamicPage = ({ product }) => {
    const dispatch = useDispatch();
    const { response, loading } = useFetch('/api/fetchData');
    if (loading) return <Loading />;
    const connect = response.find((res) => res._id === product);
    console.log(connect?._id);
    const productImage = connect?.image || '';
    const productRating = connect?.rating || 4;
    const productCategory = connect?.category;

    return (
        <div className='mx-auto md:py-[50px]  text-black'>
            <div className='bg-gray-200 flex min-[320px]:flex-col md:flex-row justify-center items-center gap-14 p-5 min-[320px]:rounded-none md:rounded-xl min-[320px]:w-full md:w-[90%] lg:w-[80%] mx-auto'>
                <div className='w-[100%]'>
                    {productImage ? <Image
                        priority
                        fetchPriority={
                            connect?._id === product ? 'high' : 'low'
                        }
                        width={435}
                        height={435}
                        src={productImage || null}
                        alt={'product-Image'}
                        className='object-cover rounded-lg w-full aspect-square'
                        sizes='(min-width: 780px) calc(32.97vw - 40px), (min-width: 340px) calc(70vw - 28px), calc(900vw - 2684px)'
                    /> : null}
                </div>
                <div className='w-full'>
                    <h2 className='font-bold mb-5 min-[320px]:text-2xl md:text-4xl'>
                        {connect?.title}
                    </h2>
                    <span className='font-semibold mb-5'>
                        ${connect?.price}
                    </span>
                    <div className='flex items-center gap-5 my-5'>
                        <span className='font-semibold'>{productRating}</span>
                        <RatingStars rating={productRating} />
                        <p className='text-blue-800 font-semibold'>
                            500 Reviews
                        </p>
                    </div>
                    <div className='mb-8'>
                        <p className='font-semibold max-w-4xl'>
                            {connect?.description}
                        </p>
                    </div>
                    <div className=' my-5'>
                        <button
                            onClick={() => dispatch(addItem(connect))}
                            className='bg-black rounded-lg  text-white font-semibold py-1 px-4 hover:bg-slate-400'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicPage;

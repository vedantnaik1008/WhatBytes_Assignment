'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const dataFilter = [
    { id: 1, name: 'men' },
    { id: 2, name: 'women' },
    { id: 3, name: 'electronics' },
    { id: 4, name: 'kids' }
];

const FilterProduct = ({
    setCategory,
    setMinPrice,
    setMaxPrice,
    minPrice,
    maxPrice
}) => {
    const [filter, setFilter] = useState(0);
    const router = useRouter();

    const handleFilter = (id) => {
        setFilter(id);
    };

    return (
        <div className='w-[100%] xl:w-[20%] mx-auto mb-5'>
            <div className='bg-gray-200 py-5 rounded-t-lg p-4'>
                <h3 className='block font-semibold mb-2 text-2xl'>Filters</h3>
                <p className='block font-semibold mb-2'>Category</p>
                <div className=' flex justify-center md:justify-start gap-4 flex-wrap lg:flex-col '>
                    {dataFilter.map((data) => (
                        <button
                            key={data.id}
                            onClick={() => {
                                handleFilter(data.id);
                                setCategory(data.name);
                            }}
                            className='bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg px-4 py-2'>
                            {data.name}
                        </button>
                    ))}
                    <button
                        className='bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg px-4 py-2'
                        onClick={() => {
                            setFilter(0);
                            setCategory('');
                            setMinPrice('');
                            setMaxPrice('');
                            router.push('/');
                        }}>
                        All
                    </button>
                </div>
            </div>

            <div className='bg-gray-200 rounded-b-lg pb-5 px-4'>
                <label className='block font-semibold mb-2'>Price Range</label>
                <div className='flex gap-4'>
                    <input
                        type='number'
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder='Min'
                        className='w-full px-3 py-2 rounded-lg border border-gray-300'
                    />
                    <input
                        type='number'
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder='Max'
                        className='w-full px-3 py-2 rounded-lg border border-gray-300'
                    />
                </div>
            </div>
        </div>
    );
};

export default FilterProduct;

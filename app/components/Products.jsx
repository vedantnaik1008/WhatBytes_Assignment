'use client';
import Card from './Card';
import Loading from './Loading';
import { useFetch } from '../hooks/useFetch';
import FilterProduct from './FilterProduct';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const Products = () => {
    const { response, loading } = useFetch('/api/fetchData');
    const searchParams = useSearchParams();
    const router = useRouter();

    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    useEffect(() => {
        const urlCategory = searchParams.get('category') || '';
        const priceRange = searchParams.get('price') || '';
        const [min, max] = priceRange.split('-');

        setCategory(urlCategory);
        setMinPrice(min || '');
        setMaxPrice(max || '');
    }, [searchParams]);

    useEffect(() => {
        const params = new URLSearchParams();
        if (category) params.set('category', category);
        if (minPrice || maxPrice) {
            params.set('price', `${minPrice || 0}-${maxPrice || 999999}`);
        }

        router.push(`?${params.toString()}`);
    }, [category, minPrice, maxPrice, router]);

    if (loading) return <Loading />;

    const filteredData = response.filter((res) => {
        const matchesCategory = category ? res.category === category : true;
        const matchesMin = minPrice ? res.price >= Number(minPrice) : true;
        const matchesMax = maxPrice ? res.price <= Number(maxPrice) : true;
        return matchesCategory && matchesMin && matchesMax;
    });

    return (
        <div className='w-[95%] mx-auto py-[50px] xl:flex xl:gap-2'>
            <FilterProduct
                setCategory={setCategory}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />
            <div className=' xl:w-[75%]'>
                <h2 className='text-black text-5xl font-extrabold mb-4'>
                    Product Listing
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredData.map((res) => (
                        <div key={res._id + res.title}>
                            <Card res={res} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;

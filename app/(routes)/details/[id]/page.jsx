import DynamicPage from '../../../components/DynamicPage';

const Page = async ({ params }) => {
    const productId = parseInt(params.id, 10);

    return <DynamicPage product={productId}/>;
};

export default Page;

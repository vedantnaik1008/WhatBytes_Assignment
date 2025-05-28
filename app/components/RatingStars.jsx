const RatingStars = ({ rating }) => {
    const stars = [];
    const roundedRating = Math.round(rating * 2) / 2;

    for (let i = 1; i <= 5; i++) {
        const key = `star-${i}`;
        if (i <= roundedRating) {
            stars.push(
                <svg
                    key={key}
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    color='gold'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                </svg>
            );
        } else if (i - 0.5 === roundedRating) {
            stars.push(
                <svg
                    key={key}
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    color='gold'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M288 0c-11.4 0-22.8 5.9-28.7 17.8L194 150.2 47.9 171.4c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.1 23 46 46.4 33.7L288 439.6V0z'></path>
                </svg>
            );
        } else {
            stars.push(
                <svg
                    key={key}
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 576 512'
                    color='gray'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'></path>
                </svg>
            );
        }
    }

    return <div className='flex'>{stars}</div>;
};

export default RatingStars;

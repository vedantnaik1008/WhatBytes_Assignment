export const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...'; // Add ellipsis if text is too long
    }
    return text;
};

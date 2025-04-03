import axios from 'axios';

export const fetchUser = async (userId: number) => {
    try {
        const [userResponse, postResponse] = await Promise.all([
            axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
        ]);

        const user = userResponse.data;
        const posts = postResponse.data;

        return { user, posts };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
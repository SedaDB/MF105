import axios from 'axios';

export default async function fetchUsers(userId: number) {
  try {
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    const user = userResponse.data;
    const posts = postsResponse.data;

    return {
      ...user,
      posts: posts
    };
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
} 
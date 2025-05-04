import axios from 'axios';

const API_BASE_URL = 'https://api.thehindu.com/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getArticles = async (params = {}) => {
  try {
    const response = await api.get('/articles', { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await api.get(`/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching article:', error);
    throw error;
  }
};

export const getArticlesByCategory = async (category) => {
  try {
    const response = await api.get(`/categories/${category}/articles`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category articles:', error);
    throw error;
  }
};

export const searchArticles = async (query) => {
  try {
    const response = await api.get('/search', { params: { q: query } });
    return response.data;
  } catch (error) {
    console.error('Error searching articles:', error);
    throw error;
  }
}; 
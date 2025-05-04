import React, { createContext, useContext, useState, useEffect } from 'react';
import { getArticles, getArticleById, getArticlesByCategory, searchArticles } from '../services/api';

const ArticleContext = createContext();

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);

  const fetchArticles = async (params = {}) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getArticles(params);
      setArticles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchArticleById = async (id) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getArticleById(id);
      setCurrentArticle(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryArticles = async (category) => {
    try {
      setLoading(true);
      setError(null);
      const data = await getArticlesByCategory(category);
      setArticles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const search = async (query) => {
    try {
      setLoading(true);
      setError(null);
      const data = await searchArticles(query);
      setArticles(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArticleContext.Provider
      value={{
        articles,
        currentArticle,
        loading,
        error,
        fetchArticles,
        fetchArticleById,
        fetchCategoryArticles,
        search,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
} 
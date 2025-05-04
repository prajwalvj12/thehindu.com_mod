import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchContainer = styled.div`
  padding: 40px 0;
`;

const SearchHeader = styled.header`
  margin-bottom: 40px;
`;

const SearchTitle = styled.h1`
  color: #e31837;
  margin-bottom: 20px;
`;

const SearchResults = styled.div`
  margin-top: 40px;
`;

const ResultCount = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

const ArticleList = styled.div`
  display: grid;
  gap: 30px;
`;

const ArticleItem = styled.article`
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ArticleTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

const ArticleExcerpt = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const ArticleMeta = styled.div`
  color: #888;
  font-size: 14px;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: #666;
`;

function Search() {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('q');

  useEffect(() => {
    // Mock search results for demonstration
    const mockResults = [
      {
        id: 1,
        title: "Search Result 1",
        excerpt: "This is a search result that matches your query...",
        category: "National",
        date: "March 15, 2024"
      },
      {
        id: 2,
        title: "Search Result 2",
        excerpt: "Another search result related to your query...",
        category: "Business",
        date: "March 14, 2024"
      },
      {
        id: 3,
        title: "Search Result 3",
        excerpt: "More content that matches your search criteria...",
        category: "Sports",
        date: "March 13, 2024"
      }
    ];

    setSearchResults(mockResults);
  }, [query]);

  return (
    <SearchContainer>
      <div className="container">
        <SearchHeader>
          <SearchTitle>Search Results</SearchTitle>
          <p>Showing results for: "{query}"</p>
        </SearchHeader>

        <SearchResults>
          <ResultCount>Found {searchResults.length} results</ResultCount>
          
          {searchResults.length > 0 ? (
            <ArticleList>
              {searchResults.map(article => (
                <ArticleItem key={article.id}>
                  <Link to={`/article/${article.id}`}>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                    <ArticleMeta>
                      {article.category} | {article.date}
                    </ArticleMeta>
                  </Link>
                </ArticleItem>
              ))}
            </ArticleList>
          ) : (
            <NoResults>
              <h3>No results found</h3>
              <p>Try different keywords or check your spelling</p>
            </NoResults>
          )}
        </SearchResults>
      </div>
    </SearchContainer>
  );
}

export default Search; 
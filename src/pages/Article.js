import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ArticleContainer = styled.article`
  padding: 40px 0;
`;

const ArticleHeader = styled.header`
  margin-bottom: 40px;
`;

const ArticleTitle = styled.h1`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #666;
  margin-bottom: 20px;
`;

const ArticleImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin-bottom: 30px;
`;

const ArticleContent = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: #333;

  p {
    margin-bottom: 20px;
  }
`;

const RelatedArticles = styled.section`
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #ddd;
`;

const RelatedTitle = styled.h2`
  color: #e31837;
  margin-bottom: 20px;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const RelatedArticle = styled.article`
  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

function Article() {
  const { id } = useParams();

  // Mock data for demonstration
  const article = {
    id: 1,
    title: "Breaking News: Major Development in National Politics",
    category: "National",
    date: "March 15, 2024",
    author: "John Doe",
    image: "https://via.placeholder.com/1200x500",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
    relatedArticles: [
      {
        id: 2,
        title: "Related Article 1",
        excerpt: "This is a related article about the same topic..."
      },
      {
        id: 3,
        title: "Related Article 2",
        excerpt: "Another related article with more information..."
      },
      {
        id: 4,
        title: "Related Article 3",
        excerpt: "Additional context and analysis on the subject..."
      }
    ]
  };

  return (
    <ArticleContainer>
      <div className="container">
        <ArticleHeader>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleMeta>
            <span>{article.category}</span>
            <span>{article.date}</span>
            <span>By {article.author}</span>
          </ArticleMeta>
          <ArticleImage src={article.image} alt={article.title} />
        </ArticleHeader>
        <ArticleContent dangerouslySetInnerHTML={{ __html: article.content }} />
        
        <RelatedArticles>
          <RelatedTitle>Related Articles</RelatedTitle>
          <RelatedGrid>
            {article.relatedArticles.map(related => (
              <RelatedArticle key={related.id}>
                <h3>{related.title}</h3>
                <p>{related.excerpt}</p>
              </RelatedArticle>
            ))}
          </RelatedGrid>
        </RelatedArticles>
      </div>
    </ArticleContainer>
  );
}

export default Article; 
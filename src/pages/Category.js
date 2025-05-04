import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryContainer = styled.div`
  padding: 40px 0;
`;

const CategoryHeader = styled.header`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h1`
  color: #e31837;
  margin-bottom: 20px;
`;

const CategoryDescription = styled.p`
  color: #666;
  font-size: 18px;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  padding: 20px;
`;

const ArticleTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const ArticleExcerpt = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
`;

const ArticleMeta = styled.div`
  color: #888;
  font-size: 12px;
`;

function Category() {
  const { category } = useParams();

  // Mock data for demonstration
  const categoryArticles = [
    {
      id: 1,
      title: "Article 1 in this category",
      excerpt: "This is a sample article in the selected category...",
      image: "https://via.placeholder.com/400x200",
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Article 2 in this category",
      excerpt: "Another article related to this category...",
      image: "https://via.placeholder.com/400x200",
      date: "March 14, 2024"
    },
    {
      id: 3,
      title: "Article 3 in this category",
      excerpt: "More content related to this category...",
      image: "https://via.placeholder.com/400x200",
      date: "March 13, 2024"
    }
  ];

  const categoryInfo = {
    title: category.charAt(0).toUpperCase() + category.slice(1),
    description: `Latest news and updates in the ${category} category. Stay informed with the most recent developments and analysis.`
  };

  return (
    <CategoryContainer>
      <div className="container">
        <CategoryHeader>
          <CategoryTitle>{categoryInfo.title}</CategoryTitle>
          <CategoryDescription>{categoryInfo.description}</CategoryDescription>
        </CategoryHeader>

        <ArticleGrid>
          {categoryArticles.map(article => (
            <ArticleCard key={article.id}>
              <Link to={`/article/${article.id}`}>
                <ArticleImage src={article.image} alt={article.title} />
                <ArticleContent>
                  <ArticleTitle>{article.title}</ArticleTitle>
                  <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                  <ArticleMeta>{article.date}</ArticleMeta>
                </ArticleContent>
              </Link>
            </ArticleCard>
          ))}
        </ArticleGrid>
      </div>
    </CategoryContainer>
  );
}

export default Category; 
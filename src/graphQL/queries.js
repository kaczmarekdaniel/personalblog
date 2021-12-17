export const latestSectionQuery =
  'allArticles(filter: {}, orderBy: _createdAt_DESC)';

export const reactSectionQuery =
  'allArticles(filter: {category: {eq: "react"}}, orderBy: _createdAt_ASC)';

export const designSectionQuery =
  'allArticles(filter: {category: {eq: "design"}}, orderBy: _createdAt_ASC)';

export const techSectionQuery =
  'allArticles(filter: {category: {eq: "tech"}}, orderBy: _createdAt_ASC)';

export const trendingSectionQuery =
  'allArticles(filter: {}, orderBy: _createdAt_ASC)';

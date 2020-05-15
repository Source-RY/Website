import * as React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';


interface PageTemplateProps {
  data: {
    strapiPage: {
      id: string
      title: string
      textContent: string
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> =
({ data: { strapiPage: { title, textContent } } }) => {
  return (
    <IndexLayout>
      <h1 className="page-title">{title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{ __html: textContent }} />

    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    strapiPage( id: { eq: $id }) {
      id
      title
      textContent
    }
  }
`;

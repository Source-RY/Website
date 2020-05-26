import * as React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from '../layouts';


interface PageTemplateProps {
  data: {
    strapiPage: {
      translations: {
        title: string;
        body: string;
        language: 'FI' | 'EN';
      }[];
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data: { strapiPage: { translations } } }) => {
  /* TODO: implement localization */
  const finskTranslation = translations.filter(t => t.language === 'FI')[0];

  return (
    <IndexLayout>
      <h1 className="page-title">{finskTranslation.title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{ __html: finskTranslation.body }} />
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($url: String!) {
    strapiPage( url: { eq: $url }) {
      translations {
        title
        body
        language
      }
    }
  }
`;

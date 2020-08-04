import * as React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import IndexLayout from '../layouts';


interface PageTemplateProps {
  data: {
    strapiPage: {
      banner: {
        childImageSharp: {
          original: {
            src: string;
          }
        }
      };
      translations: {
        title: string;
        body: string;
        language: 'FI' | 'EN';
      }[];
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data: { strapiPage } }) => {
  /* TODO: implement localization */
  const finskTranslation = strapiPage.translations.filter(t => t.language === 'FI')[0];
  console.log(strapiPage);

  const bannerURL = strapiPage.banner ? strapiPage.banner.childImageSharp.original.src : '';
  console.log(bannerURL);

  return (
    <IndexLayout>
      <div className="page-banner-container">
        <div className="page-banner" style={{ backgroundImage: `url(${bannerURL})` }}>
        </div>
        <h1 className="page-title">{finskTranslation.title}</h1>
      </div>
      <ReactMarkdown className="page-text">{finskTranslation.body}</ReactMarkdown>
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($url: String!) {
    strapiPage( url: { eq: $url }) {
      banner {
        childImageSharp {
          original {
            src
          }
        }
      }
      translations {
        title
        body
        language
      }
    }
  }
`;

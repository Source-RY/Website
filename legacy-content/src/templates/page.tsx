import * as React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import IndexLayout from '../layouts';
import PartnersWidget from '../components/PartnersWidget'


interface PageTemplateProps {
  data: {
    strapiPage: {
      hasWidgets: boolean;
      banner: {
        childImageSharp: {
          original: {
            src: string;
          }
        };
        childVideoFfmpeg: {
          transcode: {
            src: string;
          }
        };
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

  const isImage = !!strapiPage.banner.childImageSharp;
  const bannerURL = strapiPage.banner.childImageSharp ?
    strapiPage.banner.childImageSharp.original.src
    : strapiPage.banner.childVideoFfmpeg.transcode.src;

  return (
    <IndexLayout>
      <div className="page-banner-container">
        <div className={isImage ? "page-banner filter" : "page-banner"} 
          style={{ backgroundImage: `url(${isImage ? bannerURL : ''})` }}>
          { !isImage ? <video src={bannerURL} /> : <></> }
        </div>
        <h1 className="page-title">{finskTranslation.title}</h1>
      </div>
      <ReactMarkdown className={'page-text'}>
        {finskTranslation.body}
      </ReactMarkdown>
      {
        strapiPage.hasWidgets ?
        <PartnersWidget />
        : <></>
      }
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($url: String!) {
    strapiPage( url: { eq: $url }) {
      hasWidgets
      banner {
        childImageSharp {
          original {
            src
          }
        }
        childVideoFfmpeg {
          transcode {
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

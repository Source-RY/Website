import * as React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import IndexLayout from '../layouts';
import PartnerItem from '../components/PartnerItem'


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
    allStrapiPartner: {
      edges: {
        node: {
          logo: {
            childImageSharp: {
              original: {
                src: string;
              }
            }
          };
          name: string;
          basicInfo: string;
          url: string;
          accentColor: string;
        }
      }[]
    }
  }
}

const PartnersTemplate: React.FC<PageTemplateProps> = ({ data: { strapiPage, allStrapiPartner } }) => {

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
      <ReactMarkdown className={'page-text ' + (strapiPage.hasWidgets ? 'has-widgets' : '')}>
        {finskTranslation.body}
      </ReactMarkdown>
      {
        allStrapiPartner.edges.map((partner, index) => {
          return <PartnerItem key={index} isLast={index === allStrapiPartner.edges.length - 1} partner={partner.node} />
        })
      }
    </IndexLayout>
  );
};

export default PartnersTemplate;

export const query = graphql`
  query PartnersTemplateQuery($url: String!) {
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
    allStrapiPartner {
      edges {
        node {
          logo {
            childImageSharp {
              original {
                src
              }
            }
          }
          basicInfo
          name
          url
          accentColor
        }
      } 
    }
  }
`;

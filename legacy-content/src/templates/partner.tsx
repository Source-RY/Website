import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import IndexLayout from '../layouts';


interface PartnerTemplateProps {
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
      partner: {
        basicInfo: string;
        name: string;
        url: string;
      };
    }
  }
}

interface PartnerViewProps {
  partner: {
    basicInfo: string;
    name: string;
    url: string;
  }
}

const PartnerTemplate: React.FC<PartnerTemplateProps> = ({ data: { strapiPage } }) => {
  /* TODO: implement localization */
  const finskTranslation = strapiPage.translations.filter(t => t.language === 'FI')[0];

  const isImage = !!strapiPage.banner.childImageSharp;
  const bannerURL = strapiPage.banner.childImageSharp ?
    strapiPage.banner.childImageSharp.original.src
    : strapiPage.banner.childVideoFfmpeg.transcode.src

  const partner = strapiPage.partner;
  console.log(partner);

  const videoContainer = useRef<any>(null); 
  const video = useRef<any>(null);

  // Todo add dynamic video scaling
  useEffect(() => {
    if (!isImage && videoContainer && video) {
      const containerWidth = videoContainer.current.offsetWidth;
      const containerHeight = videoContainer.current.offsetHeight;
      if (containerWidth > containerHeight)
        video.current.width = containerWidth;
      else
        video.current.height = containerHeight;
    }
  }, [videoContainer, video]);

  return (
    <IndexLayout>
      <div className="page-banner-container">
        <div className={isImage ? "page-banner filter" : "page-banner"} 
          style={{ backgroundImage: `url(${isImage ? bannerURL : ''})` }} ref={videoContainer} >
          { !isImage ? <video src={bannerURL} autoPlay loop ref={video} /> : <></> }
        </div>
      </div>
      <h1 className="page-title-rel">{finskTranslation.title}</h1>
      <ReactMarkdown className="partner-page-text">
        {finskTranslation.body}
      </ReactMarkdown>
      <PartnerView partner={partner} />
    </IndexLayout>
  );
};



const PartnerView: React.FC<PartnerViewProps> = ({ partner }) => {
  return (
    <div className="partner-side-bar">

    </div>
  );
};

export default PartnerTemplate;

export const query = graphql`
  query PartnerTemplateQuery($url: String!) {
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
      partner {
        basicInfo
        name
        url
      }
    }
  }
`;

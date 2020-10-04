import * as React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import IndexLayout from '../layouts';


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

interface WidgetProps {
  hasWidgets: boolean;
}

const Widgets: React.FC<WidgetProps> = ({ hasWidgets }) => {
  if (hasWidgets) {
    return (
      <div className="widgets-container">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftamko.source&amp;tabs=timeline&amp;width=360&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
          className="fb-widget"
          width="360" height="500"
          scrolling="no"
          allow="encrypted-media">
        </iframe>
      </div>
    );
  } else
    return <></>;
};

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
      <ReactMarkdown className={'page-text ' + (strapiPage.hasWidgets ? 'has-widgets' : '')}>
        {finskTranslation.body}
      </ReactMarkdown>
      <Widgets hasWidgets={strapiPage.hasWidgets} />
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

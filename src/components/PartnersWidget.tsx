import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

interface PartnerProps {
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

interface PartnersProps {
  allStrapiPartner: {
    edges: {
      node: PartnerProps
    }[]
  }
}

const PartnerItem: React.FC<PartnerProps> = ({ logo, url }) => {
  return (
    <a className='partner-widget-item' href={url}>
      <img src={logo.childImageSharp.original.src} />
    </a>
  )
}

const PartnersWidget = ({}) => {
  return (
    <StaticQuery
      query={graphql`
        query PartnersWidgetQuery {
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
      `}
      render={({ allStrapiPartner }: PartnersProps) => (
        <>
          <h1 className='partners-title'>
            Yhteistyökumppanimme
          </h1>
          <div className='partner-widget-partners'>
            {
              allStrapiPartner.edges.map((partner) => {
                return <PartnerItem key={partner.node.name} {...partner.node} />
              })
            }
          </div>
        </>

      )}
    />
  )
}

export default PartnersWidget


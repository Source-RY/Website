import React from 'react'
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components'

interface LinkProps {
  accentColor: string
}

const PartnerLink = styled.a<LinkProps>`
  display: inline-block;
  position: relative;
  text-decoration: none;
  color: ${props => props.accentColor ?? '#fff'};
  background: transparent;
  padding-left: 20px;
  padding-right: 20px;
  width: 210px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 16px;
  margin-top: 20px;
  text-transform: uppercase;
  border: solid 2px ${props => props.accentColor ?? '#fff'};
  z-index: 5;
  transition: 0.2s ease-in-out;

  :hover {
    color: #fff;
  }

  ::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: ${props => props.accentColor ?? '#fff'};
    z-index: -1;
    transition: 0.2s ease-in-out;
  }

  :hover::before {
    width: 100%;
  }
`


interface PartnerProps {
  partner: {
    logo: {
      childImageSharp: {
          original: {
              src: string;
          };
      };
    };
    name: string;
    basicInfo: string;
    url: string;
    accentColor: string;
  };
  isLast: boolean;
}

const PartnerItem: React.FC<PartnerProps> = ({ partner, isLast }) => {
  return (
    <>
      <div className='partner-item'>
        <div className="top-row">
          <img className='partner-logo' src={partner.logo.childImageSharp.original.src} />
          <PartnerLink accentColor={partner.accentColor} target="_blank" href={partner.url}>
            Verkkosivut
          </PartnerLink>
        </div>
        <ReactMarkdown className='partner-desc'>
          {partner.basicInfo}
        </ReactMarkdown>
      </div>
      {
        !isLast 
        ? <div className="partner-break"></div>
        : <></>
      }
    </>
  )
}

export default PartnerItem;
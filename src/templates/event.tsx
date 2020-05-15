import * as React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';


interface EventTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    strapiEvent: {
      id: string
      name: string
      content: string;
      start: string;
      end: string;
    }
  }
}

const EventTemplate: React.FC<EventTemplateProps> =
({ data: { strapiEvent: { name, content } } }) => {
  return (
    <IndexLayout>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />

    </IndexLayout>
  );
};

export default EventTemplate;

export const query = graphql`
  query EventTemplateQuery($id: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    strapiEvent( id: { eq: $id }) {
      id
      name
      content
      start
      end
    }
  }
`;

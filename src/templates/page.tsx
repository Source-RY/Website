import * as React from 'react';
import { graphql } from 'gatsby';
import IndexLayout from '../layouts';


interface Event {
  id: string
  name: string
  content: string;
  start: string;
  end: string;
};

interface PageTemplateProps {
  data: {
    strapiPage: {
      id: string
      title: string
      textContent: string,
      events: Event[]
    }
  }
}

const PageTemplate: React.FC<PageTemplateProps> =
({ data: { strapiPage: { title, textContent, events } } }) => {
  return (
    <IndexLayout>
      <h1 className="page-title">{title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{ __html: textContent }} />
      <div className="page-events">
        {events.map((evt: Event) => {
          return <h1>{evt.name}</h1>;
        })}
      </div>
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
      events {
        id
        name
        content
        start
        end
      }
    }
  }
`;

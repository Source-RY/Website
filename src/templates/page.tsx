import * as React from 'react';
import { graphql } from 'gatsby';
<<<<<<< HEAD
=======
import ReactMarkdown from 'react-markdown';

>>>>>>> 24377e5bc6a5a3fe3699e33a49f66ca30b778bae
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
<<<<<<< HEAD
      id: string
      title: string
      textContent: string,
      events: Event[]
=======
      translations: {
        title: string;
        body: string;
        language: 'FI' | 'EN';
      }[];
>>>>>>> 24377e5bc6a5a3fe3699e33a49f66ca30b778bae
    }
  }
}

<<<<<<< HEAD
const PageTemplate: React.FC<PageTemplateProps> =
({ data: { strapiPage: { title, textContent, events } } }) => {
  return (
    <IndexLayout>
      <h1 className="page-title">{title}</h1>
      <div className="page-text" dangerouslySetInnerHTML={{ __html: textContent }} />
      <div className="page-events">
        {events.map((evt: Event) => {
          return <h1 key={evt.id}>{evt.name}</h1>;
        })}
      </div>
=======
const PageTemplate: React.FC<PageTemplateProps> = ({ data: { strapiPage: { translations } } }) => {
  /* TODO: implement localization */
  const finskTranslation = translations.filter(t => t.language === 'FI')[0];

  return (
    <IndexLayout>
      <h1 className="page-title">{finskTranslation.title}</h1>
      <ReactMarkdown className="page-text">{finskTranslation.body}</ReactMarkdown>
>>>>>>> 24377e5bc6a5a3fe3699e33a49f66ca30b778bae
    </IndexLayout>
  );
};

export default PageTemplate;

export const query = graphql`
<<<<<<< HEAD
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
=======
  query PageTemplateQuery($url: String!) {
    strapiPage( url: { eq: $url }) {
      translations {
        title
        body
        language
>>>>>>> 24377e5bc6a5a3fe3699e33a49f66ca30b778bae
      }
    }
  }
`;

import React, {FC} from 'react';
import './newsletter.css';
import NewsletterForm from './components/newsletter-form';

const Newsletter: FC = () => {
  return (
    <section className="newsletter">
      <h1 className="newsletter__title">NEWSLETTER</h1>
      <p className="newsletter__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <NewsletterForm/>
    </section>
  );
}

export default Newsletter;
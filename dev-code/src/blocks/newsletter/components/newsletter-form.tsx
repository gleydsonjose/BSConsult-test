import React, { useState, ChangeEvent, FC } from 'react';
import { useViewportResize } from '../../hooks';

const NewsletterForm: FC = () => {
  const [genre, setGenre] = useState('D');
  const viewportWidth = useViewportResize();
  const mobileWidth = 900;

  function handleGenre(event: ChangeEvent<HTMLSelectElement>) {
    setGenre(event.target.value);
  }

  return (
    <form action="" className="newsletter__form newsletter__form_margin_top">
      <div className="newsletter__first-group">
        <input type="text" placeholder="Nome" className="newsletter__input newsletter__input_margin_size"/>
        <input type="email" placeholder="E-mail" className="newsletter__input newsletter__input_margin_size"/>
        {viewportWidth > mobileWidth ?
        <input type="number" placeholder="Idade" className="newsletter__input"/> :
        <select className="newsletter__input newsletter__input_margin_size newsletter__input_select_color-padding"
          value={genre} onChange={handleGenre}>
          <option value="D">Genero</option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>}
      </div>
      <div className="newsletter__last-group newsletter__last-group_margin_top">
        <input type="submit" value="ENVIAR" className="newsletter__submit"/>
      </div>
    </form>
  );
}

export default NewsletterForm;
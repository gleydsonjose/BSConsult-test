import React, {FC, useState, useEffect} from 'react';
import './about-us.css';

const AboutUs: FC = () => {
  const [readMoreActive, setReadMoreActive] = useState(false);
  const [currentlyText, setCurrentlyText] = useState("");
  const textLengthLimit = 400;
  const readMoreText = readMoreActive ? 'OCULTAR' : 'LER MAIS';
  const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  
  useEffect(() => {
    let newText = [];
    let indexLimit = readMoreActive ? text.length-1 :
      text.length < textLengthLimit ? text.length : textLengthLimit;
  
    for(let index = 0; index <= indexLimit; index++) {
      newText.push(text[index]);
  
      if(!readMoreActive && index === indexLimit) {
        newText.push('... ');
      }
    }

    setCurrentlyText(newText.join(""));
  }, [readMoreActive]);

  function handleReadMore() {
    setReadMoreActive(!readMoreActive);
  }

  return (
    <section className="about-us about-us_margin_top">
      <h1 className="about-us__title">SOBRE NÓS</h1>
      <p className="about-us__text">
        {currentlyText}
        <span className="about-us__btn-read-more" onClick={handleReadMore}>{readMoreText}</span>
      </p>
    </section>
  )
}

export default AboutUs;
import React, { useState, useEffect } from 'react';

import { Wrapper, Card, Templates, Form, Button } from './styles';
import logo from '../../images/logo.svg';

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.imgflip.com/get_memes');
      const {
        data: { memes },
      } = await resp.json();
      setTemplates(memes);
    })();
  });

  // Currying -> Função que retorna outra função

  const handleInputChange = (index) => (e) => {
    const newValues = boxes;
    newValues[index] = e.target.value;
    setBoxes(newValues);
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(boxes);
  }

  return (
    <Wrapper>
      <img src={logo} alt="MemeMaker" />
      <Card>
        <h2>Selecione um template</h2>
        <Templates>
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setSelectedTemplate(template)}
              className={template.id === selectedTemplate?.id ? 'selected' : ''}
            >
              <img src={template.url} alt={template.name} />
            </button>
          ))}
        </Templates>
        {selectedTemplate && (
          <>
            <h2>Textos</h2>
            <Form onSubmit={handleSubmit}>
              {new Array(selectedTemplate.box_count)
                .fill('')
                .map((_, index) => (
                  <input
                    key={String(Math.random())}
                    placeholder={`Text #${index + 1}`}
                    onChange={handleInputChange(index)}
                  />
                ))}
              <Button type="submit">MakeMyMeme</Button>
            </Form>
          </>
        )}
      </Card>
    </Wrapper>
  );
}

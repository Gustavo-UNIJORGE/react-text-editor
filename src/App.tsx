import { useState } from 'react'
import TextEditor from './TextEditor';
import './assets/styles/App.css'
import TextPreview from './TextPreview';

function App() {
  const [title, setTitle] = useState(''); 
  const [text, setText] = useState('');

  const handleChange = (_title: string, _text: string) => {
    setTitle(_title);
    setText(_text);
  }
  return (
    <main>
      <span>Editor de Texto Simples</span>
      <TextEditor 
        titleValue={title}
        textValue={text}
        onChange={handleChange}
        placeholder="Digite seu conteúdo aqui..."
        rows={3}
      />
      
      <TextPreview 
        title={title} 
        text={text} 
        isHidden={false}
      ></TextPreview>
    </main>
  )
}

export default App

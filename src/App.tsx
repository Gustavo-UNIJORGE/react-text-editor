import { useState } from 'react'
import TextEditor from './TextEditor';
import './assets/styles/App.css'

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
      
      <div className='text-preview'>
        <div>
          <span className='preview-badge'>Pré-visualização:</span>
        </div>
        <pre>
          <h3>{title || 'Documento sem titulo'}</h3>
            {text || '(vazio)'}
        </pre>
      </div>
    </main>
  )
}

export default App

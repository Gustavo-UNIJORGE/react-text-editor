import { useState } from 'react'
import TextEditor from './TextEditor';
import './App.css'

function App() {
  const [title, setTitle] = useState(''); 
  const [text, setText] = useState('');

  const handleChange = (_title: string, _text: string) => {
    setTitle(_title);
    setText(_text);
  }
  return (
    <>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Editor de Texto Simples</h1>
      <TextEditor 
        titleValue={title}
        textValue={text}
        onChange={handleChange}
        placeholder="Digite seu conteúdo aqui..."
        rows={3}
      />
      
      <div style={{ marginTop: '20px' }}>
        <h2>Pré-visualização:</h2>
        <h3>{title || 'Documento sem titulo'}</h3>
        <pre style={{ 
          whiteSpace: 'pre-wrap',
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px'
          }}>
            {text || '(vazio)'}
        </pre>
      </div>
    </div>
    </>
  )
}

export default App

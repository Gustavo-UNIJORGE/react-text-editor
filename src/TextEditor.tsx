import React, { useState, useRef, useEffect, type ChangeEvent } from 'react';

const TextEditor = ({
    titleValue = '',
    textValue = '',
    onChange,
    placeholder = 'Digite seu texto...',
    rows = 5,
    disabled = false
}) => {
    const [title, setTitle] = useState(titleValue);
    const [text, setText] = useState(textValue);
    const inputRef = useRef(null);
    const textareaRef = useRef(null);
    
    // Atualiza o estado interno quando a prop value muda
/*     useEffect(() => {
        setText(textValue);
    }, [textValue]); */

    useEffect(() => {
        setTitle(titleValue);
        setText(textValue);
    }, [titleValue, textValue]);

    /* const handleChange = (e: ChangeEvent) => {
        if (e.target) {
            if (e.target === inputRef.current) {
                const newTitle = e.target.value;
                setTitle(newTitle);
            } 
            if (e.target === textareaRef.current) {
                const newText = e.target.value;
                setText(newText);
            }
            
        }
        if (onChange) {
            onChange(title, text);
        }
    }; */
    
    const handleTitleChange = (e: React.ChangeEvent) => {
        const newTitle = e.target.value;
        setTitle(newTitle);
        if (onChange) {
            onChange(newTitle, text)
        }
    }

    const handleTextChange = (e: React.ChangeEvent) => {
        const newText = e.target.value;
        setText(newText);
        if(onChange) {
            onChange(title, newText)
        }
    }

    // Auto-ajuste de altura
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);
    
    return (
        <div className='text-editor'>
            <input 
                ref={inputRef}
                type='text'
                value={title}
                onChange={handleTitleChange}
                placeholder='Escreva um titulo...'
                onFocus={(e) => {
                    e.target.style.borderColor = '#4a90e2';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                }}
                />
            <textarea
                ref={textareaRef}
                value={text}
                onChange={handleTextChange}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                style={{
                    minHeight: `${rows * 24}px`
                }}
                onFocus={(e) => {
                    e.target.style.borderColor = '#4a90e2';
                }}
                onBlur={(e) => {
                    e.target.style.borderColor = '#ddd';
                }}
            />
        </div>
    );
};

export default TextEditor;
import { useEffect, useRef, useState } from "react";

const TextPreview = ({
    title = '', 
    text = '',
    isHidden = false,
}) => {
    const [hidden, setHidden] = useState(isHidden);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const previewRef = useRef<HTMLPreElement>(null);

    // Atualiza o componente ao inicia-lo
    useEffect(() => {
        setHidden(isHidden)
    }, [isHidden])
    
    // Causa efeito na classe do preview a partir do useState(hidden)
    useEffect(() => {
        if (previewRef.current)
            previewRef.current.classList.toggle('hidden', hidden);
    }, [hidden])

    // Ativa ou desativa o preview
    const togglePreview = () => {
        setHidden(previousHidden => !previousHidden)
    }

    return(
        <div className='text-preview'>
            <div>
                <button 
                    ref={buttonRef}
                    onClick={togglePreview}
                    className={`preview-badge ${isHidden ? '' : 'active'}`}
                    aria-expanded={!isHidden}
                    >
                        Pré-visualização
                    </button>
            </div>
            <pre
                ref={previewRef}
                className={isHidden ? 'hidden' : ''}
                aria-hidden={isHidden}    
            >
                <h3>{title || 'Documento sem titulo'}</h3>
                    {text || '(vazio)'}
            </pre>
        </div>
    )
};

export default TextPreview;
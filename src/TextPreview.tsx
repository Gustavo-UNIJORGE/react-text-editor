import { useEffect, useRef, useState } from "react";

const TextPreview = ({
    title = '', 
    text = '',
    isHidden = false,
}) => {
    const [hidden, setHidden] = useState(isHidden);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const previewRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        setHidden(isHidden)
    }, [isHidden])

/*     const handleButtonClick = (e) => {
        if (e.target && e.target === buttonRef.current && buttonRef.current) {
            const classname = e.target.classList;
            setHidden(classname.toggle('active'))
        }
    } */

    useEffect(() => {
        if (previewRef.current)
            previewRef.current.classList.toggle('hidden', hidden);
    }, [hidden])

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
const TextPreview = ({title = '', text = ''}) => {

    return(
        <div className='text-preview'>
            <div>
            <span className='preview-badge'>Pré-visualização:</span>
            </div>
            <pre>
            <h3>{title || 'Documento sem titulo'}</h3>
                {text || '(vazio)'}
            </pre>
        </div>
    )
};

export default TextPreview;
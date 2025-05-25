import './Link.css';

function Link ({ url, title }) {
    return (
        <a className='App-link' href={url} rel='noopener noreferrer'>
            {title}
        </a>
    );
};

export default Link;
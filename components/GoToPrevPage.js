import Link from 'next/link';

const GoToPrevPage = ({ query }) => (
    <React.Fragment>
        <Link>
            <a className="arrow_GoToPrevPage" href={ query }>🡐</a>
        </Link>

        <style jsx>
        {`
            .arrow_GoToPrevPage {
                position: absolute;
                top: 10px;
                left: 10px;
                font-size: 25px;
                text-decoration: none;
                color: white;
                font-weight: bold;
                text-shadow: 2px 2px 3px rgba(0,0,0,0.75);
            }        
        `}
        </style>

    </React.Fragment>
);

export default GoToPrevPage;


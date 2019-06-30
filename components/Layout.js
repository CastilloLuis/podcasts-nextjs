import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title }) => (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>
        <header>
            <Link>
                <a>Podcast</a>
            </Link>
        </header>

        { children }

        <style jsx>
        {`
            header {
                color: #fff;
                font-weight: bold;
                background: #8756ca;
                padding: 15px;
                text-align: center;
                text-decoration: none;
            }
        `}
        </style>

        <style jsx global>
            {`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: system-ui;
                    background-color: white;
                }
            
            `}
        </style>
    </div>
);

export default Layout;


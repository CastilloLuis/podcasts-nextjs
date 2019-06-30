import Link from 'next/link';
import Head from 'next/head';

const Layout = ({ children, title, header = true }) => (
    <div>
        <Head>
            <title>{ title }</title>
        </Head>
        {
            header ? 
            <header>
                <Link>
                    <a href="/">Podcast</a>
                </Link>
            </header> : false
        }

        { children }

        <style jsx>
        {`
            header {
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }

            header a {
                color: white;
                font-weight: bold;
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


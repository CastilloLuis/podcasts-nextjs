/*
    BASE: https://github.com/zeit/next.js#custom-error-handling
*/
import Link from 'next/link';

import Layout from '../components/Layout';

class Error extends React.Component {
    static getInitialProps({ res, err }) {
      const statusCode = res ? res.statusCode : err ? err.statusCode : null
      return { statusCode }
    }
  
    render() {
        const { statusCode } = this.props;
        return (
            <Layout title="Oh no :(">
                {
                    statusCode === 404 ?
                    <div className="message">
                        <span>❌</span>
                        <p>Page not found</p>
                        <div><Link><a href="/">Go Back</a></Link></div>
                    </div> : 
                    <div className="message">
                        <h2>Oh no! 😓</h2>
                        <p>Please try later</p>
                        <p><Link><a href="/">Go Back</a></Link></p>
                    </div>            
                }

                <style jsx>
                    {`
                        .message {
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                        }

                        .message img {
                            width: 300px
                        }

                        .message a {
                            color: black;
                            text-decoration: none;
                        }

                        .message p {
                            color: black;
                            font-size: 35px;
                            font-weight: bold;
                        }

                        .message div {
                            padding: 10px;
                            background: #cecece;
                            border: 1px solid #ececec;
                            border-radius: 5px;
                        }

                        .message span {
                            font-size: 40px;
                            color: red;
                            font-weight: bold
                        }
                    `}
                </style>
            </Layout>
        )
    }
  }
  
  export default Error
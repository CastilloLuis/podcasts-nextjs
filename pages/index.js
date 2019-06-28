import 'isomorphic-fetch';

export default class extends React.Component {

    static getInitialProps = async () => {
        const response = await fetch('https://api.audioboom.com/channels/recommended');
        const { body: channels } = await response.json();
        return { channels };
    }

    render() {
        const { channels } = this.props;
        return (
            <div>
                <header>Podcasts</header>

                <div className="channels">
                    {   
                        channels.map((channel, index) => (
                            <div className="channel" key={ index }>
                                <img src={ channel.urls.logo_image.original } alt="Podcast Channel Logo" />
                                <h2>{ channel.title }</h2>
                            </div>
                        ))
                    }
                </div>




                <style jsx>
                {`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    
                    channels {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 15px
                    }

                    a.channel {
                        display: block;
                        margin-bottom: 0.5em;
                        color: #333;
                        text-decoration: none;
                    }
                    .channel img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%;
                    }

                    h2 {
                        padding: 5px;
                        font-size: 0.9em;
                        font-weight: 600;
                        margin: 0;
                        text-align: center;
                    }                    
                `}
                </style>

                <style jsx global>
                    {`
                        body {
                            margin: 0;
                            font-family: system-ui;
                            background-color: white;
                        }
                    
                    `}
                </style>

            </div>
        )
    }
}


import 'isomorphic-fetch';
import Link from 'next/link';

export default class extends React.Component {

    static getInitialProps = async ({ query: { id } }) => {
        const channelId = id;

        const [responseChannel, responseAudios, responseSeries] = await Promise.all([
            fetch(`https://api.audioboom.com/channels/${channelId}`),
            fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`),
            fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`)
        ]);

        const { body: { channel } } = await responseChannel.json();
        const channelData = channel;

        const { body: { audio_clips } } = await responseAudios.json();
        const audioClips = audio_clips;

        const { body: { channels } } = await responseSeries.json();
        const series = channels;

        return { channelData, audioClips, series };
    }

    render() {
        const { channelData, audioClips, series } = this.props;
        console.log(series)
        return (
            <div>
                <Link>
                    <a className="goBack" href="/">🡐</a>
                </Link>
                
                <div style={{width: '100%', height: 150, display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url(${ channelData.urls.logo_image.original }) no-repeat center`, backgroundSize: 'cover'}}>
                    {/* <img src={ channelData.urls.logo_image.original } alt="Podcast logo"/> */}
                    <span className="logoText">{ channelData.title }</span>
                </div>
                    
                <div className="channelWrapper">
                    <h3>Podcasts</h3>
                    {
                        audioClips.map((clip, index) => (
                            <div className="list" key={index}>
                                <span className="list-item-title">{ clip.title }</span>
                                <span className="list-item-description">{ clip.description.substr(0, 100) }...</span>
                            </div>
                        ))
                    }

                    { series.length > 0 ? 
                        <React.Fragment>
                            <h3>Series</h3>
                            series.map((serie) => (
                                <div className="list">
                                    <span className="list-item-title">{ serie.title }</span>
                                    <span className="list-item-description">{ serie.description.substr(0, 100) }</span>                                
                                </div>
                            ))
                        </React.Fragment> : 
                        false
                    }
                </div>
                <style jsx>
                {`

                    h1 {
                        font-weight: bold;
                    }

                    h3 {
                        width: 100%;
                        text-align: left;
                        border-bottom: 1px solid #ececec
                    }

                    .channelWrapper {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 10px
                    }

                    .logoText {
                        font-size: 30px;
                        color: white;
                        font-weight: bold;
                        text-align: center;
                        text-shadow: 2px 2px 3px rgba(0,0,0,0.75);
                    }

                    img {
                        border-radius: 3px;
                        box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        width: 100%
                    }

                    .list {
                        width: 100%;
                        text-align: left;
                        padding: 10px;
                        display: flex;
                        flex-direction: column;
                        cursor: pointer;
                    }

                    .list-item-title {
                        font-size: 15px;
                        font-weight: 500;
                    }

                    .list-item-description {
                        font-size: 13px;
                        color: #333333
                    }

                    .goBack {
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
        )
    }
}
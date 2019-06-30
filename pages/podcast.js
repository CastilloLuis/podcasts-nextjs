import Link from 'next/link'

export default class extends React.Component {

    state = {
        showDescription: false
    }

    static getInitialProps = async ({ query: { id } }) => {
        const response = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
        const { body: { audio_clip } } = await response.json();
        const title = audio_clip.title;
        const description = audio_clip.description;
        const audio = audio_clip.urls.high_mp3;
        const podcastImage = audio_clip.urls.image
        const channelId = audio_clip.channel.id;
        return { title, description, audio, podcastImage, channelId };
    }

    handlePodcastImageClick = () => {
        const { showDescription } = this.state;
        showDescription ? this.setState({showDescription: false}) : this.setState({showDescription: true})
    }

    render() {
        const { title, description, audio, podcastImage, channelId } = this.props;
        return (
            <div className="podcast-wrapper">
                <Link>
                    <a className="goBack" href={`/channel?id=${ channelId }`}>🡐</a>
                </Link>            
                <div className="podcastInfo-wrapper">
                    {
                        !this.state.showDescription ? 
                        (<div onClick={() => this.handlePodcastImageClick()} className="podcastImage-wrapper"><img src={podcastImage} className="podcastPlayerImage" alt="podcast image player"/></div>) : 
                        <div onClick={() => this.handlePodcastImageClick()} className="description-wrapper">
                            <span>{description}</span>
                        </div>
                    }
                </div>

                <div className="player-wrapper">
                    <h4>{ title }</h4>
                    <audio controls src={audio} type="audio/mpeg" />
                </div>
                <style jsx>
                    {`
                        .podcast-wrapper {
                            width: 100%;
                            height: 100vh;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            background: transparent
                        }
                        
                        .podcastInfo-wrapper {
                            width: 100%;
                            height: 100%;
                            display: flex;
                            outline: none;
                            justify-content: center;
                            align-items: center;
                            background: url(${podcastImage}) center no-repeat;
                            background-size: cover
                        }

                        .podcastInfo-wrapper div {
                            width: 100%;
                            height: 100%;
                            background: linear-gradient(0deg, rgba(81, 81, 81, 0.65), rgba(34, 34, 34, 0.74)) 0% 0%;
                            display: flex;
                            justify-content: space-around;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;
                            padding: 20px 15px 56px;
                            text-align: center;                            
                        }

                        .description-wrapper span{
                            color: white;
                            text-shadow: 2px 2px 3px rgba(0,0,0,0.75);
                        }

                        .podcastImage-wrapper {
                            width: 100%;
                            height: 100%;
                        }

                        .podcastPlayerImage {
                            width: 300px;
                            height: 300px;
                            border-radius: 4px;
                            box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                        }

                        .player-wrapper {
                            width: 100%;
                            height: 220px;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;                            
                            background: #b9b9b9;
                        }

                        .player-wrapper audio {
                            outline: none
                        }

                        h4 {
                            color: white;
                            text-shadow: 2px 2px 3px rgba(0,0,0,0.75);
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
                            width: 100%;
                            height: 100%;
                            font-family: system-ui;
                        }
                    
                    `}
                </style>
            </div>
        )
    }
}


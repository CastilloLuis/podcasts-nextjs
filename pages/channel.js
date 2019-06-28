import 'isomorphic-fetch';

export default class extends React.Component {

    static getInitialProps = async ({ query: { id } }) => {
        const channelId = id;

        const responseChannel = await fetch(`https://api.audioboom.com/channels/${channelId}`);
        const { body: { channel } } = await responseChannel.json();
        const channelData = channel;

        const responseAudios = await fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`);
        const { body: { audio_clips } } = await responseAudios.json();
        const audioClips = audio_clips;

        const responseSeries = await fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`);
        const { body: { channels } } = await responseSeries.json();
        const series = channels;

        return { channelData, audioClips, series };
    }

    render() {
        const { channelData, audioClips, series } = this.props;
        return (
            <div>
                <header>Podcasts</header>

                <h1>{ channelData.title }</h1>

                <h2>Podcasts</h2>
                {
                    audioClips.map((clip, index) => (
                        <div key={index}>{ clip.title }</div>
                    ))
                }

                <h2>Series</h2>
                {
                    series.map((clip) => (
                        <div>{ clip.title }</div>
                    ))
                }                

                <style jsx>
                {`
                    header {
                        color: #fff;
                        background: #8756ca;
                        padding: 15px;
                        text-align: center;
                    }
                    
                    h1 {
                        font-weight: bold;
                    }

                    div {
                        width: 100%
                    }
                `}
                </style>
            </div>
        )
    }
}
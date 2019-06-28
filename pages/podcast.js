export default class Podcast extends React.Component {

    static getInitialProps = async ({ query }) => {
        const response = await fetch(`https://api.audioboom.com/audio_clips/${channelId}.mp3`);
        console.log('podcast', response);
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


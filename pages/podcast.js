export default class Podcast extends React.Component {

    static getInitialProps = async ({ query: { id } }) => {
        console.log(query)
        const response = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
        console.log('podcast', response);
        return {}
    }

    render() {
        return (
            <div>
                <h1>PODCAST VIEW</h1>
            </div>
        )
    }
}


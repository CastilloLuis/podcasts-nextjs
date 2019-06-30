import 'isomorphic-fetch';
import Link from 'next/link';

import Layout from '../components/Layout';
import GoToPrevPage from '../components/GoToPrevPage';
import ChannelContentList from '../components/ChannelContentList';

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
        console.log(audioClips)
        return (
            <Layout title={channelData.title} header={false}>

                <GoToPrevPage 
                    query='/'
                />
                <div className="channelHero">
                    <span className="logoText">{ channelData.title }</span>
                </div>

                <ChannelContentList
                    listTitle="Podcasts"
                    items={audioClips}
                    defaultImage={channelData.urls.logo_image.original}
                />
                {
                    series.length > 0 ? 
                    <ChannelContentList
                        listTitle="Series"
                        items={series}
                        defaultImage={channelData.urls.logo_image.original}
                    />  : false
                }              
                    
                <style jsx>
                {`

                    .channelHero {
                        width: 100%; 
                        height: 150px; 
                        display: flex; 
                        justify-content: center; 
                        align-items: center;
                        background: url(${ channelData.urls.logo_image.original }) no-repeat center; 
                        background-size: cover                      
                    }

                    .logoText {
                        font-size: 30px;
                        color: white;
                        font-weight: bold;
                        text-align: center;
                        text-shadow: 2px 2px 3px rgba(0,0,0,0.75);
                    }

                `}
                </style>              
            </Layout>
        )
    }
}
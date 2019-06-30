import 'isomorphic-fetch';
import Link from 'next/link';
import Error from './_error';

import Layout from '../components/Layout';
import GoToPrevPage from '../components/GoToPrevPage';
import ChannelContentList from '../components/ChannelContentList';

export default class extends React.Component {

    static getInitialProps = async ({ query: { id }, res }) => {
        const channelId = id;

        try {
            const [responseChannel, responseAudios, responseSeries] = await Promise.all([
                fetch(`https://api.audioboom.com/channels/${channelId}`),
                fetch(`https://api.audioboom.com/channels/${channelId}/audio_clips`),
                fetch(`https://api.audioboom.com/channels/${channelId}/child_channels`)
            ]);

            if( responseChannel.status >= 400 ) {
                res.statusCode = responseChannel.status;
                return { channelData: null, audioClips: null, series: null, statusCode: responseChannel.status }
            }

            const { body: { channel } } = await responseChannel.json();
            const channelData = channel;

            const { body: { audio_clips } } = await responseAudios.json();
            const audioClips = audio_clips;

            const { body: { channels } } = await responseSeries.json();
            const series = channels;

            return { channelData, audioClips, series, statusCode: 200 };
        } catch (e) {
            return { channelData: null, audioClips: null, series: null, statusCode: 503 }
        }
        
    }

    render() {
        const { channelData, audioClips, series, statusCode } = this.props;
        console.log(audioClips)

        if( statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }

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
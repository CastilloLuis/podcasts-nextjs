import 'isomorphic-fetch';
import Error from 'next/error';

import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

export default class extends React.Component {

    static getInitialProps = async ({ res }) => {
        try {
            const response = await fetch('https://api.audioboom.com/channels/recommended');
            const { body: channels } = await response.json();
            return { channels, statusCode: 200 };
        } catch (e) {
            res.statusCode = 503;
            return  { channels: null, statusCode: 503 }
        }
    }

    render() {
        const { channels, statusCode } = this.props;
        if( statusCode !== 200) {
            return <Error statusCode={statusCode} />
        }
        return (
            <Layout title="Podcast">
                <ChannelGrid 
                    channels={channels}
                />
            </Layout>
        )
    }
}


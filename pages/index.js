import 'isomorphic-fetch';

import Layout from '../components/Layout';
import ChannelGrid from '../components/ChannelGrid';

export default class extends React.Component {

    static getInitialProps = async () => {
        const response = await fetch('https://api.audioboom.com/channels/recommended');
        const { body: channels } = await response.json();
        return { channels };
    }

    render() {
        const { channels } = this.props;
        return (
            <Layout title="Podcast">
                <ChannelGrid 
                    channels={channels}
                />
            </Layout>
        )
    }
}


import { Link } from '../routes';
import slug from '../helpers/utils';

const ChannelGrid = ({ channels }) => (
    <div className="channels">
        {   
            channels.map((channel, index) => (
                // <Link href={`/channel?id=${ channel.id }`} key={ index } prefetch> for NEXT ROUTES 
                <Link 
                    route="channel"
                    params={{ 
                        slug: slug(channel.title),
                        id: channel.id
                    }}
                    key={ index } 
                    prefetch
                >
                    <a className="channel">
                        <img src={ channel.urls.logo_image.original } alt="Podcast Channel Logo" />
                        <h2>{ channel.title }</h2>
                    </a>
                </Link>
            ))
        }

        <style jsx>
            {`
                .channels {
                    display: grid;
                    grid-gap: 15px;
                    padding: 15px;
                    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
                }

                .channel {
                    display: block;
                    border-radius: 3px;
                    box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                    margin-bottom: 0.5em;
                    text-decoration: none;
                    color: #333333
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
    </div>
)

export default ChannelGrid;
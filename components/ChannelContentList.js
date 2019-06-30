import Link from 'next/link';

const ChannelContentList = ({ listTitle, items, defaultImage }) => {
    return (
        <div className="channelWrapper">
            <h3>{ listTitle }</h3>
            {
                items.map((item, index) => (
                    <Link key={index}>
                        <a href={`/podcast?id=${item.id}`} className="list" key={ index }>
                            <img className="list-image" src={item.urls.image ? item.urls.image : item.urls.logo_image.original ? item.urls.logo_image.original : defaultImage} alt="podcast image" />
                            <div className="list-content">
                                <span className="list-item-title">{ item.title }</span>
                                <span className="list-item-description">{ item.description.substr(0, 80) }...</span>
                            </div>
                        </a>
                    </Link>
                ))
            }
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
                        align-items: center;
                        cursor: pointer;
                        text-decoration: none;
                    }

                    .list-image {
                        width: 45px;
                        height: 45px;
                        border-radius: 3px;
                        border: 1px solid #ececec;
                        margin-right: 15px;
                    }

                    .list-content {
                        display: flex;
                        flex-direction: column;
                    }

                    .list-item-title {
                        font-size: 14px;
                        font-weight: 500;
                        color: #191919
                    }

                    .list-item-description {
                        font-size: 13px;
                        color: #333333
                    }

                `}
            </style>               
        </div>
    )
};

export default ChannelContentList;


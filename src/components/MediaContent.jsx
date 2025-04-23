
const MediaContent = ({ type, media_url, hyperlink }) => {
    if (type === 'single_image') {
        return (
            <img src={media_url} className="media-content" />
        )
    } else if(type === 'video') {
        return (
            <video className="media-content" controls>
                <source src={media_url} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    } else if(type === 'folder') {
        return (
            <div className="media-content">
                <a href={hyperlink} target="_blank" rel="noopener noreferrer">
                    <img src={media_url} className="media-content" />
                </a>
            </div>
        )
    }
}

export default MediaContent;

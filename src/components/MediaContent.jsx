import React from "react";
import { Folder2, Folder2Open } from "react-bootstrap-icons";

const MediaContent = ({ type, media_url, hyperlink }) => {
    const videoRef = React.useRef(null);
    const [videoPlayStarted, setVideoPlay] = React.useState(null);
    const [folderClicked, setFolderClicked] = React.useState(false);
    const videoClick = async () => {
        let video = videoRef.current;
        if (!videoPlayStarted) {
            video.play();
            setVideoPlay(true);
        } else {
            video.setAttribute('controls', 'controls');
            if (video.requestFullscreen)
                await video.requestFullscreen();
        }
    };

    const folderClick = () => {
        setFolderClicked(true);
        setTimeout(() => {
            window.open(hyperlink, '_blank', 'noopener, noreferrer');
        }, 1000);
    }

    if (type === 'image') {
        return (
            <div className="flex flex-col mr-8">
                <img src={media_url} className="w-48 h-32 object-cover cursor-pointer" />
                <h6 className="text-sm text-center my-2 text-gray-600">Click to enlarge image</h6>
            </div>
        )
    } else if (type === 'video') {
        return (
            <div className="flex flex-col mr-8">
                <video ref={videoRef} className="w-48 h-32 object-cover cursor-pointer" onClick={videoClick} preload="metadata">
                    <source src={media_url} />
                    Your browser does not support the video tag.
                </video>
                <h6 className="text-sm text-center my-2 text-gray-600">
                    {videoPlayStarted ? 'Click again to go full screen' : 'Click to play video'}
                </h6>
            </div>
        )
    } else if (type === 'folder') {
        return (
            <div className="flex flex-col mr-8">
                <div onClick={folderClick} className="cursor-pointer flex justify-center items-center w-48 h-32 bg-[rgba(80,120,80,0.35)] rounded-xl border-gray-600 border-1">
                    {folderClicked ? <Folder2Open size={32} /> : <Folder2 size={32} />}
                </div>
                <h6 className="text-sm text-center my-2 text-gray-600">Showcase Resources</h6>
            </div>
        )
    }
}

export default MediaContent;

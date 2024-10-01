const addFullSpeedVideo = (video) => {
    video.playbackRate = 16;
}

const verifyVideosInDom = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        if (!video.dataset.acelerated) {
            addFullSpeedVideo(video);
            video.dataset.acelerated = true;
        }
    });
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.tagName === 'VIDEO')
                addFullSpeedVideo(node);

            if (node.querySelectorAll) {
                const allVideos = node.querySelectorAll('video');
                if (allVideos.length > 0) 
                    allVideos.forEach((video) => addFullSpeedVideo(video));
            }
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true  
});

verifyVideosInDom();

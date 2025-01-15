const VideoPlayer = () => {
  return (
    <video
      className="object-fill md:h-96 h-72


      rounded-lg"
      controls
      muted
      autoPlay
    >
      <source src="assets/homepage/welcome.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;

const VideoPlayer = () => {
  return (
    <video
      className="object-fill h-96 rounded-lg"
      controls
      muted
      autoPlay
    >
      <source src="assets/homepage/welcome.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;

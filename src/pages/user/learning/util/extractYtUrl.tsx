const extractYouTubeVideoId = (url: string) => {
  // Regular expression to match YouTube video ID
  var regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  // Execute the regular expression on the URL
  var match = url.match(regExp);
  // Check if there's a match and return the video ID
  return match && match[1];
};

export default extractYouTubeVideoId;

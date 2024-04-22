import React from "react";

interface GoogleMapsEmbedProps {
  src: string;
}

const GoogleMapsEmbed: React.FC<GoogleMapsEmbedProps> = ({ src }) => {
  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;

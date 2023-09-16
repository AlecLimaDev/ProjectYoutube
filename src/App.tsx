import React, { useCallback, useEffect, useState } from "react";
import api from "./helper";
import styled from "styled-components";
import Navbar from "./components/Navbar";

interface LocationState {
  playlistId: string;
  part: string;
  key: string;
  maxResults: number;
}

interface Video {
  snippet: {
    publishedAt: "2013-08-08T03:47:12Z";
    position: number;
    id: number;
    videoOwnerChannelId: string;
    channelId: "UC3KQ5GWANYF8lChqjZpXsQw";
    title: "COMO EU ME SINTO QUANDO.. DIGITO ERRADO";
    description: string;
    playlistId: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      default: {
        width: number;
        height: number;
      };
      medium: {
        url: string;
      };
    };
  };
}

const Wrapper = styled.section`
  text-align: center;
  display: flex;
  box-sizing: border-box;
  text-decoration: none;
  margin: 0;
  padding: 0;
`;

const App: React.FC = () => {
  const [dataApi, setDataApi] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>({} as Video);

  useEffect(() => {
    api.get("/playlistItems").then((response) => {
      setDataApi(response.data.items);
      console.log(response.data.items);
    });
  }, []);

  const changeVideo = useCallback(
    (id: number) => {
      setSelectedVideo(dataApi[id]);
    },
    [dataApi]
  );

  return (
    <Navbar>
      
    </Navbar>
  );
};
export default App;

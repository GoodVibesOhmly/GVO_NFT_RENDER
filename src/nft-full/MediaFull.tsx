import { useContext, useState } from "react";

import { NFTDataContext } from "../context/NFTDataProvider";
import { MediaObject } from "../components/MediaObject";
import { useMediaContext } from "../context/useMediaContext";

export const MediaFull = () => {
  const { getStyles } = useMediaContext();
  const {
    nft: { data },
    metadata: { metadata, error },
  } = useContext(NFTDataContext);

  const getContent = () => {
    if (metadata && data) {
      return (
        <MediaObject
          isFullPage={true}
          contentURI={data.zoraNFT?.contentURI}
          metadata={metadata}
          onError={() => setHasErrored(true)}
        />
      );
    }
    if (error) {
      return <div {...getStyles("mediaLoader")}>error fetching...</div>;
    }
    return <div {...getStyles("mediaLoader")}>loading...</div>;
  };

  const media = getContent();
  return <div {...getStyles("fullMediaWrapper")}>{media}</div>;
};

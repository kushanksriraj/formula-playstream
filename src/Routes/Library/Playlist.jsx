import { useUserData } from "../../hooks";
import { MainSection } from "../../Components";

export const Playlist = () => {
  const {
    selectedPlaylistId,
    getSelectedPlaylist,
    unSelectPlaylistOnClick
  } = useUserData();

  const playlist = getSelectedPlaylist(selectedPlaylistId);

  if (playlist.videos.length) {
    return (
      <div>
        <MainSection
          route={playlist.name}
          videoList={playlist.videos}
          inLibrary={"inLibrary"}
        />
      </div>
    );
  } else {
    return (
      <h4>
        <button onClick={unSelectPlaylistOnClick}>Back to library</button>
        Add some videos here.
      </h4>
    );
  }
};

import { useUserData } from "../../hooks";
import { PlaylistEdit } from "../../Components";

export const ManagePlaylist = ({ setRoute }) => {
  const { playlists } = useUserData();

  return (
    <div>
      <button onClick={() => setRoute("all")}>Back</button>
      {playlists.filter(({ isCustom }) => isCustom).length > 0
        ? playlists
            .filter(({ isCustom }) => isCustom)
            .map((list) => <PlaylistEdit key={list.id} playlist={list} />)
        : "No playlists."}
    </div>
  );
};

// list all custom playlisy, give option to edit or delete -- extract this out in a component

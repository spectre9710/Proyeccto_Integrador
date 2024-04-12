import React, { useContext } from "react";
import "../assets/scss/SideBar.scss";
import SideBarOptions from "./SideBarOptions";
import { ThemeContext } from "../../api/Theme";
import { ExploreOutlined, HomeOutlined, PlaylistPlay, SearchOutlined, EmojiPeople, Album, AddBox} from "@material-ui/icons";


function SideBar() {
    const useStyle = useContext(ThemeContext);
    return (
        <aside style={useStyle.component} className={"aside-bar"}>
            <div className="aside-bar-container">
                <p className={"p1"}>
                    <span>Librería</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={HomeOutlined} href={"/home"} title={"Inicio"} />
                <SideBarOptions className={"lib-sub"} Icon={ExploreOutlined} href={"/home/about"} title={"Acerca de"} />
                <SideBarOptions className={"lib-sub"} Icon={SearchOutlined} href={"/home/search"} title={"Buscar"} />
                <SideBarOptions className={"lib-sub"} Icon={Album} href={"/home/album"} title={"Album"} />
                <SideBarOptions className={"lib-sub"} Icon={EmojiPeople} href={"/home/artist"} title={"Artist"} />
                <SideBarOptions className={"lib-sub"} Icon={AddBox} href={"/home/add"} title={"Agregar"} />
            </div>
            <div className="aside-bar-container playlist">
                <p className={"p1"}>
                    <span>Tu playlist</span>
                </p>
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/reggaeton"} title={"Reggaeton"} />
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/trap"} title={"Trap"} />
                <SideBarOptions className={"lib-sub"} Icon={PlaylistPlay} href={"/home/playlist/pop"} title={"Pop"} />
            </div>
        </aside>
    );
}

export default SideBar;
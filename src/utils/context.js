import { useState, createContext, useContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) =>{
  const [selectedOption, setSelectedOption] = useState("New");
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
  const [search, setSearch] = useState(false);
  const [channelDetail, setChannelDetail] = useState();
  const [searchTerm, setSearchTerm] = useState('');
    return <Context.Provider value={{
        selectedOption,
        setSelectedOption,
        videos,
        setVideos,
        videoDetail,
        setVideoDetail,
        channelDetail,
        setChannelDetail,
        search,
        setSearch,
        searchTerm,
        setSearchTerm
    }}>{children}</Context.Provider>;
}

const useAppContext = () => useContext(Context);

export {
    ContextProvider,
    useAppContext
}
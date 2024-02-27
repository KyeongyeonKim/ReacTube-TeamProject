import { createContext, useContext } from 'react';
import Youtube from './youtube';

export const YoutubeApiContext = createContext();

const youtube = new Youtube();

export function YoutubeApiProvider({ children }) {
  return <YoutubeApiContext.Provider value={youtube}>{children}</YoutubeApiContext.Provider>;
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}

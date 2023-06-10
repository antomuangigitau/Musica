// import home from '../src/assets/Home.png';
// import playlist from '../src/assets/playlist.png';
// import radio from '../src/assets/radio.png';
// import video from '../src/assets/videos.png';
// import profile from '../src/assets/profile.png';
// import logout from '../src/assets/Logout.png';
import { Home, Logout, Playlist, Profile, Radio, Video } from './svgFiles';

export const sidebarItems = [
  {
    path: '/',
    icon: Home,
  },
  {
    path: '/collections',
    icon: Playlist,
  },
  {
    path: '/radio',
    icon: Radio,
  },
  {
    path: '/video',
    icon: Video,
  },
  {
    path: '/profile',
    icon: Profile,
  },
  {
    path: '/logout',
    icon: Logout,
  },
];

export const imgs = [
  {
    id: 1,
    img: '../src/assets/user-1.svg',
  },
  {
    id: 2,
    img: '../src/assets/user-2.svg',
  },
  {
    id: 3,
    img: '../src/assets/user-3.svg',
  },
  {
    id: 4,
    img: '../src/assets/user-4.svg',
  },
  {
    id: 5,
    img: '../src/assets/user-5.svg',
  },
];

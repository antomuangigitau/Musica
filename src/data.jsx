// import home from '../src/assets/Home.png';
// import playlist from '../src/assets/playlist.png';
// import radio from '../src/assets/radio.png';
// import video from '../src/assets/videos.png';
// import profile from '../src/assets/profile.png';
// import logout from '../src/assets/Logout.png';
import { Home, Logout, Playlist, Profile, Radio, Video } from './svgFiles';

export const sidebarItems = [
  {
    title: 'Home',
    path: '/',
    icon: Home,
  },
  {
    title: 'My collections',
    path: '/collections',
    icon: Playlist,
  },
  {
    title: 'Radio',
    path: '/radio',
    icon: Radio,
  },
  {
    title: 'Music videos',
    path: '/video',
    icon: Video,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: Profile,
  },
  {
    title: 'Log Out',
    path: '/logout',
    icon: Logout,
  },
];

export const imgs = [
  {
    id: 1,
    img: '/assets/user-1.svg',
  },
  {
    id: 2,
    img: '/assets/user-2.svg',
  },
  {
    id: 3,
    img: '/assets/user-3.svg',
  },
  {
    id: 4,
    img: '/assets/user-4.svg',
  },
  {
    id: 5,
    img: '/assets/user-5.svg',
  },
];

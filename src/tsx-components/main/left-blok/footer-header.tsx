import React from 'react';
import {AiFillGithub, AiOutlineInstagram} from "react-icons/ai";
import {BiLogoSpotify, BiLogoTelegram} from "react-icons/bi";
import styles from './left-blok-style.module.scss'
const FooterHeader = () => {
   return (
      <div className={`d-flex gap-2 mt-4 ${styles.svg}`}>
         <a href="https://github.com/Air1K"><AiFillGithub/></a>
         <a href="https://www.instagram.com/maks.veremeenko01"><AiOutlineInstagram/></a>
         <a href="https://t.me/airistia"><BiLogoTelegram/></a>
         <a href="https://open.spotify.com/user/314tiakavtxe2wjv2wtuftmxxxz4?si=a8459c9fb5014aaf"><BiLogoSpotify/></a>
      </div>
   );
};

export default FooterHeader;
import React, {  useEffect } from 'react';
import './About.css';
import aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import Footer from '../Footer';
import Slider from 'react-slick';
import comev1 from '../../assets/apnipat212.jpg';
function About(){
    useEffect(() => {
        aos.init({});
    }, []);
    const settings ={
        infinite:true,
        lazyload: true,
        fade:true,
        speed: 300,
        slideToshow:3,
        centerMode: true,
        centerPadding:0
    }

    return (
        <motion.div
        initial={{scaleY:0}}
        animate={{scaleY:1}}
        exit={{scaleY:0}}
        transition={{duration:0.5}}>
        <div className='about'>
           
            <section id="sectionone" class="screen">
                {/*<img src={abot} id="svgs" alt='abts' className="svg"/>*/}
                
                 <svg  id="svgs" width="484" height="125" viewBox="0 0 484 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.15625" y="0.875" width="484" height="124" fill="black">
<rect fill="white" x="0.15625" y="0.875" width="484" height="124"/>
<path d="M168.75 36.125H149.688L145.406 48H139.219L156.594 2.5H161.844L179.25 48H173.094L168.75 36.125ZM151.5 31.1875H166.969L159.219 9.90625L151.5 31.1875Z"/>
<path d="M185.375 48V2.5H200.25C205.188 2.5 208.896 3.52083 211.375 5.5625C213.875 7.60417 215.125 10.625 215.125 14.625C215.125 16.75 214.521 18.6354 213.312 20.2812C212.104 21.9062 210.458 23.1667 208.375 24.0625C210.833 24.75 212.771 26.0625 214.188 28C215.625 29.9167 216.344 32.2083 216.344 34.875C216.344 38.9583 215.021 42.1667 212.375 44.5C209.729 46.8333 205.99 48 201.156 48H185.375ZM191.375 26.7188V43.0938H201.281C204.073 43.0938 206.271 42.375 207.875 40.9375C209.5 39.4792 210.312 37.4792 210.312 34.9375C210.312 29.4583 207.333 26.7188 201.375 26.7188H191.375ZM191.375 21.9062H200.438C203.062 21.9062 205.156 21.25 206.719 19.9375C208.302 18.625 209.094 16.8438 209.094 14.5938C209.094 12.0938 208.365 10.2812 206.906 9.15625C205.448 8.01042 203.229 7.4375 200.25 7.4375H191.375V21.9062Z"/>
<path d="M260.25 26.7188C260.25 31.1771 259.5 35.0729 258 38.4062C256.5 41.7188 254.375 44.25 251.625 46C248.875 47.75 245.667 48.625 242 48.625C238.417 48.625 235.24 47.75 232.469 46C229.698 44.2292 227.542 41.7188 226 38.4688C224.479 35.1979 223.698 31.4167 223.656 27.125V23.8438C223.656 19.4688 224.417 15.6042 225.938 12.25C227.458 8.89583 229.604 6.33333 232.375 4.5625C235.167 2.77083 238.354 1.875 241.938 1.875C245.583 1.875 248.792 2.76042 251.562 4.53125C254.354 6.28125 256.5 8.83333 258 12.1875C259.5 15.5208 260.25 19.4062 260.25 23.8438V26.7188ZM254.281 23.7812C254.281 18.3854 253.198 14.25 251.031 11.375C248.865 8.47917 245.833 7.03125 241.938 7.03125C238.146 7.03125 235.156 8.47917 232.969 11.375C230.802 14.25 229.688 18.25 229.625 23.375V26.7188C229.625 31.9479 230.719 36.0625 232.906 39.0625C235.115 42.0417 238.146 43.5312 242 43.5312C245.875 43.5312 248.875 42.125 251 39.3125C253.125 36.4792 254.219 32.4271 254.281 27.1562V23.7812Z"/>
<path d="M301.281 2.5V33.4375C301.26 37.7292 299.906 41.2396 297.219 43.9688C294.552 46.6979 290.927 48.2292 286.344 48.5625L284.75 48.625C279.771 48.625 275.802 47.2812 272.844 44.5938C269.885 41.9062 268.385 38.2083 268.344 33.5V2.5H274.281V33.3125C274.281 36.6042 275.188 39.1667 277 41C278.812 42.8125 281.396 43.7188 284.75 43.7188C288.146 43.7188 290.74 42.8125 292.531 41C294.344 39.1875 295.25 36.6354 295.25 33.3438V2.5H301.281Z"/>
<path d="M342.188 7.4375H327.562V48H321.594V7.4375H307V2.5H342.188V7.4375Z"/>
<path d="M17.875 104.594H7.1875V123H1.15625V77.5H16.2188C21.3438 77.5 25.2812 78.6667 28.0312 81C30.8021 83.3333 32.1875 86.7292 32.1875 91.1875C32.1875 94.0208 31.4167 96.4896 29.875 98.5938C28.3542 100.698 26.2292 102.271 23.5 103.312L34.1875 122.625V123H27.75L17.875 104.594ZM7.1875 99.6875H16.4062C19.3854 99.6875 21.75 98.9167 23.5 97.375C25.2708 95.8333 26.1562 93.7708 26.1562 91.1875C26.1562 88.375 25.3125 86.2188 23.625 84.7188C21.9583 83.2188 19.5417 82.4583 16.375 82.4375H7.1875V99.6875Z"/>
<path d="M75.625 101.719C75.625 106.177 74.875 110.073 73.375 113.406C71.875 116.719 69.75 119.25 67 121C64.25 122.75 61.0417 123.625 57.375 123.625C53.7917 123.625 50.6146 122.75 47.8438 121C45.0729 119.229 42.9167 116.719 41.375 113.469C39.8542 110.198 39.0729 106.417 39.0312 102.125V98.8438C39.0312 94.4688 39.7917 90.6042 41.3125 87.25C42.8333 83.8958 44.9792 81.3333 47.75 79.5625C50.5417 77.7708 53.7292 76.875 57.3125 76.875C60.9583 76.875 64.1667 77.7604 66.9375 79.5312C69.7292 81.2812 71.875 83.8333 73.375 87.1875C74.875 90.5208 75.625 94.4062 75.625 98.8438V101.719ZM69.6562 98.7812C69.6562 93.3854 68.5729 89.25 66.4062 86.375C64.2396 83.4792 61.2083 82.0312 57.3125 82.0312C53.5208 82.0312 50.5312 83.4792 48.3438 86.375C46.1771 89.25 45.0625 93.25 45 98.375V101.719C45 106.948 46.0938 111.062 48.2812 114.062C50.4896 117.042 53.5208 118.531 57.375 118.531C61.25 118.531 64.25 117.125 66.375 114.312C68.5 111.479 69.5938 107.427 69.6562 102.156V98.7812Z"/>
<path d="M115.188 82.4375H100.562V123H94.5938V82.4375H80V77.5H115.188V82.4375Z"/>
<path d="M144.562 111.125H125.5L121.219 123H115.031L132.406 77.5H137.656L155.062 123H148.906L144.562 111.125ZM127.312 106.188H142.781L135.031 84.9062L127.312 106.188Z"/>
<path d="M177.875 104.594H167.188V123H161.156V77.5H176.219C181.344 77.5 185.281 78.6667 188.031 81C190.802 83.3333 192.188 86.7292 192.188 91.1875C192.188 94.0208 191.417 96.4896 189.875 98.5938C188.354 100.698 186.229 102.271 183.5 103.312L194.188 122.625V123H187.75L177.875 104.594ZM167.188 99.6875H176.406C179.385 99.6875 181.75 98.9167 183.5 97.375C185.271 95.8333 186.156 93.7708 186.156 91.1875C186.156 88.375 185.312 86.2188 183.625 84.7188C181.958 83.2188 179.542 82.4583 176.375 82.4375H167.188V99.6875Z"/>
<path d="M225.75 111.125H206.688L202.406 123H196.219L213.594 77.5H218.844L236.25 123H230.094L225.75 111.125ZM208.5 106.188H223.969L216.219 84.9062L208.5 106.188Z"/>
<path d="M275.469 108.562C274.906 113.375 273.125 117.094 270.125 119.719C267.146 122.323 263.177 123.625 258.219 123.625C252.844 123.625 248.531 121.698 245.281 117.844C242.052 113.99 240.438 108.833 240.438 102.375V98C240.438 93.7708 241.188 90.0521 242.688 86.8438C244.208 83.6354 246.354 81.1771 249.125 79.4688C251.896 77.7396 255.104 76.875 258.75 76.875C263.583 76.875 267.458 78.2292 270.375 80.9375C273.292 83.625 274.99 87.3542 275.469 92.125H269.438C268.917 88.5 267.781 85.875 266.031 84.25C264.302 82.625 261.875 81.8125 258.75 81.8125C254.917 81.8125 251.906 83.2292 249.719 86.0625C247.552 88.8958 246.469 92.9271 246.469 98.1562V102.562C246.469 107.5 247.5 111.427 249.562 114.344C251.625 117.26 254.51 118.719 258.219 118.719C261.552 118.719 264.104 117.969 265.875 116.469C267.667 114.948 268.854 112.312 269.438 108.562H275.469Z"/>
<path d="M314.188 82.4375H299.562V123H293.594V82.4375H279V77.5H314.188V82.4375Z"/>
<path d="M369.031 108.562C368.469 113.375 366.688 117.094 363.688 119.719C360.708 122.323 356.74 123.625 351.781 123.625C346.406 123.625 342.094 121.698 338.844 117.844C335.615 113.99 334 108.833 334 102.375V98C334 93.7708 334.75 90.0521 336.25 86.8438C337.771 83.6354 339.917 81.1771 342.688 79.4688C345.458 77.7396 348.667 76.875 352.312 76.875C357.146 76.875 361.021 78.2292 363.938 80.9375C366.854 83.625 368.552 87.3542 369.031 92.125H363C362.479 88.5 361.344 85.875 359.594 84.25C357.865 82.625 355.438 81.8125 352.312 81.8125C348.479 81.8125 345.469 83.2292 343.281 86.0625C341.115 88.8958 340.031 92.9271 340.031 98.1562V102.562C340.031 107.5 341.062 111.427 343.125 114.344C345.188 117.26 348.073 118.719 351.781 118.719C355.115 118.719 357.667 117.969 359.438 116.469C361.229 114.948 362.417 112.312 363 108.562H369.031Z"/>
<path d="M383.281 118.094H404.844V123H377.25V77.5H383.281V118.094Z"/>
<path d="M442.031 77.5V108.438C442.01 112.729 440.656 116.24 437.969 118.969C435.302 121.698 431.677 123.229 427.094 123.562L425.5 123.625C420.521 123.625 416.552 122.281 413.594 119.594C410.635 116.906 409.135 113.208 409.094 108.5V77.5H415.031V108.312C415.031 111.604 415.938 114.167 417.75 116C419.562 117.812 422.146 118.719 425.5 118.719C428.896 118.719 431.49 117.812 433.281 116C435.094 114.188 436 111.635 436 108.344V77.5H442.031Z"/>
<path d="M451.5 123V77.5H466.375C471.312 77.5 475.021 78.5208 477.5 80.5625C480 82.6042 481.25 85.625 481.25 89.625C481.25 91.75 480.646 93.6354 479.438 95.2812C478.229 96.9062 476.583 98.1667 474.5 99.0625C476.958 99.75 478.896 101.062 480.312 103C481.75 104.917 482.469 107.208 482.469 109.875C482.469 113.958 481.146 117.167 478.5 119.5C475.854 121.833 472.115 123 467.281 123H451.5ZM457.5 101.719V118.094H467.406C470.198 118.094 472.396 117.375 474 115.938C475.625 114.479 476.438 112.479 476.438 109.938C476.438 104.458 473.458 101.719 467.5 101.719H457.5ZM457.5 96.9062H466.562C469.188 96.9062 471.281 96.25 472.844 94.9375C474.427 93.625 475.219 91.8438 475.219 89.5938C475.219 87.0938 474.49 85.2812 473.031 84.1562C471.573 83.0104 469.354 82.4375 466.375 82.4375H457.5V96.9062Z"/>
</mask>
<path d="M168.75 36.125H149.688L145.406 48H139.219L156.594 2.5H161.844L179.25 48H173.094L168.75 36.125ZM151.5 31.1875H166.969L159.219 9.90625L151.5 31.1875Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M185.375 48V2.5H200.25C205.188 2.5 208.896 3.52083 211.375 5.5625C213.875 7.60417 215.125 10.625 215.125 14.625C215.125 16.75 214.521 18.6354 213.312 20.2812C212.104 21.9062 210.458 23.1667 208.375 24.0625C210.833 24.75 212.771 26.0625 214.188 28C215.625 29.9167 216.344 32.2083 216.344 34.875C216.344 38.9583 215.021 42.1667 212.375 44.5C209.729 46.8333 205.99 48 201.156 48H185.375ZM191.375 26.7188V43.0938H201.281C204.073 43.0938 206.271 42.375 207.875 40.9375C209.5 39.4792 210.312 37.4792 210.312 34.9375C210.312 29.4583 207.333 26.7188 201.375 26.7188H191.375ZM191.375 21.9062H200.438C203.062 21.9062 205.156 21.25 206.719 19.9375C208.302 18.625 209.094 16.8438 209.094 14.5938C209.094 12.0938 208.365 10.2812 206.906 9.15625C205.448 8.01042 203.229 7.4375 200.25 7.4375H191.375V21.9062Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M260.25 26.7188C260.25 31.1771 259.5 35.0729 258 38.4062C256.5 41.7188 254.375 44.25 251.625 46C248.875 47.75 245.667 48.625 242 48.625C238.417 48.625 235.24 47.75 232.469 46C229.698 44.2292 227.542 41.7188 226 38.4688C224.479 35.1979 223.698 31.4167 223.656 27.125V23.8438C223.656 19.4688 224.417 15.6042 225.938 12.25C227.458 8.89583 229.604 6.33333 232.375 4.5625C235.167 2.77083 238.354 1.875 241.938 1.875C245.583 1.875 248.792 2.76042 251.562 4.53125C254.354 6.28125 256.5 8.83333 258 12.1875C259.5 15.5208 260.25 19.4062 260.25 23.8438V26.7188ZM254.281 23.7812C254.281 18.3854 253.198 14.25 251.031 11.375C248.865 8.47917 245.833 7.03125 241.938 7.03125C238.146 7.03125 235.156 8.47917 232.969 11.375C230.802 14.25 229.688 18.25 229.625 23.375V26.7188C229.625 31.9479 230.719 36.0625 232.906 39.0625C235.115 42.0417 238.146 43.5312 242 43.5312C245.875 43.5312 248.875 42.125 251 39.3125C253.125 36.4792 254.219 32.4271 254.281 27.1562V23.7812Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M301.281 2.5V33.4375C301.26 37.7292 299.906 41.2396 297.219 43.9688C294.552 46.6979 290.927 48.2292 286.344 48.5625L284.75 48.625C279.771 48.625 275.802 47.2812 272.844 44.5938C269.885 41.9062 268.385 38.2083 268.344 33.5V2.5H274.281V33.3125C274.281 36.6042 275.188 39.1667 277 41C278.812 42.8125 281.396 43.7188 284.75 43.7188C288.146 43.7188 290.74 42.8125 292.531 41C294.344 39.1875 295.25 36.6354 295.25 33.3438V2.5H301.281Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M342.188 7.4375H327.562V48H321.594V7.4375H307V2.5H342.188V7.4375Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M17.875 104.594H7.1875V123H1.15625V77.5H16.2188C21.3438 77.5 25.2812 78.6667 28.0312 81C30.8021 83.3333 32.1875 86.7292 32.1875 91.1875C32.1875 94.0208 31.4167 96.4896 29.875 98.5938C28.3542 100.698 26.2292 102.271 23.5 103.312L34.1875 122.625V123H27.75L17.875 104.594ZM7.1875 99.6875H16.4062C19.3854 99.6875 21.75 98.9167 23.5 97.375C25.2708 95.8333 26.1562 93.7708 26.1562 91.1875C26.1562 88.375 25.3125 86.2188 23.625 84.7188C21.9583 83.2188 19.5417 82.4583 16.375 82.4375H7.1875V99.6875Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M75.625 101.719C75.625 106.177 74.875 110.073 73.375 113.406C71.875 116.719 69.75 119.25 67 121C64.25 122.75 61.0417 123.625 57.375 123.625C53.7917 123.625 50.6146 122.75 47.8438 121C45.0729 119.229 42.9167 116.719 41.375 113.469C39.8542 110.198 39.0729 106.417 39.0312 102.125V98.8438C39.0312 94.4688 39.7917 90.6042 41.3125 87.25C42.8333 83.8958 44.9792 81.3333 47.75 79.5625C50.5417 77.7708 53.7292 76.875 57.3125 76.875C60.9583 76.875 64.1667 77.7604 66.9375 79.5312C69.7292 81.2812 71.875 83.8333 73.375 87.1875C74.875 90.5208 75.625 94.4062 75.625 98.8438V101.719ZM69.6562 98.7812C69.6562 93.3854 68.5729 89.25 66.4062 86.375C64.2396 83.4792 61.2083 82.0312 57.3125 82.0312C53.5208 82.0312 50.5312 83.4792 48.3438 86.375C46.1771 89.25 45.0625 93.25 45 98.375V101.719C45 106.948 46.0938 111.062 48.2812 114.062C50.4896 117.042 53.5208 118.531 57.375 118.531C61.25 118.531 64.25 117.125 66.375 114.312C68.5 111.479 69.5938 107.427 69.6562 102.156V98.7812Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M115.188 82.4375H100.562V123H94.5938V82.4375H80V77.5H115.188V82.4375Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M144.562 111.125H125.5L121.219 123H115.031L132.406 77.5H137.656L155.062 123H148.906L144.562 111.125ZM127.312 106.188H142.781L135.031 84.9062L127.312 106.188Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M177.875 104.594H167.188V123H161.156V77.5H176.219C181.344 77.5 185.281 78.6667 188.031 81C190.802 83.3333 192.188 86.7292 192.188 91.1875C192.188 94.0208 191.417 96.4896 189.875 98.5938C188.354 100.698 186.229 102.271 183.5 103.312L194.188 122.625V123H187.75L177.875 104.594ZM167.188 99.6875H176.406C179.385 99.6875 181.75 98.9167 183.5 97.375C185.271 95.8333 186.156 93.7708 186.156 91.1875C186.156 88.375 185.312 86.2188 183.625 84.7188C181.958 83.2188 179.542 82.4583 176.375 82.4375H167.188V99.6875Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M225.75 111.125H206.688L202.406 123H196.219L213.594 77.5H218.844L236.25 123H230.094L225.75 111.125ZM208.5 106.188H223.969L216.219 84.9062L208.5 106.188Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M275.469 108.562C274.906 113.375 273.125 117.094 270.125 119.719C267.146 122.323 263.177 123.625 258.219 123.625C252.844 123.625 248.531 121.698 245.281 117.844C242.052 113.99 240.438 108.833 240.438 102.375V98C240.438 93.7708 241.188 90.0521 242.688 86.8438C244.208 83.6354 246.354 81.1771 249.125 79.4688C251.896 77.7396 255.104 76.875 258.75 76.875C263.583 76.875 267.458 78.2292 270.375 80.9375C273.292 83.625 274.99 87.3542 275.469 92.125H269.438C268.917 88.5 267.781 85.875 266.031 84.25C264.302 82.625 261.875 81.8125 258.75 81.8125C254.917 81.8125 251.906 83.2292 249.719 86.0625C247.552 88.8958 246.469 92.9271 246.469 98.1562V102.562C246.469 107.5 247.5 111.427 249.562 114.344C251.625 117.26 254.51 118.719 258.219 118.719C261.552 118.719 264.104 117.969 265.875 116.469C267.667 114.948 268.854 112.312 269.438 108.562H275.469Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M314.188 82.4375H299.562V123H293.594V82.4375H279V77.5H314.188V82.4375Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M369.031 108.562C368.469 113.375 366.688 117.094 363.688 119.719C360.708 122.323 356.74 123.625 351.781 123.625C346.406 123.625 342.094 121.698 338.844 117.844C335.615 113.99 334 108.833 334 102.375V98C334 93.7708 334.75 90.0521 336.25 86.8438C337.771 83.6354 339.917 81.1771 342.688 79.4688C345.458 77.7396 348.667 76.875 352.312 76.875C357.146 76.875 361.021 78.2292 363.938 80.9375C366.854 83.625 368.552 87.3542 369.031 92.125H363C362.479 88.5 361.344 85.875 359.594 84.25C357.865 82.625 355.438 81.8125 352.312 81.8125C348.479 81.8125 345.469 83.2292 343.281 86.0625C341.115 88.8958 340.031 92.9271 340.031 98.1562V102.562C340.031 107.5 341.062 111.427 343.125 114.344C345.188 117.26 348.073 118.719 351.781 118.719C355.115 118.719 357.667 117.969 359.438 116.469C361.229 114.948 362.417 112.312 363 108.562H369.031Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M383.281 118.094H404.844V123H377.25V77.5H383.281V118.094Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M442.031 77.5V108.438C442.01 112.729 440.656 116.24 437.969 118.969C435.302 121.698 431.677 123.229 427.094 123.562L425.5 123.625C420.521 123.625 416.552 122.281 413.594 119.594C410.635 116.906 409.135 113.208 409.094 108.5V77.5H415.031V108.312C415.031 111.604 415.938 114.167 417.75 116C419.562 117.812 422.146 118.719 425.5 118.719C428.896 118.719 431.49 117.812 433.281 116C435.094 114.188 436 111.635 436 108.344V77.5H442.031Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
<path d="M451.5 123V77.5H466.375C471.312 77.5 475.021 78.5208 477.5 80.5625C480 82.6042 481.25 85.625 481.25 89.625C481.25 91.75 480.646 93.6354 479.438 95.2812C478.229 96.9062 476.583 98.1667 474.5 99.0625C476.958 99.75 478.896 101.062 480.312 103C481.75 104.917 482.469 107.208 482.469 109.875C482.469 113.958 481.146 117.167 478.5 119.5C475.854 121.833 472.115 123 467.281 123H451.5ZM457.5 101.719V118.094H467.406C470.198 118.094 472.396 117.375 474 115.938C475.625 114.479 476.438 112.479 476.438 109.938C476.438 104.458 473.458 101.719 467.5 101.719H457.5ZM457.5 96.9062H466.562C469.188 96.9062 471.281 96.25 472.844 94.9375C474.427 93.625 475.219 91.8438 475.219 89.5938C475.219 87.0938 474.49 85.2812 473.031 84.1562C471.573 83.0104 469.354 82.4375 466.375 82.4375H457.5V96.9062Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1)"/>
</svg>
              
            </section>       

            <section id="sectiontwo" class="contents">
                <div className="grid">
                <Slider {...settings}>
                    <div data-aos="flip-left" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>WHAT IS ROTARACT CLUB?</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>01</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                >ROTARACT CLUB IS A GROUP OF PEOPLE OF AGE 18
                                AND ABOVE IN ORDER TO EXCHANGE IDEAS WITH LEADERS IN,
                                COMMUNITY, DEVELOP LEADERSHIP AND PROFESSIONAL SERVICES 
                                AND HAVE THROUGH THE WORK.
                                <p> ...</p>
                                <p>HISTORY OF ROTARY, ROTARACT AND INTERACT</p> 
                                <p>Rotary started with the vision of one man — Paul Harris. The Chicago 
                                attorney formed the Rotary Club of Chicago on 23 February 1905, so professionals 
                                with diverse backgrounds could exchange ideas and form meaningful, lifelong friendships. 
                                Over time, Rotary's reach and vision gradually extended to humanitarian service.
                                Rotaract originally began as a Rotary International youth program in 1968 at Charlotte 
                                North Rotary Club in Charlotte, North Carolina,...</p> 
                                </span>
                            </p>
     
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            
                        </div>
                    </div>
                    <div data-aos="fade-up" class="boxes">
                        <div data-aos="zoom-in"class="mhead">
                            <p><span>contin..</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>02</span></h4>
                        </div>
                        <div data-aos="fade-right"class="mtext">
                            <p>
                                <span
                                >
                                United States, and has grown into a major organization of over 10,904 clubs spread around 
                                the world and over 203,000 members in 189 countrieThe first Interact club outside the United States 
                                was certified in India in January 1963. World 
                                Interact Week was first observed in 1964. In response to input from clubs and Rotary committees, 
                                Rotary opened Interact membership to young women in 1968. The annual Interact Video Awards were introduced in 2009.

                                </span>
                            </p>
     
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                                <img src={comev1} data-aos="zoom-in"class="aboutust" alt=""/>
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="grid">
                <Slider {...settings}>
                    <div data-aos="fade-up" class="boxes">
                        <div data-aos="zoom-in"class="mhead">
                            <p><span>WHAT WE DO</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>02</span></h4>
                        </div>
                        <div data-aos="fade-right"class="mtext">
                            <p>
                                <span
                                >IN COMMUNITIES WORLD WIDE. WE WORK TOGETHER SIDE BY SIDE TO BEING ACTION
                                THROUGH THE SERVICE. FROM CITIES TO VILLAGES, ROTARACT IS CHANGING COMMUNITY
                                LIKE YOURS. 
                                WE DECIDE HOW TO RUN AND ORGANISE OUR OWN CLUBS. MANAGE OUR OWN FUNDS. WE PLAN TO CARRY 
                                OUT PROJECTS, SERVICES WITH CONCEPTION.
                                WE BELIEVE IN SHARING THE RESPONSIBILITY TO TAKE ACTION ON OUR WORLDS PERSISTENCE ISSUES
                                </span>
                            </p>
     
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>Avenues</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                >The four Avenues of Service of Rotaract are 
                                <p>• COMMUNITY SERVICE</p>
                                <p>• CLUB SERVICE</p>
                                <p>• PROFESSIONAL DEVELOPMENT</p>
                                <p>• INTERNATIONAL SERVICE</p>
                               This 4 Avenues form the base of the committees in each Rotaract club
                               Committees should meet at least once a month to discuss plans and activities and 
                               share them with the president. All committee activities and expenses are subject to board approval.                               
                                </span>
                            </p>
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>Avenues</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                ><h80>COMMUNITY SERVICE</h80>
                                 <h81><p>1.  Responsibility of seeking opportunities to enhance knowledge and understanding of local community needs and problems. </p> 
                                <p>2.	Formulating and developing appropriate activities for serving the local community. </p>
                                <p>3.	Responsibility to initiate and plan one major activity each year which shall involve all or most of the clubs nationally or locally.</p>
                                 </h81>
                                </span>
                            </p>
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>Avenues</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                ><h80>INTERNATIONAL SERVICE</h80>
                                 <h81><p>1. Primary responsibility for seeking opportunities to enhance knowledge and understanding of worldwide needs and problems.</p> 
                                <p>2.	Developing activities to give service for promoting international understanding and goodwill toward all people.</p>
                                <p>3.	Responsibility for initiating and planning one major activity each year which shall involve all or most of the clubs around the globe.</p>
                                 </h81>
                                </span>
                            </p>
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>Avenues</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                ><h80>CLUB SERVICE</h80>
                                <h81><p>1.	Development of strategies for membership enlargement and retention.</p> 
                                <p>2.	Monitoring attendance of each member. </p>
                                <p>3.	Overseeing the production and distribution of the club bulletin.</p>
                                <p>4.	Planning for fellowship activities for the members.</p></h81>
                                </span>
                            </p>
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>Avenues</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                ><h80>PROFESSIONAL DEVELOPMENT</h80>
                                 <h81><p>1.  Reviewing suggestions and evolving plans to provide opportunities for professional development for the club’s membership. </p> 
                                <p>2.	Developing programs designed to provide information about a wide cross-section of businesses and professions. </p>
                                <p>3.	Developing plans to stimulate awareness and acceptance of high ethical standards in business and professional life.</p>
                                 </h81>
                                </span>
                            </p>
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
                <div className="grid">
                <Slider {...settings}>
                    <div data-aos="fade-right" class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>OUR MISSION</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>03</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                >WE PROVIDE SERVICE TO OTHERS. PROMOTE INTEGRITY. GOOD WILL AND PEACE THROUGH OUR
                                BUISNESS, PROFESSIONAL AND COMMUNITY LEADERS.
                                </span>
                            </p>
     
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                    
                    
                </Slider>
                </div>
                <div className="grid">
                <Slider {...settings}>
                    <div data-aos="fade-right"class="boxes">
                        <div data-aos="zoom-in" class="mhead">
                            <p><span>OUR VISION</span></p>
                        </div>
                        <div class="slide-text">
                            <h4><span>04</span></h4>
                        </div>
                        <div data-aos="fade-left"class="mtext">
                            <p>
                                <span
                                >-A WORLD WHERE EVRYONE HAS A DECENT PLACE TO LIVE.
                                -A WORLD OF HUMANE COMMUNITY IN WHICH ALL ANIMALS ARE TREATED WITH RESPECTED AND KNDNESS.
                                -A WPRLD WHERE THE DIVERSITY OF LIFE THRIVES AND PEOPLE ACT TO CONSERVE NATURE FOR ITS OWN SAKE AND ITS 
                                ABILITY TO FULLFILL OUR NEEDS AND ENRICH OUR LIVES.
                                -A WORLD IN WHICH EVERY CHILD ATTAINS THE RIGHT TO SURVIVAL, PROTECTION, DEVELOPMENT AND PARTICIPATION.
                                -A WORLD FREE OF DRAINING DISEASES WHERE ALL PEOPLE ARE PROTECTED BY STRONG PUBLIC HEALTH SYSTEMS.
                                -A WORLD OF HOPE, TOLERANCE AND SOCIAL JUSTICE, WHERE POVERTY HAS BEEN OVERCOME AND ALL PEOPLE LIVE IN DIGINITY
                                AND SECURITY..
                                </span>
                            </p>
     
                        </div>
                        <div class="slide-detail-facts">
                            <div class="addons">
                                    <Link to='/joinus'class="g">JOIN US</Link>
                                    <Link to='/team'class="g">2021-22 Board</Link>
                            </div>
                            <div class="slide-img">
                            </div>
                        </div>
                    </div>
                </Slider>
                </div>
                
            </section>
            <div class="fotres">
            <Footer/>
            </div>
            
            
           
            
        </div>
    </motion.div>
        
    );

}
export default About;
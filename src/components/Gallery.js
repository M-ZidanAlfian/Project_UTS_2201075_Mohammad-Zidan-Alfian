//import React from 'react';
// import { useSpring, animated } from 'react-spring';

const Gallery=()=>{
    // const fadeIn = useSpring({
    //     from: { opacity: -2},
    //     to: { opacity: 1},
    //     config: { duration: 1500 },
    // });
    
    return(
        <section class="gallery section" id="gallery">
            <h2 class="section-title">Gallery</h2>

            <div class="gallery__container bd-grid">
                <div class="gallery__img">
                    <img src="./assets/img/journey.jpg" alt=""></img>

                    <div class="gallery__link">
                        <a href="#" class="gallery__link-name">"Liburan" </a>
                    </div>
                </div>
                <div class="gallery__img">
                    <img src="./assets/img/barudak.jpeg" alt=""></img>

                    <div class="gallery__link">
                            <a href="#" class="gallery__link-name"> "Bersama Barudak"</a>
                    </div>
                </div>
                <div class="gallery__img">
                    <img src="./assets/img/kucing.jpeg" alt=""></img>

                    <div class="gallery__link">
                         <a href="#" class="gallery__link-name"> " Kucing Bobo"</a>
                    </div>
                </div>
                <div class="gallery__img">
                    <img src="./assets/img/masjid.jpeg" alt=""></img>

                    <div class="gallery__link">
                        <a href="#" class="gallery__link-name"> "Bayangan"</a>
                    </div>
                </div>
                <div class="gallery__img">
                    <img src="./assets/img/gambar2_11zon.jpg" alt=""></img>

                    <div class="gallery__link">
                        <a href="#" class="gallery__link-name"> "Favorite Anime"</a>
                    </div>
                </div>
               
            </div>
        </section>
    );
}

export default Gallery;
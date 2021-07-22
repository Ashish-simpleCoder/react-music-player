import React from 'react'

import music_data from "./Comps/music_data"

const App = () => {
    return (
        <main>
           <section class="music_list_displayer">
               {
                   music_data.map(music=>{
                       return(
                           <div className='each_music_container' id={music.id}>
                               <img class='img' src={music.img} />
                               {/* <audio src={music.src} controls></audio> */}
                            <div class='details'>
                                <h2 class='song_name'>{music.name}</h2>
                                <h3 class='artist_name'>{music.artist}</h3>
                            </div>
                           </div>
                       )
                   })
               }
           </section>
        </main>
    )
}

export default App

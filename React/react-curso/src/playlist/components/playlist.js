import React from 'react';
import Media from './media.js';
import Play from '../../icons/components/play';


//Componente funcional
function Playlist(props) {
        const playlist = props.data.categories[0].playlist;
        console.log(props.data);
        return (
            <div className="Playlist">
                <Play color="red" size="60"/>
                {
                    playlist.map((item) => {
                        // En el caso que se llamen de igual manera
                        return <Media {...item} key={item.id}/>
                        //return <Media key={item.id}
                        //              titulo={item.title}
                        //              autor={item.author}
                        //              imagen={item.cover}/>
                    })
                }
            </div>
        )
}

export default Playlist;
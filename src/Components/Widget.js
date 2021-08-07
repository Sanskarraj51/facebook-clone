import React from 'react'
import "./Widget.css"

function Widget() {
    return (
        <div className="widget">
           
           <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookIndia%2F&tabs=timeline&width=280&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="280" 
             height="100%" 
             style={{border:"none",overflow:"hidden"} }
             scrolling="no" 
             frameborder="0" 
             allowTransparency="true"
             allow="encrypted-media"
             title="This is a unique title" ></iframe>

        </div>
    )
}

export default Widget;

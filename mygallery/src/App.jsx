import { useState, useEffect } from 'react'

import './App.css'

export default function App() {
  const [thumbnails, setThumbnails] = useState([])
  const[index, setIndex] =useState(0)

 useEffect( ()=> {
async function fetchData(){
  const response = await fetch("https://week-6-api.vercel.app/api/images")
  const thumbnails = await response.json()
     console.log(thumbnails)
    const firstelement = thumbnails[1].id
    console.log(firstelement)
    setThumbnails(thumbnails)
}

fetchData() } , [])

function createBigImage(index){
  setIndex(index)
}

function nextImage() {
 if (index < thumbnails.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
}


function previousImage () {
  if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(thumbnails.length - 1)
    }
}

  return (
    <>
<h1>The Magnificent Frog Gallery</h1>
<section className='topSeciton'>
       {thumbnails.map((thumbnail, index) => (
         <div key={thumbnail.id} className='thumbnail-container'>
          <figure>
         <img className='thumbnail'  
         src={thumbnail.url} 
         alt={thumbnail.alt}  
         onClick={()=> createBigImage(index)}/>
         <figurecaption>{thumbnail.title}</figurecaption>
         </figure>
         </div>)
          ) }
</section>


<section className='middleSection'>
  <button onClick={nextImage}>Right</button>
  <button onClick={previousImage}>Left</button>
</section>


<section className='bottomSection'>
       <div className='bigImage-container'>
        {thumbnails.length > 0 ? (
          <img src={thumbnails[index].url} alt={thumbnails[index].alt}/>
        ) : (
          <p>no images</p>
        )}
       </div>
       </section>
    </>
  )
}



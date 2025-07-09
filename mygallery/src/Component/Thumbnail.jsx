

export default function Thumbnail({thumbnail, index}) {

    return (
        <div key={thumbnail.id} className='thumbnail-container'>
         <img className='thumbnail'  
         src={thumbnail.url} 
         alt={thumbnail.alt}  
         onClick={()=> setIndex(index)}/>
         </div>
    )
}
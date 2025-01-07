"use client"
import React,{useRef} from 'react'

function CardDetailPopup({item,setSelectedCard}) {
  return (
    <div className='popupBg'>
    <div className="container my-5">
      <div style={{position:'relative'}} className="card shadow-lg border-0">
        <div className='row' style={{position:'absolute',right:'4rem',top:'0.5rem'}}>
         <div>
        <div onClick={()=>setSelectedCard(null)} className='lineCircle dropuslinecross'>
        <svg width="12" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7994 15.8237L12.6097 9.63278L18.7972 3.44303L15.6168 0.259277L9.42594 6.44903L3.23619 0.259277L0.0546875 3.44303L6.24219 9.63278L0.0546875 15.8225L3.23844 19.004L9.42594 12.8143L15.6134 19.004L18.7994 15.8237Z" fill="white"/>
        </svg>
        </div>
        </div>   
        </div>
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={`${item.imageUrl}`}
              alt="Card Image"
              className="img-fluid rounded-start"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center p-4">
            <h2 className="heading50 mt-4">{item.heading}</h2>
            <p className="paragraphText pb-3 hide-scrollbar" style={{maxHeight:'200px'}}>
              {item.description}
            </p>
          {item.tags.length > 0 &&  
            <div className="tags">
                    {item.tags.map((tag,index)=>(<button key={index}>{tag}</button>))}
            </div>
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CardDetailPopup
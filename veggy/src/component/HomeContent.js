import React from 'react'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';

const HomeContent = () => {
    return (
            <div id='container'>
                <div className="container-mid">
                    <MDBCarousel showControls>
                        <MDBCarouselItem itemId={1}>
                            <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='img..' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={2}>
                            <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='img..' />
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId={3}>
                            <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='img..' />
                        </MDBCarouselItem>
                    </MDBCarousel>
                </div>
                <hr />
            </div>
    )
}

export default HomeContent;
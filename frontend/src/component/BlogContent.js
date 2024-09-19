import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit'
import shopping from "../assets/shopping.jpg"

const BlogContent = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol className='blog-content-1 mt-4'>
                    <div>
                        <img src={shopping} alt="" />
                    </div>
                    <div>
                        <p className='ms-3 para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque laboriosam nobis inventore sunt, voluptate commodi recusandae ducimus dolore fuga odio numquam eligendi animi veritatis eum mollitia quisquam ullam officiis perferendis temporibus doloribus assumenda quod officia odit? Tenetur iste, perspiciatis ipsum dolor minima repellat! Aliquam suscipit rem eum neque fugit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit molestiae enim fuga quidem, earum possimus blanditiis sint voluptate veniam dolores id temporibus illum perspiciatis mollitia incidunt voluptates reprehenderit minus consectetur! Ea, placeat aspernatur dolores mollitia saepe deleniti, animi ipsam, quos maxime voluptatum quis assumenda iusto eveniet quam suscipit repellendus deserunt.</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default BlogContent

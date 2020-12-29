import React from 'react';
import { MDBCard, MDBCardTitle } from 'mdbreact';

const TrendingCard = () => {
    return (
        <MDBCard
          className='card-image rounded'
          style={{
            backgroundImage:
              "url('https://picsum.photos/300/300')", 
              overflow: "hidden"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong px-3 mx-3'>
            <div >
              <MDBCardTitle tag='h3' className='pt-1'>
                <strong>This is card title</strong>
              </MDBCardTitle>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </MDBCard>
    )
}

export default TrendingCard;

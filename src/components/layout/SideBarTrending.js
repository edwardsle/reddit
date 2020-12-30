import React from 'react';
import {MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';

const SideBarTrending = () => {
    return (
        <MDBCard className="z-depth-0" style={{ border: "1px solid #c3c4c5" }}>
            <MDBCardBody>
                <p><strong>Trending Communities</strong></p>
                <MDBRow className="mb-4">
                    <MDBCol size="2" >
                        <img src="https://styles.redditmedia.com/t5_2qh2b/styles/communityIcon_puutmlnqk0t51.png" 
                            className="black" 
                            width="30px"
                            style={{ borderRadius: "25px" }} 
                            alt="..." />
                    </MDBCol>
                    <MDBCol size="5" className="m-0 p-0" style={{ lineHeight: "0.9"}}>
                        <small>r/iphone<br/>2,932,975 members</small>
                    </MDBCol>
                    <MDBCol size="5" className="text-right" >
                        <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0 btn-block"><strong>Join</strong></button>
                    </MDBCol>                    
                </MDBRow>
                <MDBRow className="mb-4">
                    <MDBCol size="2" >
                        <img src="https://b.thumbs.redditmedia.com/xA7hN9DLGRR_n2Vt7lzCSygDlLh5PPJr8tfpl_EPncM.png" 
                            className="primary-color-dark" 
                            width="30px"
                            style={{ borderRadius: "25px" }} 
                            alt="..." />
                    </MDBCol>
                    <MDBCol size="5" className="m-0 p-0" style={{ lineHeight: "0.9"}}>
                        <small>r/apple<br/>2,040,818 members</small>
                    </MDBCol>
                    <MDBCol size="5" className="text-right" >
                        <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0 btn-block"><strong>Join</strong></button>
                    </MDBCol>                    
                </MDBRow>
                <MDBRow className="mb-4">
                    <MDBCol size="2" >
                        <img src="https://a.thumbs.redditmedia.com/h-t3SdrFEBi1BRe6ymu2LXVonWPSoYZbcHr8mSBAON8.png" 
                            className="primary-color-dark" 
                            width="30px"
                            style={{ borderRadius: "25px" }} 
                            alt="..." />
                    </MDBCol>
                    <MDBCol size="5" className="m-0 p-0" style={{ lineHeight: "0.9"}}>
                        <small>r/jailbreak<br/>577,388 members</small>
                    </MDBCol>
                    <MDBCol size="5" className="text-right" >
                        <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0 btn-block"><strong>Join</strong></button>
                    </MDBCol>                    
                </MDBRow>             
                <MDBRow className="mb-4">
                    <MDBCol size="2" >
                        <img src="https://styles.redditmedia.com/t5_2tex6/styles/communityIcon_u89jf60zv7p41.png" 
                            className="orange darken-3" 
                            width="30px"
                            style={{ borderRadius: "25px" }} 
                            alt="..." />
                    </MDBCol>
                    <MDBCol size="5" className="m-0 p-0" style={{ lineHeight: "0.9"}}>
                        <small>r/ProgrammerHumor<br/>12,587 members</small>
                    </MDBCol>
                    <MDBCol size="5" className="text-right" >
                        <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0 btn-block"><strong>Join</strong></button>
                    </MDBCol>                    
                </MDBRow>    
                <MDBRow>
                    <MDBCol size="2" >
                        <img src="https://styles.redditmedia.com/t5_2t7no/styles/communityIcon_5b1rj1migm341.png" 
                            className="orange darken-3" 
                            width="30px"
                            style={{ borderRadius: "25px" }} 
                            alt="..." />
                    </MDBCol>
                    <MDBCol size="5" className="m-0 p-0" style={{ lineHeight: "0.9"}}>
                        <small>r/Futurology<br/>8,982 members</small>
                    </MDBCol>
                    <MDBCol size="5" className="text-right" >
                        <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0 btn-block"><strong>Join</strong></button>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}

export default SideBarTrending;

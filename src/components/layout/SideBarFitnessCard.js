import React from 'react';
import { Button, MDBTypography, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBListGroup, MDBListGroupItem } from 'mdbreact';

const SideBarFitnessCard = () => {
    return (
        <MDBCard className="z-depth-0 mt-1" style={{ border: "1px solid #c3c4c5" }}>
            <MDBCardHeader className="d-flex aqua-gradient text-white"> <img class="imgSidebar" src="../img/sidebar.png" /><MDBTypography tag='h5' variant="h5-responsive">News communities to keep you informed</MDBTypography></MDBCardHeader>
            <MDBCardBody className="m-0 p-0">
            <MDBListGroup className="" style={{ width: "100%" }}>
                <MDBListGroupItem className="border-left-0 border-right-0">
                    <img src="https://styles.redditmedia.com/t5_2qhpm/styles/communityIcon_yhkdn3ra4a921.png" 
                    className="green" 
                    width="30px"
                    style={{ borderRadius: "25px" }} 
                    alt="..." /> r/vegan
                </MDBListGroupItem>
                <MDBListGroupItem className="border-left-0 border-right-0">
                    <img src="https://b.thumbs.redditmedia.com/KOJDNt1AbhBiC5yOKCFUVGsXJYSeRx4jd4uM5z3E_MM.png" 
                    className="black" 
                    width="30px" 
                    style={{ borderRadius: "100px" }} 
                    alt="..." /> r/ehlersdanlos
                </MDBListGroupItem>
                <MDBListGroupItem className="border-left-0 border-right-0">
                    <img src="https://b.thumbs.redditmedia.com/eiTQtdzfCQrkNHnezDBvO_m_kBT8x_z47kiN7RDqgWM.png"
                    className="primary-color"  
                    width="30px" 
                    style={{ borderRadius: "25px" }} 
                    alt="..." /> r/loseit
                </MDBListGroupItem>
                <MDBListGroupItem className="border-left-0 border-right-0">
                    <img src="https://styles.redditmedia.com/t5_2tat5/styles/communityIcon_92ihrkqe4ow21.png" 
                    className="default-color" 
                    width="30px" 
                    style={{ borderRadius: "25px" }} 
                    alt="..." /> r/fitbit
                </MDBListGroupItem>
                <MDBListGroupItem className="border-0">
                    <img src="https://styles.redditmedia.com/t5_2tf0a/styles/communityIcon_umzfnsitegh11.png" 
                    className="primary-color" 
                    width="30px" 
                    style={{ borderRadius: "25px" }} 
                    alt="..." /> r/bodyweightfitness
                </MDBListGroupItem>
            </MDBListGroup>
            <div className="text-center">
                <button type="button" class="btn btn-primary btn-sm text-uppercase z-depth-0" style={{ width:"90%" }}><strong>View All</strong></button>
            </div>
            
            </MDBCardBody>
            <MDBCardFooter className="d-flex flex-row border-top-0">
                <Button className="p-2 z-depth-0" >Top</Button>
                <Button className="p-2 z-depth-0">Near You</Button>
                <Button className="p-2 z-depth-0">Fitness</Button>
                <Button className="p-2 z-depth-0">Food</Button>
            </MDBCardFooter>
        </MDBCard>
    )
}

export default SideBarFitnessCard;

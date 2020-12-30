import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';

const SinglePostComments = () => {
    return (
        <MDBContainer className="my-5">
            <p className="h6 text-right"><a><strong>View discussions in 4 other communities</strong></a></p>
            <MDBMedia>
                <MDBMedia left href="#" className="mr-3">
                    <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder4.jpg" alt="Generic placeholder image" />
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>
                        Media heading
        </MDBMedia>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        <MDBMedia className="mt-3">
                        <MDBMedia left href="#" className="pr-3">
                            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder4.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>
                                Nested media heading
            </MDBMedia>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
                    </MDBMedia>
                </MDBMedia>
            </MDBMedia>
        </MDBContainer>

    )
}

export default SinglePostComments;


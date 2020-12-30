import React from 'react';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
import SinglePostComments from './SinglePostComments';

const SinglePostCard = () => {
    return (
        <MDBContainer className="rounded" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)" }}>
            <MDBRow>
                <MDBCol size='1' className="rounded grey lighten-5">
                    <ul className="list-group text-center py-3">
                        <li className="list-item-post-card-like"><a><i class="far fa-caret-square-up"></i></a></li>
                        <li className="list-item-post-card-like"><a><small><strong>9999</strong></small></a></li>
                        <li className="list-item-post-card-like"><a><i class="far fa-caret-square-down"></i></a></li>
                    </ul>
                </MDBCol>
                <MDBCol size='11'>
                    <div className="py-1"><small><strong>r/MadeMeSmile</strong> • Posted byu/Edward S. Le 3 hours ago</small></div>
                    <h4><strong>Maecenas quis tellus justo. Sed nulla sem</strong></h4>
                    <p className="py-1">Integer nec volutpat orci. Vivamus condimentum purus leo, sed laoreet mi laoreet et. Nullam laoreet lacus mauris, et consequat dolor auctor eu. Aenean interdum purus sit amet libero consequat aliquet quis quis libero. Integer dolor neque, blandit vel tristique vel, interdum non tortor. Aenean faucibus velit turpis, eu elementum ligula sagittis ac. Integer sit amet ante ac magna egestas elementum. Sed vel augue turpis. Aliquam vitae commodo risus, et bibendum metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum volutpat lorem, et posuere turpis egestas eu. Nulla in ex commodo, facilisis mauris nec, hendrerit risus. Nullam feugiat tincidunt ultrices. Quisque consectetur elit dui, tincidunt mollis lacus aliquet porttitor. Phasellus commodo sodales eros, nec accumsan nisl volutpat ac.</p>
                    <p>Nunc sed mattis magna. Suspendisse facilisis pretium felis nec tempor. Aenean finibus venenatis nunc et ornare. Aenean elementum lacus quis libero ultricies accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam et justo ac urna aliquet consequat. Vivamus elementum volutpat tellus eu auctor. Suspendisse consequat leo ipsum, vel condimentum dui pharetra sed. Morbi condimentum nec nibh eu euismod. Quisque non aliquet leo. Pellentesque at tempor enim, in elementum purus. In viverra libero non sapien accumsan dapibus. Cras risus tortor, maximus mattis erat eget, mollis fermentum diam. Pellentesque vitae tellus iaculis, molestie quam eu, facilisis lacus. Etiam sit amet consequat arcu, laoreet fringilla urna.</p>
                    <img className="img-fluid" src="https://picsum.photos/900/400" />
                    <MDBRow between className="mt-2 text-muted">
                        <MDBCol size="8">
                            <a className="mr-3"><small><i class="fas fa-comment-alt"></i> 999 Comments</small></a>
                            <a className="mr-3"><small><i class="fas fa-share"></i> Share</small></a>
                            <a className="mr-3"><small><i class="fas fa-bookmark"></i> Save</small></a>
                            <a className="mr-3"><small><i class="fas fa-ban"></i> Hide</small></a>
                            <a className=""><small><i class="fas fa-flag"></i> Report</small></a>
                        </MDBCol>
                        <MDBCol size="4" className="text-right"><small>76% Upvoted</small></MDBCol>
                    </MDBRow>
                    <div className="row text-muted rounded border justify-content-between align-items-center my-3 p-1 mx-0">
                        <div className="col-6">                        
                            <span>Log in or sign up to leave a comment</span>
                        </div>
                        <div className="col-6 m-0 p-0 text-right">
                            <MDBBtn outline size="sm" color="primary" className="z-depth-0">LOG IN</MDBBtn>
                            <MDBBtn color="primary" size="sm" className="z-depth-0">SIGN UP</MDBBtn>
                        </div>
                    </div>
                    <SinglePostComments />
                </MDBCol>                
            </MDBRow>
            
        </MDBContainer>
        
    )
}

export default SinglePostCard;

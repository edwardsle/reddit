import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const MainPagePostCard = (props) => {
    return (
        <div className="row rounded m-0 p-0" style={{ background: "#fff", border: "1px solid rgba(135,138,140,0.5)"}}>
            <div className="d-none d-md-block col-md-1 text-center py-3">
                <a><i class="far fa-caret-square-up"></i></a>
                <a><small><strong>{props.post.likes}</strong></small></a>
                <a><i class="far fa-caret-square-down"></i></a>
            </div>
            <div className="col-12 col-md-11">
                <div className="my-2"><small><strong>r/MadeMeSmile</strong> • Posted byu/{props.post.name} 3 hours ago</small></div>
                <div>
                    <p>{props.post.content} </p>
                    <img className="img-fluid" src="https://picsum.photos/600/300" />
                    </div>
                <div className="mt-2 text-muted"><p><small><i class="fas fa-comment-alt"></i>{props.post.commentsCount} Comments  <i class="fas fa-share"></i> Share  <i class="fas fa-bookmark"></i> Save </small></p></div>
            </div>
        </div>
        
    )
}

export default MainPagePostCard;
import React from 'react';
import { MDBContainer, MDBMedia } from 'mdbreact';

const SinglePostComments = (props) => {
    return (
        <MDBContainer className="my-5">
            <MDBMedia>
                <MDBMedia left className="mr-3">
                    <ul className="list-group">
                        <li className="list-item-post-card-like" ><a><i class="far fa-caret-square-up"></i></a></li>
                        <li className="list-item-post-card-like"><a><i class="far fa-caret-square-down"></i></a></li>
                    </ul>
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>
                    <h6>{props.comment.name}</h6>
                    </MDBMedia>
                    <h4>{props.comment.content}</h4>
                </MDBMedia>
            </MDBMedia>
        </MDBContainer>

    )
}

export default SinglePostComments;


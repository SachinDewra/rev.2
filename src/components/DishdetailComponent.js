import React from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from "reactstrap";

    //functional component
    function RenderDish({dish}) {
        if(dish) {
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function RenderComments({comments}) {
        const commentl=  comments.map((com) => {
            return (
                <div className="row">
                    <ul key={com.id} className="success">
                        <li>
                            ID: {com.id}
                        </li>
                        <li>
                            Rating: {com.rating}
                        </li>
                        <li>
                            comment: {com.comment}
                        </li>
                    </ul>
                </div>
            )
        })

        return <div className="container">
                <div className="row">
                    {commentl}
                </div>
                
            </div>
    }

    
    const DishDetail = (props) => {
        if (props.dish !== undefined ) {
            return (
                <div>
                <RenderDish dish={props.dish}></RenderDish>
                <RenderComments comments={props.dish.comments}></RenderComments>
                </div>
            );
        }
        else {
            return (<div>No Dish Selected</div>);
        }
    }
    



export default DishDetail;
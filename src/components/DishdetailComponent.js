import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
        console.log(props);
        if (props.dish !== undefined ) {
            return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (<div>No Dish Selected</div>);
        }
    }
    



export default DishDetail;
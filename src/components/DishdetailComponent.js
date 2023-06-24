import React, { Component } from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from "reactstrap";
class Dishdetails extends Component {

    
    constructor(props) {
        super(props);

        console.log(props);
        
        // stores iproperties of this component
        
        this.state = {
            selectedDishDetail: this.props.dsdetail
        };


    }
    renderDish(dish) {
        if(dish !== null) {
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

    renderComments(comments) {
        const commentl=  comments.map((com) => {
            return (
                <div className="row">
                    <ul className="success">
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

    render(){
        const dish = this.props.dishdetail;

        console.log(dish);
        
        if (dish == null) {
            return (<div></div>);
        }

        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);

        return (
            <div className='row'>
                {dishItem}
                {dishComment}
            </div>
        )
    }
}


export default Dishdetails;
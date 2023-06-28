import React from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle } from "reactstrap";
import Dishdetails from "./DishdetailComponent";
import Main from "./MainComponent";
    
//Functional Component array function
function RenderMenuItem({ dish, onClick }) {
    return(
        <Card key={dish.id}
            onClick={() => onClick(dish.id)}>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle heading>{dish.name}</CardTitle>
                </CardImgOverlay>
            
        </Card>
    );
}
    //Functional Component array function
    const Menu = (props) => {
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish} onClick={props.onClick}></RenderMenuItem>
                </div>
            )
        })
        

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
        
    



export default Menu;
import React, {Component, useState} from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem,Button,Label,Input,
    Modal,ModalHeader,ModalBody,FormGroup } from 'reactstrap';
import { json,Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import Styles from "../Styles";

class CommentForm extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            isModalOpen : false,
            dishID: props.comments[0].dishId
        }
        this.commenttoggleModal = this.commenttoggleModal.bind(this);

    }

    commenttoggleModal() {
        this.setState({isModalOpen : !this.state.isModalOpen})
    }

    
    render() {
        const required = value => (value ? undefined : 'Required')
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

        const onSubmit = async values => {
            await sleep(300)
            this.props.addComment(this.props.dishId, values.rating,
                 values.author,values.comment)
        }
        return (
            <div className="row">
                <Button outline onClick={this.commenttoggleModal}>
                    <span className="fa fa-comments fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.commenttoggleModal}>
                    <ModalHeader toggle={this.commenttoggleModal}>Add Comment</ModalHeader>
                    <Styles>
                    <Form onSubmit={onSubmit} intialvalues={{}} 
                        render={({handleSubmit,form, submitting, pristine, values}) => (
                            <form onSubmit={handleSubmit}>
                                <Field name="rating" component='select' validate={required}>
                                    {({input,meta}) => (
                                        <div>
                                            <label>Rating</label>
                                            <select {...input}>
                                                <option/>
                                                <option value={1}>⭐️</option>
                                                <option value={2}>⭐️⭐️</option>
                                                <option value={3}>⭐️⭐️⭐️</option>
                                                <option value={4}>⭐️⭐️⭐️⭐️</option>
                                                <option value={5}>⭐️⭐️⭐️⭐️⭐️</option>
                                            </select>
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                    
                                </Field>
                                <Field name="author" validate={required}>
                                    {({input,meta}) => (
                                        <div>
                                            <label>Author Name</label>
                                            <input {...input} type="text" placeholder="Author Name"></input>
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                                <div>
                                    <label>Comment</label>
                                    <Field validate={required} name="comment" component='textarea' placeholder="comments"/>
                                </div>
                                <div className="buttons">
                                    <button type="submit" disabled={submitting || pristine}>
                                    Submit
                                    </button>
                                    <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                    >
                                    Reset
                                    </button>
                                </div>
                                <pre>{JSON.stringify(values, 0, 2)}</pre>
                            </form>
                        )}
                    
                    />
                    </Styles>
                        
                </Modal>
            </div>
        )
    }
}


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

function RenderComments({comments, addComment,dishId}) {
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
            <CommentForm comments={comments} dishId={dishId} addComment={addComment} ></CommentForm>
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
                    <RenderComments comments={props.comments}
                        addComment={props.addComment} dishId={props.dish.id} />
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
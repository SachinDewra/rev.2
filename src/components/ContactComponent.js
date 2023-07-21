import React, { Component } from "react";
import { Card, CardImg,CardImgOverlay,CardText,CardBody,CardTitle,Breadcrumb,BreadcrumbItem, 
    Col,Label,Input
    ,Button } from "reactstrap";
import { json, Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form'
import Styles from "../Styles";
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}
const required = value => (value ? undefined : 'Required')
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const emailValidate = value => regex.test(value) === false ? 'Email not valid' : ''

const FeedbackForm = () => (
  <Styles>
    <Form
      onSubmit={onSubmit}
      initialValues={{}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstname" validate={required}>
                {({ input,meta }) => (
                    <div>
                        <label>First Name</label>
                        <input {...input} type="text" placeholder="First Name"></input>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            <Field name="lastname" validate={required}>
                {({ input,meta }) => (
                    <div>
                        <label>Last Name</label>
                        <input {...input} type="text" placeholder="Last Name"></input>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            <Field name="mobile" validate={composeValidators(required, mustBeNumber,minValue(10))}>
                {({ input,meta }) => (
                    <div>
                        <label>Mobile</label>
                        <input {...input} type="tel" placeholder="Mobile"></input>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
            <Field name="email" validate={composeValidators(required, emailValidate)}>
                {({ input,meta }) => (
                    <div>
                        <label>email</label>
                        <input {...input} type="tel" placeholder="email"></input>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                )}
            </Field>
          <div>
            <label>May We contact you</label>
            <Field name="contactu" component="input" type="checkbox" />
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
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
)

class Contact extends Component {
    constructor (props) {
        super(props);
       
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                    <FeedbackForm></FeedbackForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
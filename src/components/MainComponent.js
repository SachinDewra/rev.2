import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';


import { Routes, Route, Navigate,useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}

          />
      );
    }

    const DishWithId = () => {
      var dishId =  useParams().dishId;
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
      );
    };
    
    return (
      <div>
        <Header>
        </Header>
          <Routes>
            <Route path="/home" element={<HomePage />}  />
            <Route path="/aboutus" element={<About leaders={this.props.leaders} />}  />
            <Route path='/menu' exact element={<Menu dishes={this.props.dishes} />} />
            <Route path='/menu/:dishId' element={<DishWithId></DishWithId>} />
            <Route exact path='/contactus' element={<Contact></Contact>}></Route> 
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        <Footer/>
      </div>
    );
  }
}

export default ((connect(mapStateToProps)(Main)));
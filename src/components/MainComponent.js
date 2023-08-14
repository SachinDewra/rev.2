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
import { postComment,fetchDishes,fetchComments, fetchPromos,fetchLeaders } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId,rating,author,comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
  })

class Main extends Component {

  constructor(props) {
    super(props);
  }

  // lifecycle method
  componentDidMount() {
     this.props.fetchDishes();
     this.props.fetchComments();
     this.props.fetchPromos();
    this.props.fetchLeaders();
  }
  
  render() {
    const HomePage = () => {
      return(
          <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promotionLoading={this.props.promotions.isLoading}
                promotionErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                leadersLoading={this.props.leaders.isLoading}
                leadersErrMess={this.props.leaders.errMess}
                
          />
      );
    }

    const DishWithId = () => {
      var dishId =  useParams().dishId;
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            ErrMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(dishId,10))}
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
            />
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

export default ((connect(mapStateToProps,mapDispatchToProps)(Main)));
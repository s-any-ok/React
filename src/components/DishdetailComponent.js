import React, { Component } from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {
    
    constructor(prop){
        super(prop);

    }

    renderDish(dish) {
        if (dish != null)
            return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        else
            return(
                <div></div>
            );
       }
    

    renderComments(dish) {
        if (dish != null) {
            if(dish.comments != null) {
                const commentList = dish.comments.map((comment) => {
                    return(
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                                <li>{comment.comment}</li>                 
                                <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: '2-digit'
                                                        }).format(new Date(comment.date))}
                                </li>
                        </ul>
                    </div>
                    )
                })
                return (<div><h4>Comennts</h4>{commentList}</div>)
            }
                
        
    } else {
        return(<div></div>);
    }
    }
    
    render() {
        const dish = this.props.selectedDish;
        return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
                {this.renderComments(dish)}
            </div>
        </div>
        );
      }

    }

export default DishDetail;
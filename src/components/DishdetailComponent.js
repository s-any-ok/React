import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
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
    

    function RenderComments({dish}) {
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
    
    const DishDetail = props => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.dish} />
                    </div>
                </div>
            </div>
            );
    }
        

export default DishDetail;
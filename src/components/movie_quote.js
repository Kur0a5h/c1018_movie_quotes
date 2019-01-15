import React, {Component} from 'react';
import auth from '../hoc/auth';

class MovieQuote extends Component{
    render(){
        return(
            <div className="center">
            <h1>Movie Quote</h1>
            <h5>Movie Quote: I haven't got time for this mickey mouse bullshit!</h5>
            </div>
        )
    }
}

export default auth(MovieQuote);
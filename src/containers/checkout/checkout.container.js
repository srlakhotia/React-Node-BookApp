import React, {Component} from 'react';
import './checkout.container.css';

class Checkout extends Component {
    constructor(props) {
        super(props)
        console.log('props:: ', this.props)
    }
    render() {
        return (
            <h1>Checking out</h1>
        )
    }
}

export default Checkout;
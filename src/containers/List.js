import React, { Component } from 'react-dom'
import Card from './components/Card/Card'

class List extends Component {
    
    constructor(){
    	super()
    	this.state = {
    		data : {},
    		loading: true
    	}
    }

    render() {
        return < Card />
    }
};
export default List
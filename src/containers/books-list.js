import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BooksList extends Component {
    renderList(){
        return this.props.books.map((boos) => {
            return (
                <li key={ book.title } class='list-group-item'> { books.title } </li>
            );
        });
    }

    render(){
        return (
            <ul class="list-group col-4">
                { this.rederList() }
            </ul>
        )
    }
}

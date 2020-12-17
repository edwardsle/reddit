import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Trending from './components/layout/Trending';
import PopularPost from './components/layout/PopularPost';
import "./index.css";
import axios from 'axios';

export default class Home extends Component {
    componentDidMount() {
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        axios.get('/login',config).then (
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        )
    }
    render() {
        return (
            <>
                <Navbar />
                <Trending />
                <PopularPost />
            </>
        )
    }
}

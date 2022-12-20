import { useState, useEffect } from 'react';
import React from 'react';
import waving from "../wavingman.jpg";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';




function HelloBtn() {

    const [click, setClick] = useState(false);



    function handleClick() {
        setClick(!click)
    }

    return (
        <div className='helloContainer'>
            <button id='helloBtn' className='helloBtn' onClick={handleClick}>Click me!</button>
            <div className={click ? '' : 'hidden'}>
                <p className='hilite' id='helloText'>Hello World!</p>
                <img src={waving} />
            </div>
        </div>
    );
}


// search component
function Search({ value, onChange, children }) {
    return (
        <div>
            <label htmlFor="search">{children}</label>
            <input
                id="search"
                type="text"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}



//main component
const GetActors = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const cols = [];



    function GridCard({ props }) {

        //console.log('props=' +props)
        //const actorid = props.actorid + 1
        console.log("card: " + props.actorid + props.firstname)
        return (
            <Col>
                <Card>
                    {/* <Card.Img variant="top" src="holder.js/100px160" />  */}
                    <Card.Body>
                        {/* <Card.Title>{item.actorid}</Card.Title>  */}
                        <Card.Text>
                            <p className='actorData'>"ID: " {props.actorid} {props.firstname}  {props.lastname}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                
            </Col>
        )
    }

    useEffect(() => {
        fetch("http://localhost:8080/home/actors")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    console.log(items);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [isLoaded])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i])
            cols.push(<GridCard props={items[i]} />)
        }


        console.log(cols)
        return (

            <Row xs={3} sm={3} xxl={3} lg={3} xl={3} md={3} className="g-4">
                {cols}
            </Row>

        );
    }
}


const Actors = () => {
    const [search, setSearch] = React.useState('');
    function handleChange(event) {
        setSearch(event.target.value);
    }

    return (
        <div id="actors">
            <h1 className="pageName neonText2">This is the Actors page</h1>
            <HelloBtn />
            <div className='actors'>
                <Search value={search} onChange={handleChange}>
                    Search:
                </Search>
                <p className='hilite'>Searches for: {search ? search : '...'}</p>
            </div>
            <GetActors />
        </div>
    );
}



export default Actors;
import { useState } from 'react';
import React from 'react';
import meme from '../meme.png';
import spiral from '../spiral.webp';
import harold from '../harold.jpg';
import pizza from '../pizza.webp';
import agent from '../agent47.jpg';

function TitleBox() {
    return (
        <div id='titleBox'>
            <p className='neon' >Welcome</p>
        </div>
    );
}

function LeftCol() {
    return (
        <div className="leftCol">
            <p className='hilite'>LeftCol</p>
        </div>
    );
}



function Slider() {
    const [rating, setRating] = useState(50);
    const [bgCol, setCol] = useState('blueviolet');
    const [bgCol2, setCol2] = useState('black');
    const [review, setReview] = useState(false);
    const [click, setClick] = useState(false);

    function handleSlide(event) {
        var randomColor = Math.floor(Math.random() * 16777215).toString(16);
        var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
        setCol('#' + randomColor)
        setCol2('#' + randomColor2)
        setRating(event.target.value);
        if (event.target.value == 100) {
            setReview({ value: true })
        } else { setReview(false) }
    }

    function handleClick() {
        setClick(true)
    }

    return (
        <div className='slidecontainer'>
            <p className='hilite'>Please rate this website</p>
            <input
                className="slider"
                type="range"
                min="0"
                max="100"
                value={rating}
                onChange={handleSlide}
            />
            <p className='output hilite' style={{ backgroundColor: bgCol, color: bgCol2 }}>rating: {rating}</p>
            <button id='reviewBtn' className={review ? 'button1' : 'hidden'} onClick={handleClick}>Submit Review</button>
            <p id='reviewConfirm' className={click ? 'hilite' : 'hidden'}>Thank you for reviewing the website!</p>
        </div>
    );
}

function Section2() {
    return (
        <div className='section2'>
            <h2>This is some text to pad out the screen to see what the formatting looks like...
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt purus eu mauris blandit placerat. Donec ac sem neque. Curabitur?
            </h2>
            <h3><b><u> | *** Testing images *** |</u></b></h3>
            <img src={meme} className="App-logo" alt="logo" />
            <img src={pizza} className="pizza" alt="logo" />
        </div>
    );
}

function Form1() {

    return (
        <form className='form1'>
            <label htmlFor="fname">First name:</label><br />
            <input type="text" id="fname" name="fname" /><br />

            <label htmlFor="lname">Last name:</label><br />
            <input type="text" id="lname" name="lname" /><br />

            <input type="radio" id="radio1" name="radio1" value="radio1" />
            <label htmlFor="radio1"> Tick this to agree to give us your organs</label><br />

            <input type="radio" id="radio2" name="radio1" value="radio2" />
            <label htmlFor="radio2"> Select this this to give us your firstborn child</label><br />

            <input type="radio" id="radio3" name="radio1" value="radio3" />
            <label htmlFor='radio3'> Select this if you want 3 large swat teams to make their way to you now</label><br />

            <label htmlFor='payments'>Choose a payment method:</label>

            <select name="payments" id="payments">
                <optgroup label="body parts">
                    <option value="kidney">kidney</option>
                    <option value="heart">heart</option>
                </optgroup>
                <optgroup label="currencies">
                    <option value="blood">Blood</option>
                    <option value="money">Money</option>
                </optgroup>
            </select><br />
            <label htmlFor='submit' >Submit:</label><br />

            <input type="submit" id="submit" name="submit" />
        </form>
    );
}

function Section3() {
    return (
        <div className='list1'>
            <ul >
                <li>
                    <p>Testing lists</p>
                </li>
                <li>
                    <h2>Testing tables</h2>
                </li>
                <table>
                    <tbody><tr>
                        <th>Pokemon</th>
                        <th>image</th>
                        <th>type</th>
                        <th>Favourite food</th>
                    </tr>
                        <tr>
                            <td>Turtwig</td>
                            <td><img src="data:image/jpeg;base64,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" />
                            </td>
                            <td>Grass</td>
                            <td>Berries</td>
                        </tr>
                        <tr>
                            <td>Machamp</td>
                            <td><img src="data:image/jpeg;base64,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" />
                            </td>
                            <td>Fighting</td>
                            <td>Bricks</td>
                        </tr>
                        <tr>
                            <td>Mario</td>
                            <td><img src="data:image/jpeg;base64,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" />
                            </td>
                            <td>Fighting</td>
                            <td>Shrooms</td>
                        </tr>
                        <tr>
                            <td>Agent 47</td>
                            <td>
                                <img src={agent} />
                            </td>
                            <td>Gardening</td>
                            <td>redacted</td>
                        </tr>
                    </tbody>
                </table>
            </ul>
        </div>
    );
}

function MidCol() {
    return (
        <div className="midCol">
            <p className='hilite'>MidCol</p>
            <h1 className='neonText' >Welcome</h1>
            <hr className='hrCol' />
            <p className='hilite'>Welcome to the sekila database website! Feel free to look around and leave a review if you would like</p>
            <Slider />
        </div>
    );
}

function RightCol() {
    return (
        <div className="rightCol">
            <p className='hilite'>RightCol</p>
        </div>
    );

}

function Columns() {
    return (
        <div className="Columns">
            <LeftCol />
            <MidCol />
            <RightCol />
        </div>
    );
}

function Nav() {
    return (
        <div className='Navbar'>
            <a href="#home" className='Nav-link'>Home</a>
            <a href="#news" className='Nav-link'>News</a>
            <a href="#contact" className='Nav-link'>Contact</a>
        </div>
    );
}


function Footer() {
    return (
        <div className='footer'>
            <h1 className='neonText1'>Footer</h1>
        </div>
    );
}

function Buttonfx({ childToParent }) {
    var data = false;

    return (
        <div className='buttonfx'>
            <button >Background fx</button>
            <button id="sickoBtn" onClick={() => childToParent(data = !data)} >Sicko mode</button>
        </div>
    );
}

function Home() {
    const [bg, setbg] = useState(false)
    const childToParent = (childData) => {
        console.log("bg = " + bg)
        setbg(childData);
    }
    return (
        <div className={bg ? "App rainbow" : "App"}>
            <Buttonfx childToParent={childToParent} />
            <Columns />
            <Footer />
        </div>
    );
}

export default Home;
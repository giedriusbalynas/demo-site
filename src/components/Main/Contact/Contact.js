import React from 'react';
import './Contact.scss';

const contact = () => (
    <div className="contact">
        <div className="paragraph">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="form">
            <form name="contact">
                <label forhtml="name"><h4>NAME</h4></label>
                <input id="name" type="text" name="name"></input>
                <label forhtml="email"><h4>EMAIL</h4></label>
                <input id="email" type="email" placeholder="test@test.com" name="email"></input>
                <label forhtml="message"><h4>MESSAGE</h4></label>
                <textarea id="message" name="message"></textarea>
                <button type="button" name="button">LEARN MORE</button>
            </form>
        </div>
    </div>
);

export default contact;

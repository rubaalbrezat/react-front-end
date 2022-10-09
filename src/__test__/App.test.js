import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../App';


test('Testing the text', async ()=>{

    render(<App/>);
    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent('Your Name');

})



test('Testing the name changing', async () => {

    render(<App />);
    const age = await screen.findByTestId('age');
    expect(age).toHaveTextContent('Your age after 5 years');
})
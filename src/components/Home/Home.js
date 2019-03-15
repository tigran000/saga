import React from 'react';
const Home = ({ history }) => (
    <button onClick={() => {
        history.push("/login");
    }}> Login </button>
)

export default Home;
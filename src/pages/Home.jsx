import React from "react";
import { Link } from "react-router-dom"; 
import Layout from "../layouts/Layout";

const Home=()=>{
    return(
        <div>
            <Layout>
                <h1>This is Home Page</h1>
                <br />
            <Link to ="/about">
                About
            </Link>
            </Layout>
        </div>
    )
}
export default Home;
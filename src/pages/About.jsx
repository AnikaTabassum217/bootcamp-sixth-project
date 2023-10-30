import React from "react";
import { Link } from "react-router-dom"; 
import Layout from "../layouts/Layout";
const About=()=>{
    return(
        <div>
            <Layout>
            <h1>This is About Page</h1>
            <br />
            <Link to ="/">
                Home
              
            </Link>
            </Layout>
        </div>
    )
}
export default About;
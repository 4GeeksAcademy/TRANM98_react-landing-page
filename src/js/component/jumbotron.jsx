import React from "react";
import './index.css';


export const Jumbotron = () => {
    return(
        <div class="container-fluid py-5 my-4 px-4 jumbotron">
            <h1 class="display-4 fw-bold5">A Warm Welcome!</h1>
            <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sodales dui, vitae molestie diam. Vivamus gravida purus vel lorem efficitur auctor. Sed pretium mi sed erat rhoncus, nec tincidunt velit ullamcorper. </p>
            <button class="btn btn-primary btn-lg" type="button">Call to Action!</button>
        </div>
      )
    }
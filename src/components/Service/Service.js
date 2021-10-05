import React from 'react';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';

const Service = (props) => {

    const { name, img } = props.service
    return (

        <div className="col-md-4 bg-dark">


            <div class="row row-cols-1 row-cols-md-12 mb-4 g-4 mt-1 bg-dark rounded-4 ">
                <div class="col ms-3 me-3">
                    <div class="card h-100">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>



            </div>

        </div>


    );
};

export default Service;
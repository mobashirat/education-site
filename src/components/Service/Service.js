import React from 'react';


const Service = (props) => {

    const { name, img, notes } = props.service
    return (

        <div className="col-md-4 bg-dark">


            <div class="row row-cols-1 row-cols-md-12 mb-4 g-4 mt-1 bg-dark rounded-4 ">
                <div class="col ms-3 me-3">
                    <div class="card h-100">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text"></p>
                            <p>{notes}</p>
                        </div>
                    </div>
                </div>



            </div>

        </div>


    );
};

export default Service;
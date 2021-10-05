import React from 'react';

const Topservice = (props) => {
    const { name, img, price } = props.topservice
    return (
        <div className="col-md-6 bg-dark">

            <div class="row row-cols-1 row-cols-md-12 mb-4 g-2 mt-1 bg-dark rounded-4 p-4 ">
                <div class="col">
                    <div class="card h-100 w-75 shadow-lg ">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text fs-3">{price}</p>

                            <button className="bg-info rounded-3">Enroll now</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );
};

export default Topservice;
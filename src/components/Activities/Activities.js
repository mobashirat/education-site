import React from 'react';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';

const Activities = () => {
    return (

        <div class="row bg-dark p-3">
            {/* navbar */}
            <Cover></Cover>

            {/* navbar */}
            <div class="col-sm-6 g-4">
                <div class="card">
                    <div class="card-body bg-info">
                        <h5 class="card-title">Cultural Functions</h5>
                        <p class="card-text">We arrange cultural functions to give our kids a memorable moment and showcase their creativities.</p>
                        <button className="bg-dark text-light">Learn more</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 g-4">
                <div class="card">
                    <div class="card-body bg-info">
                        <h5 class="card-title">Grooming Session</h5>
                        <p class="card-text">One day in a week we arrange grooming session to gather knowlwdge about our students and their problems.</p>
                        <button className="bg-dark text-light">Learn more</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 g-4 ">
                <div class="card">
                    <div class="card-body bg-info ">
                        <h5 class="card-title">Parents Meeting</h5>
                        <p class="card-text">We arrange parents meeting one day in a month to give informations about our students to their parents.</p>
                        <button className="bg-dark text-light">Learn more</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 g-4">
                <div class="card">
                    <div class="card-body bg-info">
                        <h5 class="card-title">Study Tour</h5>
                        <p class="card-text test-justify">We always care about our students refreshment.For that we arrange picnic once in a six month to fresh their mind and introduce nature to them.</p>
                        <button className="bg-dark text-light">Learn more</button>
                    </div>
                </div>
            </div>
            {/* footer-section */}
            <div className="mt-3">
                <Footer></Footer>
            </div>
        </div>

    );
};

export default Activities;
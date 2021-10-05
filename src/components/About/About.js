import React from 'react';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';

const About = () => {

    return (
        <div>
            {/* navbar */}
            <Cover></Cover>

            {/* navbar */}
            <h1 className="text-primary">About Us</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="https://s18670.pcdn.co/wp-content/uploads/2016/07/great-teachers-great-schools.jpg" class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">OUR TEAM</h5>
                            <p class="card-text">This is our family where we work together and plans how to do best for our beloved students..</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://media-exp1.licdn.com/dms/image/C510BAQHdAst8_Oj2PA/company-logo_200_200/0/1519877325790?e=2159024400&v=beta&t=rJRfxbWqBEldkx7N8-rlq342scpC9M9ioEbk9OMjQAc" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">OUR GOAL</h5>
                            <p class="card-text">Our major goal to give full enjoyment to our students with learning,so that they don't feel bore abput learning.</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjp8kR8V-_MUgBdvi3LfMUbTPmV9sERHTFn-eys462oK2SdLrLzUhXFCNcZqRX6hYpX3c&usqp=CAU" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">OUR ACHIEVEMENT</h5>
                            <p class="card-text">Our biggest achievment is smile of our lovely students.We have so many clubs to enhance creative power of our students and also won numerous competitions.</p>
                        </div>
                    </div>
                </div>
                {/* footer-section */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
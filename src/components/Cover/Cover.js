import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Cover.css'

const Cover = () => {
    return (




        <div className="cover-set">

            <Navbar></Navbar>



            <div className="cover-headings">
                <img className="mt-0" src="https://png.pngtree.com/thumb_back/fh260/background/20200907/pngtree-knowledge-tree-graduation-cap-blackboard-education-background-image_398172.jpg" alt="" />
                <h1 className="cover-title mt-2 text-warning mb-3">LEARN WITH <span className="text-danger"> FUN</span></h1>
                <h3 className="text-style">"Children want the same things we want. To laugh, to be challenged, to be entertained, and delighted."</h3>


            </div>

        </div>



    );
};

export default Cover;


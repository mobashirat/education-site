import React, { useEffect, useState } from 'react';
import Topservice from '../Topservice/Topservice';

const Topservices = () => {
    const [topservices, setTopservices] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setTopservices(data))
    }, [])

    return (
        <div className="row">
            {
                topservices.slice(8).map(topservice => <Topservice
                    topservice={topservice}
                    key={topservice.id}
                ></Topservice>)
            }
        </div>
    );
};

export default Topservices;
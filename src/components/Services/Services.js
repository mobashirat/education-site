import React, { useEffect, useState } from 'react';
import Cover from '../Cover/Cover';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div className="row">
            <Cover></Cover>
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
            <Footer></Footer>
        </div>
    );
};

export default Services;
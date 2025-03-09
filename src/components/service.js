import { Link } from 'react-router-dom';
import '../index.css';
import {serviceData} from "../data/data.js"
const Service = () => {
    return (
        <div className='Ser'>
            {Object.values(serviceData).map((service, index) => (
                <div key={index} className="ServiceItem">
                    <h1>{service.title}</h1>
                    <div className="card-container">
                        {service.cards.map((card, cardIndex) => (
                            <div key={cardIndex} className="card">
                                <h3>{card.title}</h3>
                                <p className="price">{card.price}</p>
                                <p className="description">{card.description}</p>
                                <span style={{padding:'20px'}}><Link to='/agreement'> chi tiết</Link></span>
                                <button className="button">Gửi yêu cầu</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default Service;
import { Link } from 'react-router-dom';

const serviceData = {
    housekeeping: {
        title: "Giúp việc nhà",
        cards: [
            {
                title: "Hợp đồng dài hạn",
                price: "1.800.000/Hợp đồng",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            },
            {
                title: "Hợp đồng theo ngày",
                price: "400.000/Ngày",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            }
        ]
    },
    patientCare: {
        title: "Chăm người bệnh",
        cards: [
            {
                title: "Y tá/Điều dưỡng tại nhà",
                price: "Liên hệ",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            },
            {
                title: "Hợp đồng giới thiệu",
                price: "1.000.000/Hợp đồng",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            }
        ]
    },
    hourlyService: {
        title: "Giúp việc theo giờ",
        cards: [
            {
                title: "Hợp đồng theo giờ",
                price: "50.000/Giờ",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            }
        ]
    },
    tetService: {
        title: "Giúp việc Tết Nguyên Đán",
        cards: [
            {
                title: "Hợp đồng 10 ngày Tết",
                price: "1.500.000/Hợp đồng",
                description: "Et itaque recusandae id voluptate quia rem voluptatibus quasi a quas voluptatem. Ut facilis error a saepe repellat et odio cumque qui quia deserunt qui soluta nulla sed pariatur velit non culpa alias."
            }
        ]
    }
};

const Service = () => {
    return (
        <div>
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
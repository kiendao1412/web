  import React from 'react';
  import '../App.css'
  const Agreement = () => {
    return (
      <div className="container">
        <div className="agreeHeader">
          <div className='agreeText'>
              <h1>Giới thiệu</h1>
              <p>
              Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem. Ut unde
              et autem molestias aut tempora cupiditate qui quia sequi ab officia Quis.
              </p>
          </div>
          <div className="agreeHeaderImg">
              <img src="" alt="" />
          </div>
        </div>

        <div className='agreeDetail'>
          <h2>Chi tiết công việc</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
          </ul>
        </div>

        <div className='agreeDetail'>
          <h2>Loại hợp đồng</h2>
          <h3>Hợp đồng dài hạn</h3>
          <ul>
            
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
          </ul>
        </div>

        <div className='agreeDetail'>
          <h2>Mức lương</h2>
          <h3>1.800.000/Hợp đồng</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
            <li>Lorem ipsum dolor sit amet. Non magni numquam cum ipsa voluptatem.</li>
          </ul>
        </div>

        <button className="button">Gửi yêu cầu</button>
      </div>
    );
  };

  export default Agreement;
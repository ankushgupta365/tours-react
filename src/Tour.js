import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price,removeTour }) => {
  const [readmore, setReadmore] = useState(false);
  return (
    <article>
      <div className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>{price}</h4>
          </div>
          <p>{readmore ? info : `${info.substring(0, 200)}....`}
            <button onClick={() => setReadmore(!readmore)}>{readmore ? 'read less' : 'read more'}</button>
          </p>
          <button className='delete-btn' onClick={()=>removeTour(id)}>Remove</button>
        </footer>
      </div>
    </article>
  );
};

export default Tour;

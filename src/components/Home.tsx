import React from 'react';
import {Link} from "react-router-dom";

const Home: React.FC = () => {
   return (
      <div>
         <Link to='/form'>
            <button>FORM</button>
         </Link>
      </div>
   );
};

export default Home
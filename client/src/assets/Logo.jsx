const Logo = () => {
  return (
  <svg className="w-full h-full" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
  </style>

  <g transform="rotate(-5, 100, 50)" fill="#eb9fc5" >
    <line x1="10" y1="50" x2="40" y2="50" stroke="black" strokeWidth="4" strokeLinecap="round"/>
    
  
    <ellipse cx="60" cy="50" rx="25" ry="20" stroke="black" strokeWidth="4"/>
    

    <ellipse cx="140" cy="50" rx="25" ry="20" stroke="black" strokeWidth="4"/>
    

    <rect x="85" y="45" width="30" height="10" rx="5" fill="black"/>
    

    <line x1="165" y1="50" x2="190" y2="50" stroke="black" strokeWidth="4" strokeLinecap="round"/>
  </g>

  <text x="100" y="100" fontFamily="'Pacifico', sans-serif" fontSize="32" fontWeight="bold" fill="#5D2B7E" transform="rotate(-5, 50, 100)">
    FreakyFashion
  </text>
  </svg>

  );
};

export default Logo;
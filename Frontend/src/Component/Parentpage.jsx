// import React, { useState } from 'react';

// import Signup from './Signup';

// function Parentpage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (formData) => {
//     // Implement login logic here (e.g., API call)
//     console.log('Login:', formData);
//     setIsLoggedIn(true);
//   };

//   const handleSignup = (formData) => {
//     // Implement signup logic here (e.g., API call)
//     console.log('Signup:', formData);
//     setIsLoggedIn(true);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <h1>Welcome!</h1>
//           {/* Display user info or other content */}
//           <Signup formType="login" onLogin={handleLogin} />
//         </div>
//       ) : (
//         <>
          
//           <Signup formType="signup" onSignup={handleSignup} />
//         </>
//       )}
//     </div>
//   );
// }

// export default Parentpage;
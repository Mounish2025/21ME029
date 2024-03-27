// RegistrationPage.js
import React, { useState } from 'react';

function RegistrationPage() {
  const [email, setEmail] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleRegister = async () => {
    try {
      // Perform registration API call
      const response = await fetch('http://20.244.56.144/test/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ownerEmail: email,
          rollNo: rollNo
        })
      });
      
      if (response.ok) {
        setRegistered(true);
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {registered ? (
        <div>
          <h2>Registration Successful!</h2>
          <p>You can now proceed to the homepage.</p>
          <a href="/home">Go to Home</a>
        </div>
      ) : (
        <div>
          <h2>Registration Page</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter your roll number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
          />
          <br />
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
}

export default RegistrationPage;

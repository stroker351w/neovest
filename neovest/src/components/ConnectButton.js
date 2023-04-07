import React from 'react';
import axios from 'axios';

const ConnectButton = () => {
  const handleClick = async () => {
    const clientId = 'your_client_id_here';
    const clientSecret = 'your_client_secret_here';

    try {
      const response = await axios.get('https://dashboard.getfront.com/api/v1/cataloglink', {
        headers: {
          'X-Client-Id': clientId,
          'X-Client-Secret': clientSecret,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <button onClick={handleClick}>
      Connect
    </button>
  );
};

export default ConnectButton;

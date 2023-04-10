import React from 'react';
import axios from 'axios';

const ConnectButton = () => {
  const handleClick = async () => {
    const clientId = 'b01f434d-5ce9-40fd-3eab-08db08692dca';
    const clientSecret = 'a76acc09caf54c648cf4bbcad5c3dacd';

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

// pages/api/subscribe.js

export default async function handler(req, res) {
    const { email } = req.body;
  
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email is required and should be valid.' });
    }
  
    try {
  
      const data = {
        email_address: email,
        status: 'subscribed',
      };
  
      const response = await fetch(
        `https://us21.api.mailchimp.com/3.0/lists/41a27cefb9/members/`,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey 5f21c2aeb2f125c9c7e8c992a4ee75ad-us21`,
          },
          method: 'POST',
        }
      );
  
      // Check if the response is ok and if the content type is JSON before trying to parse it
      if (response.ok && response.headers.get('Content-Type')?.includes('application/json')) {
        const responseData = await response.json();
        // Check if Mailchimp sent back an error message in the JSON
        if (responseData.status === 'error' || responseData.detail) {
          throw new Error(responseData.detail || 'Error subscribing to Mailchimp');
        }
        return res.status(201).json({ message: 'Subscribed successfully!' });
      } else if (response.ok) {
        // If response is ok but not JSON, something unexpected has happened
        throw new Error('Received an unexpected response from Mailchimp');
      } else {
        // If response is not ok, try to parse the error message
        const errorData = await response.json();
        console.error('Mailchimp error response:', errorText);
        return res.status(response.status).json({ error: errorData.title || 'Error subscribing to Mailchimp' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }
  
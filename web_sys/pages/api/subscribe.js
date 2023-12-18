// pages/api/subscribe.js

export default async function handler(req, res) {
    const { email } = req.body;
  
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Email is required and should be valid.' });
    }
  
    try {
      const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY; // Set your API key in .env.local
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID; // Set your Audience ID in .env.local
      const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g. us5
  
      // Construct req data
      const data = {
        email_address: email,
        status: 'subscribed', // 'subscribed' or 'pending' if you want double opt-in
      };
  
      const response = await fetch(
        `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/`,
        {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          },
          method: 'POST',
        }
      );
  
      if (!response.ok) {
        // If Mailchimp returns an error
        const errorData = await response.json();
        return res.status(response.status).json({ error: errorData });
      }
  
      // If everything is alright
      return res.status(201).json({ error: '' });
    } catch (error) {
      return res.status(500).json({ error: error.message || error.toString() });
    }
  }
  
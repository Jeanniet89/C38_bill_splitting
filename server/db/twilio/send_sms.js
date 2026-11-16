const welcomeText = (phoneNum) => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  if (!accountSid || !authToken) {
    throw new Error('TWILIO_SID and TWILIO_AUTH_TOKEN are required to send SMS.');
  }

  const client = require('twilio')(accountSid, authToken);
  const phoneNumber = '+1' + phoneNum;
  client.messages
    .create({
      body: 'Welcome to Cuenta!',
      to: phoneNumber, // Text this number
      from: '+12017203658' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
};

module.exports = { welcomeText };

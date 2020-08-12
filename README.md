# world-server

## What happens here?

1.) The world-server runs `npm install` from a SSH command sent by our Manager. 

2.) After installing our custom fork of `dialog`... we run it with another SSH command from our Manager: `npm run start`

3.) The world server is now running `dialog`.
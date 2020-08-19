# world-server

## What happens here?

This is the source code for world servers that run on EC2 instances. 
There is a Github action that pre-compiles the node_modules so that EC2 can save time on boot.
We use this repo to pull the latest release into new worlds and install the source code.

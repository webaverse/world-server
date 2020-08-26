const { fetchLatest } = require('gh-release-fetch');
fetchLatest({ repository: 'webaverse/world-server', package: 'world-server.zip', destination: 'world-server' });
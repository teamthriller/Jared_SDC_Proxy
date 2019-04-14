const cors = require('cors');
const express = require('express');
const path = require('path');
const httpproxy = require('http-proxy');

const app = express();
const port = 3111;
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


const proxy = httpproxy.createProxyServer({
    target: "http://ec2-52-91-196-238.compute-1.amazonaws.com/"
});

app.all("/data/toptracks", cors(), (req, res) => {
  proxy.web(req, res, {
    target: "http://ec2-18-191-178-115.us-east-2.compute.amazonaws.com/"
  });
});

app.get('/data/albumswithartist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/'
    });
  });
  app.get('/data/albumsbyartist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/'
    });
  });
  app.get('/data/epswithartist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/'
    });
  });
  app.get('/data/compilationswithartist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/'
    });
  });

app.all("/data/artist/", (req, res) => {
  proxy.web(req, res, {
    target: "http://ec2-52-91-196-238.compute-1.amazonaws.com/"
  });
});

app.all("/icon", (req, res) => {
    proxy.web(req, res, {
      target: "http://ec2-52-91-196-238.compute-1.amazonaws.com/"
    });
  });

app.listen(port, () => console.log(`App listening to port ${port}`));
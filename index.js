require("newrelic");
const cors = require("cors");
const express = require("express");
const path = require("path");
const httpproxy = require("http-proxy");

const app = express();
const port = process.env.PORT || 3111;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const proxy = httpproxy.createProxyServer({});

app.all("/artists/*", cors(), (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3100"
  });
});

app.all("/icon", cors(), (req, res) => {
  proxy.web(req, res, {
    target: "http://localhost:3100"
  });
});

// app.get("/data/albumswithartist/*", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/"
//   });
// });
// app.get("/data/albumsbyartist/*", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/"
//   });
// });
// app.get("/data/epswithartist/*", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/"
//   });
// });
// app.get("/data/compilationswithartist/*", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-13-58-138-231.us-east-2.compute.amazonaws.com/"
//   });
// });

// app.all("/data/artist/", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-34-227-148-64.compute-1.amazonaws.com"
//   });
// });

// app.all("/icon", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-34-227-148-64.compute-1.amazonaws.com"
//   });
// });
// app.all("/data/artist/*", (req, res) => {
//   proxy.web(req, res, {
//     target: "http://ec2-18-191-230-44.us-east-2.compute.amazonaws.com/"
//   });
// });

app.listen(port, () => console.log(`App listening to port ${port}`));

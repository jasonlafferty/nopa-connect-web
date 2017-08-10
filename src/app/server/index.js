import express from 'express';
import webpack from 'webpack';
import open from 'open';
import cmd from 'node-cmd';
import config from '../../../webpack.config.dev';
import Routes from './routes/index';

const serverConf = require(`../../config/server.dev.json`);

/* eslint-disable no-console */

const { domain, port } = serverConf;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use((req, res, next) => {
  req.getUrl = () => {
    return req.protocol + "://" + req.get('host') + req.originalUrl;
  };
  return next();
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  open(`${domain}:${port}`);

  cmd.run(`for pid in $(ps -ef | awk '/ngrok/ {print $2}'); do kill -9 $pid; done`);

  //TODO: Extract to poststart script
  cmd.run(`ngrok http -log="$HOME/ngrok.log" ${port} &`);
});

Routes(app);

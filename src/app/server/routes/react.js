import path from 'path';

export default function (app) {
  // Render React
  app.get('*', (req, res) => {
    res.sendFile(path.join( __dirname, '../../../app/static/index.html'));
  });
}


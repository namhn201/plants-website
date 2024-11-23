// pages/api/data.js

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve(process.cwd(), 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  console.log("JSONDATA", jsonData)
  res.status(200).json(JSON.parse(jsonData));
}


import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve(process.cwd(), 'data.json');  
  try {
    
    const jsonData = fs.readFileSync(filePath, 'utf8');
    
   
    const data = JSON.parse(jsonData);
    

    res.status(200).json(data);
    return data; 
  } catch (error) {
    console.error('Error reading JSON:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return null; 
  }
}


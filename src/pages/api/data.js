// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   const filePath = path.resolve(process.cwd(), 'data.json');
//   try {
//     const jsonData = fs.readFileSync(filePath, 'utf8');
//     const data = JSON.parse(jsonData);
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error reading JSON:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
// pages/api/data.js

// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   const filePath = path.resolve(process.cwd(), 'data.json');  // Đảm bảo đường dẫn chính xác
//   try {
//     // Đọc file data.json từ hệ thống
//     const jsonData = fs.readFileSync(filePath, 'utf8');
    
//     // Chuyển đổi dữ liệu từ JSON thành object  
//     const data = JSON.parse(jsonData);
    
//     // Trả về dữ liệu
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error reading JSON:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// pages/api/data.js

// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   const filePath = path.resolve(process.cwd(), 'data.json');  // Đảm bảo đường dẫn chính xác
//   try {
//     // Đọc file data.json từ hệ thống
//     const jsonData = fs.readFileSync(filePath, 'utf8');
    
//     // Chuyển đổi dữ liệu từ JSON thành object
//     const data = JSON.parse(jsonData);
    
//     // Trả về dữ liệu
//     res.status(200).json(data);
//   } catch (error) {
//     console.error('Error reading JSON:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const filePath = path.resolve(process.cwd(), 'data.json');  // Đảm bảo đường dẫn chính xác
  try {
    // Đọc file data.json từ hệ thống
    const jsonData = fs.readFileSync(filePath, 'utf8');
    
    // Chuyển đổi dữ liệu từ JSON thành object
    const data = JSON.parse(jsonData);
    
    // Trả về dữ liệu
    res.status(200).json(data);
    return data; // Trả về dữ liệu
  } catch (error) {
    console.error('Error reading JSON:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return null; // Trả về null trong trường hợp lỗi
  }
}


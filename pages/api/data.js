import axios from 'axios';

export default async function handler(req, res) {
  const { uid } = req.query; // 쿼리 파라미터에서 uid 추출
  
  // uid 값이 없으면 에러 응답
  if (!uid) {
    return res.status(400).json({ message: 'UID is required' });
  }

  try {
    const response = await axios.get('https://wdjc5gmr5voj7d3dqqwra3sa5m0zapso.lambda-url.ap-southeast-2.on.aws/', {
      params: { uid },
      headers: {
        'accept': 'application/json'
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching external data', error: error.message });
  }
}
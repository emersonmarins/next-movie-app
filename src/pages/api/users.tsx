import { NextApiRequest, NextApiResponse } from 'next';

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Lógica para lidar com requisição GET
    res.status(200).json({ message: 'Rota de usuários' });
  } else if (req.method === 'POST') {
    // Lógica para lidar com requisição POST
    if(req.body.username === 'usertest@test.com' && req.body.password === '1234'){
      // mardar dados para fazer o login no site
      res.status(200).json({ confirmation: true, username: req.body.username });
    } else {
      res.json({ confirmation: false });
      console.log(req.body);
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};

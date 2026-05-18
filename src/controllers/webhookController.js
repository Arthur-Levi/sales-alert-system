exports.handleSale = (req, res) => {

  const { nome, email, valor, status } = req.body;

  console.log('Nova venda recebida');

  console.log({
    nome,
    email,
    valor,
    status
  });

  res.status(200).json({
    success: true,
    message: 'Venda recebida com sucesso'
  });

};
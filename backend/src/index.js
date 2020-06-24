const express = require('express');

const app = express();

app.use(express.json());

// Métodos HTTP:
// GET: buscar informações do back-end
// POST: Criar uma informação no back-end
// PUT/PATCH: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// Tipos de parâmetros:
// Query Params: filtros e paginação
// Route Params: identificar recursos na hora de atualizar ou deletar
// Request Body: conteúdo na hora de criar ou editar um recurso (JSON)

const projects = [];


app.get('/projects', (request, response) => {
  // const {title, owner } = request.query;

  // console.log(title)
  // console.log(owner)

  return response.json(projects);
});

app.post('/projects', (request, response) => {
  const {title, owner} = request.body;
  console.log(title);
  console.log(owner);

  

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const {id} = request.params;

  console.log(id);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});



app.listen(3334, () => {
  console.log('🚀 Back-end started!');
});
import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var clientesService = {
  getClientes: async () => {
    const response = await axios.get('http://localhost:5000/clientes');

    return response;
  },
  getOneClientes: async (id) => {
    const response = await axios.get('http://localhost:5000/clientes/'+ id);

    return response;
  },
  deleteClientes: async (id) => {
    const response = await axios.delete('http://localhost:5000/clientes/'+ id);

    return response;
  },
  postClientes: async (clientes) => {
    const response = await axios.post('http://localhost:5000/clientes/',clientes);

    return response;
  },
  updateClientes: async (id,clientes) => {
    const response = await axios.put('http://localhost:5000/clientes/'+id,clientes);

    return response;
  },
};

export default clientesService;
import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var funcionariosService = {
  getFuncionarios: async () => {
    const response = await axios.get('http://localhost:5000/funcionarios');
    
    return  response;
  },
  getOneFuncionarios: async (id) => {
      const response = await axios.get('http://localhost:5000/funcionarios/'+ id);
      
      return  response;
  },
  postFuncionarios: async (funcionarios) => {
    const response = await axios.post('http://localhost:5000/funcionarios', funcionarios);
    
    return response;
  },
  putFuncionarios: async (id, funcionarios) => {
    const response = await axios.put(`http://localhost:5000/enctfuncionarios/`+id,funcionarios);
    
    return response;
  }, 
  deleteFuncionarios: async (id) => {
    const response = await axios.delete(`http://localhost:5000/funcionarios/`+id);
    
    return response;
  },
};

export default funcionariosService;
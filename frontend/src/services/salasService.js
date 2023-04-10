import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var salasService = {
  getSalas: async () => {
    const response = await axios.get('http://localhost:5000/salas');
    
    return  response;
  },
  getOneSalas: async (id) => {
      const response = await axios.get('http://localhost:5000/salas'+ id);
      
      return  response;
  },
  postSalas: async (salas) => {
    const response = await axios.post('http://localhost:5000/salas', salas);
    
    return response;
  },
  putSalas: async (id, salas) => {
    const response = await axios.put(`http://localhost:5000/enctsalas/`+id,salas);
    
    return response;
  }, 
  deleteSalas: async (id) => {
    const response = await axios.delete(`http://localhost:5000/salas/`+id);
    
    return response;
  },
};

export default salasService;
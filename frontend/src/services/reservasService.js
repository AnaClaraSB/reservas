import axios from 'axios';
/*
const api = axios.create({
  baseURL: 'http://localhost:5000',
});
*/

var reservasService = {
  getReservas: async () => {
    var reservasala = axios.get('http://localhost:5000/apirsvs');
    return await reservasala;
  },
  getOneReservas: async (id) => {
    var reservasala = await axios.get('http://localhost:5000/apirsvs/unica/'+ id);
    return reservasala;
  },
  postReservas: async (reservas) =>{
    var reservasala = await axios.post('http://localhost:5000/apirsvs', reservas);
    return reservasala;
  },
  updtReservas: async (id, reservas) =>{
    var reservasala = await axios.put('http://localhost:5000/apirsvs/'+ id, reservas);
    return reservasala;
  },
  deltReservas: async (id) =>{
    var cancelarrese = await axios.put('http://localhost:5000/apirsvs/cancelar/'+ id);
    return cancelarrese;
  }
};

export default reservasService;
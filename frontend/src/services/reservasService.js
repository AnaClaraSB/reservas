import axios from 'axios';
import salasService from './salasService';

var reservasService = {
  getReservas: async () => {
    var reservasala = axios.get('http://localhost:5000/reservas');
    return await reservasala;
  },
  getOneReservas: async (id) => {
    var reservasala = await axios.get('http://localhost:5000/reservas'+ id);
    return reservasala;
  },
  postReservas: async (reservas) =>{
    var reservasala = await axios.post('http://localhost:5000/reservas', reservas);
    return reservasala;
  },
  updtReservas: async (id, reservas) =>{
    var reservasala = await axios.put('http://localhost:5000/reservas'+ id, reservas);
    return reservasala;
  },
  deltReservas: async (id) =>{
    var cancelarrese = await axios.put('http://localhost:5000/reservas'+ id);
    return cancelarrese;
  },
  updtReservas: async (id,reserva) => {
    const response = await axios.put('http://localhost:5000/reservas/'+id,reserva);

    return response;
  },
  calculaValorReservas: async (idSala,horaInicio, horaFim) => {

    const response = await salasService.getOneSalas(idSala);
    console.log('valor ' + response.valor);
    const valorTotal = response.valor * (horaFim - horaInicio);
    console.log(valorTotal);

    return valorTotal;
  },

  getNumeroReservas: async () => {
    const response = await axios.get('http://localhost:5000/reservas/novonumero');

    return response;
  }
};

export default reservasService;
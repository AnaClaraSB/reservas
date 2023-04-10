import React, { useState, useEffect, Dropdown } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import salasService from '../services/salasService';

function ComboSalas() {

  const [salaReservas, setSalas] = useState([]);

  
  const fetchComboData = async () => {
    
    try {

        const responseSala = await salasService.getSalas();
        setSalas(responseSala.data);
    } catch (error) {
      console.error(error);
    }    
    fetchComboData();      
  };

  return (

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Selecione uma sala
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {salaReservas.map((item) => (
                <Dropdown.Item key={item._id} href="#" onSelect={() => (item)}>
                  {item.numero}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
            </Dropdown>
          
      

  );
}

export default ComboSalas;
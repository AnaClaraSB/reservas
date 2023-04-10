import React from 'react';
import { MDBFooter, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import '../componentes/style.css';

function fooder() {
  return (
    <MDBFooter bgColor='light' className='fooder'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Conecte-se conosco:</span>
        </div>
        <div>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://pt-br.facebook.com/' role='button' >
            <MDBIcon color='primary' fab icon='facebook-f' />
            </MDBBtn>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://twitter.com/login' role='button' >
            <MDBIcon color='primary' fab icon='twitter' />
            </MDBBtn>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://www.google.com.br/' role='button' >
            <MDBIcon color='terciary' fab icon='google' />
            </MDBBtn>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://www.instagram.com/' role='button' >
            <MDBIcon color='quaternary' fab icon='instagram' />
            </MDBBtn>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://br.linkedin.com/' role='button'>
            <MDBIcon color='primary' fab icon='linkedin' />
            </MDBBtn>
          <MDBBtn outline color="blue" floating className='me-4 text-reset' href='https://github.com/' role='button'>
            <MDBIcon color='senary' fab icon='github' />
            </MDBBtn>
        </div>
        <MDBBtn outline color="dark" floating className='me-4 text-reset' href='https://www.whatsapp.com/' role='button'>
            <MDBIcon className='fa-solid fa-greater-than' color='success' fab icon='whatsapp'/>
          </MDBBtn>
        </section>
    </MDBFooter>
  );
}

export default fooder;
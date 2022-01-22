import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function AlertDismissible (props){
    return (
      <>
        <Alert show={props.show} variant="success">
          <Alert.Heading>Obrigado pelo seu voto</Alert.Heading>
          <p>
            Quem será que vai ganhar ? 
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => props.setShowThanks(false)} variant="outline-success">
              Fechar
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
  
  export default AlertDismissible;
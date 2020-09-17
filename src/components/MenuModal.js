/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MenuModal = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="col-12 text-center">
      <Button className="" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="py-2" toggle={toggle} style={{fontSize: 16}}>Add Ons/Extras</ModalHeader>
        <p className="text-center text-muted mt-2 mb-0" style={{fontSize: 12}}>CUSTOMIZE ANY DRINK WITH:</p>
        <p className="modalPheader" style={{fontSize: 16}}>Whipcream</p>
        <p className="modalPheader" style={{fontSize: 16}}>Extra Shot</p>
        <p className="modalPheader" style={{fontSize: 16}}>Soy/Almond/Oat Milk</p>
        <p className="modalPheader" style={{fontSize: 16}}>Flavors</p>
        <ModalBody className="py-1">
          <div className="row" style={{fontSize: 12}}>
              <div className="col-6">
                  <p className="modalP">Almond</p>
                  <p className="modalP">Bourbon Caramel</p>
                  <p className="modalP">Butter scotch</p>
                  <p className="modalP">Caramel</p>
                  <p className="modalP">Coconut</p>
                  <p className="modalP">Créme de menthe</p>
                  <p className="modalP">Créme de bannana</p>
                  <p className="modalP">Cupecake</p>
                  <p className="modalP">English toffee</p>
                  <p className="modalP">Hazelnut</p>
              </div>
              <div className="col-6">
                  <p className="modalP">Irish cream</p>
                  <p className="modalP">Macadamia nut</p>
                  <p className="modalP">Peppermint</p>
                  <p className="modalP">Peanut butter</p>
                  <p className="modalP">Salted caramel</p>
                  <p className="modalP">Toasted match mellow</p>
                  <p className="modalP">Vanilla</p>
                  <p className="modalP">Vanilla bean</p>
              </div>
          </div>
        </ModalBody>
        <p className="modalPheader" style={{fontSize: 16}}>Fruity Flavors</p>
        <ModalBody className="pt-1">
          <div className="row" style={{fontSize: 12}}>
              <div className="col">
                  <p className="modalP">Red raspberry</p>
                  <p className="modalP">Blue raspberry</p>
                  <p className="modalP">Water mellon</p>
                  <p className="modalP">Strawberry</p>
                  <p className="modalP">Kiwi</p>
                  <p className="modalP">Passion fruit</p>
              </div>
              <div className="col">
                  <p className="modalP">Rose</p>
                  <p className="modalP">Mango</p>
                  <p className="modalP">Peach</p>
                  <p className="modalP">Pineapple</p>
                  <p className="modalP">Pomegranate</p>
              </div>
          </div>          
        </ModalBody>
        <ModalFooter className="p-2">
          <Button id="modalButton" color="success" onClick={toggle}>Got it!</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default MenuModal;
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const FlavorPop = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div className="col-12 text-center mt-2">
      <Button id="Popover1" type="button">
        FLAVOR
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverBody>
          <div className="row" style={{fontSize: 12}}>
              <div className="col-6">
                  <p className="my-0 px-0">Almond</p>
                  <p className="my-0">Bourbon Caramel</p>
                  <p className="my-0">Butter scotch</p>
                  <p className="my-0">Caramel</p>
                  <p className="my-0">Coconut</p>
                  <p className="my-0">Créme de menthe</p>
                  <p className="my-0">Créme de bannana</p>
                  <p className="my-0">Cupecake</p>
                  <p className="my-0">English toffee</p>
              </div>
              <div className="col-6">
                  <p className="my-0 px-0">Hazelnut</p>
                  <p className="my-0">Irish cream</p>
                  <p className="my-0">Macadamia nut</p>
                  <p className="my-0">Peppermint</p>
                  <p className="my-0">Peanut butter</p>
                  <p className="my-0">Salted caramel</p>
                  <p className="my-0">Toasted match mellow</p>
                  <p className="my-0">Vanilla</p>
                  <p className="my-0">Vanilla bean</p>
              </div>
          </div>
        </PopoverBody>
        <PopoverHeader>Fruity Flavors</PopoverHeader>
        <PopoverBody>
          <div className="row" style={{fontSize: 12}}>
              <div className="col">
                  <p className="my-0">Red raspberry</p>
                  <p className="my-0">Blue raspberry</p>
                  <p className="my-0">Water mellon</p>
                  <p className="my-0">Strawberry</p>
                  <p className="my-0">Kiwi</p>
                  <p className="my-0">Passion fruit</p>
              </div>
              <div className="col">
                  <p className="my-0">Rose</p>
                  <p className="my-0">Mango</p>
                  <p className="my-0">Peach</p>
                  <p className="my-0">Pineapple</p>
                  <p className="my-0">Pomegranate</p>
              </div>
          </div>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default FlavorPop;

{/*

import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./Global.css"

const PopoverItem = props => {
  const { id, item } = props;
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <span>
      <Button
        className=""
        color=""
        id={"Popover-" + id}
        type="button"
      >
        {item.text}
      </Button>
      <Popover
        placement='top'
        isOpen={popoverOpen}
        target={"Popover-" + id}
        toggle={toggle}
      >
        <PopoverHeader>Flavors</PopoverHeader>
        <PopoverBody>
          <div className="row">
              <div className="col-6">
                  <p className="my-0">Almond</p>
                  <p className="my-0">Bourbon Caramel</p>
                  <p className="my-0">Butter scotch</p>
                  <p className="my-0">Caramel</p>
                  <p className="my-0">Coconut</p>
                  <p className="my-0">Créme de menthe</p>
                  <p className="my-0">Créme de bannana</p>
                  <p className="my-0">Cupecake</p>
                  <p className="my-0">English toffee</p>
              </div>
              <div className="col-6">
                  <p className="my-0">Hazelnut</p>
                  <p className="my-0">Irish cream</p>
                  <p className="my-0">Macadamia nut</p>
                  <p className="my-0">Peppermint</p>
                  <p className="my-0">Peanut butter</p>
                  <p className="my-0">Salted caramel</p>
                  <p className="my-0">Toasted match mellow</p>
                  <p className="my-0">Vanilla</p>
                  <p className="my-0">Vanilla bean</p>
              </div>
          </div>
        </PopoverBody>
        <PopoverHeader> Fruity Flavors</PopoverHeader>
        <PopoverBody>
          <div className="row">
              <div className="col">
                  <p className="my-0">Red raspberry</p>
                  <p className="my-0">Blue raspberry</p>
                  <p className="my-0">Water mellon</p>
                  <p className="my-0">Strawberry</p>
                  <p className="my-0">Kiwi</p>
                  <p className="my-0">Passion fruit</p>
              </div>
              <div className="col">
                  <p className="my-0">Rose</p>
                  <p className="my-0">Mango</p>
                  <p className="my-0">Peach</p>
                  <p className="my-0">Pineapple</p>
                  <p className="my-0">Pomegranate</p>
              </div>
          </div>
        </PopoverBody>
      </Popover>
    </span>
  );
};

const FlavorPop = props => {
  return (
    <>
      {[
        {
          placement: "top",
          text: "Flavor"
        }
      ].map((popover, i) => {
        return <PopoverItem key={i} item={popover} id={i} />;
      })}
    </>
  );
};

export default FlavorPop;*/}
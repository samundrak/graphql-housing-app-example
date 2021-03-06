import React, { Fragment } from 'react';
import renderIf from 'render-if';
import styled from 'styled-components';
import Button from './Button';
import Overlay from './Overlay';

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 20px 50px;
  border-radius: 5px;
  min-width: 200px;
  background-color: white;
  z-index: 99999;
  position: absolute;
`;
const Footer = styled.div`
  border-radius: 5px;
  background-color: #f1f1f1;
  padding: 10px;
`;
const Popup = ({
  children,
  onCancel = () => null,
  onApply = () => null,
  style = {},
  enableFooter = true,
}) => {
  return (
    <div>
      <Overlay onClick={onCancel} />
      <Container style={style}>
        <Fragment>
          {children}
          {renderIf(enableFooter)(
            <Footer>
              <Button type="simple" onClick={onCancel}>
                Cancel
              </Button>
              <Button onClick={onApply}>Apply</Button>
            </Footer>
          )}
        </Fragment>
      </Container>
    </div>
  );
};
export default Popup;

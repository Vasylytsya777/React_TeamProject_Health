import styled from 'styled-components';


const ModalStyled = styled.div`
    max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px);
  
  .overlay {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    top: 8%;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: var(--burger-background);
   
    font-size: 24px;
    padding-top: 108px;
  }  
  .overlay .navlink {
    color: var(--secondary-text);
  }
  .overlay .navlinkActive {
    color: var(--light-text);
}
.overlay .navlinkActive:hover {
    color: var(--light-text);
}


`


export default ModalStyled;

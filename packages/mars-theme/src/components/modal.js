import React, {useRef, useFocusEffect} from "react";
import {connect, styled, Global} from "frontity";
import {Container, Row, Col, mq} from "@osirispp/frontity-layout";
import {CloseIcon} from "./icons";
import {fadeIn, slideDown} from "./styles/animations";

const Modal = ({state, actions}) =>{

    const {isModalOpen,modalTitle, modalContent} = state.theme.modal;
    const { closeModal } = actions.theme;

    const closeModalOverlay = (e) =>{
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        closeModal();
    }

    /**
     * Keep a reference to the close button so we can focus on it when
     * the modal opens
     */
    // const closeButtonRef = useRef();

    // Focus on the close button when the mobile menu is open
    // useFocusEffect(closeButtonRef, isModalOpen);
    return isModalOpen?(
        <ModalWrapper data-open={isModalOpen} role="dialog" aria-modal="true" onClick={(e)=>{closeModalOverlay(e)}}>
            <ModalInner>
                {/* Global styles to prevent body scroll when the menu is open */}
                {isModalOpen && (
                    <Global styles={{ body: { overflowY: "hidden" } }} />
                )}
                <InnerWrapper>
                    <ModalCard size={12} sizeMD={10} sizeLG={8} sizeXL={6} mxAuto>
                        <CardWrapper alignCenter onClick={(e)=>{e.stopPropagation()}}>
                            <ModalHeader size={12} colors={state.theme.colors}>
                                {modalTitle && (
                                    <ModalTitle>{state.theme.modalTitle}</ModalTitle>
                                )}
                                <CloseButton colors={state.theme.colors} onClick={closeModal}>
                                    <CloseIcon onClick={closeModal}/>
                                </CloseButton>
                            </ModalHeader>
                            <ModalBody size={12}>
                                {modalContent()}
                            </ModalBody>
                        </CardWrapper>
                    </ModalCard>
                </InnerWrapper>
            </ModalInner>
        </ModalWrapper>
    ) : null;
}

export default connect(Modal);



const CardWrapper = styled(Row)`
    height: 100%;
    align-content: baseline;
`;

const ModalWrapper = styled.div`
  background: rgba(0,0,0,0.7);
  display: none;
  opacity: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 200;
  animation: ${fadeIn} 0.2s ease-out;

  &[data-open="true"] {
    display: flex;
    left: 0;
    opacity: 1;
    right: 0;
    transition: opacity 0.25s ease-out;
    align-items: baseline;
  }
`;

const ModalInner = styled(Container)`
    height: 100%;
`;

const InnerWrapper = styled(Row)`
    height: 100%;
    align-content: baseline;
    margin: 0;
`;

const ModalCard = styled(Col)`
    background: #fff;
    overflow: auto;
    margin-top: 10vh;
    margin-bottom: 10vh;
    border-radius: 5px;
    animation: ${slideDown} 0.4s ease-out;
`;

const ModalHeader = styled(Col)`
    ${({colors})=>`
        background-color: ${colors.gray.lighter};
        align-self: baseline;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: 70px;
        text-align: left;
        color: ${colors.green.base};
        font-weight: bold;
    `}
`;

const ModalTitle = styled.h4`
  margin: 0; 
`;

const CloseButton = styled.div`
  ${({colors}) => `
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 70px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg{
        fill: ${colors.green.base};
        display: inline-block;
        transform: scale(1.2);
    }
  `}
`;

const ModalBody = styled(Col)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${mq.md}{
      padding: 2.5rem;
  }
`;

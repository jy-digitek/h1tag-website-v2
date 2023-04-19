import React from "react";
import * as Yup from "yup";
import { useState } from "react";
import {
    // Box,
    // Button,
    Modal,
    ModalOverlay,
    ModalHeader,
    // ModalFooter,
    ModalContent,
    ModalCloseButton,
    ModalBody,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { GlobalButton } from "./GlobalButton";

import axios from "axios";

import ContactForm from "./contactform";

export default function ReturnFocus({
    btnText,
    modalTitle,
    isEditingSet,
    // openModalSet,
    w,
    children,
    ...rest
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef(null);
    const [openModal, openModalSet] = React.useState(false);

    const [success, successSet] = useState(false);
    const [loading, loadingSet] = useState(false);
    // const [message, messageSet] = useState(false);

    const submitHandle = async (values) => {
        loadingSet(true);
        const name = values.name;
        const email = values.email;
        const phone = values.phone;
        const branch = values.branch;
        const terms_accepted = values.terms_accepted;
        try {
            const res = await axios({
                method: "POST",
                url: "/mail.php",
                data: {
                    name,
                    email,
                    branch,
                    phone,
                    terms_accepted,
                },
            });
            console.log("Res=>", res.data);
            // console.log("Loading=>", loading);
            console.log("Success=>", success);
            if (res.data == "Mail Sent") {
              successSet(true);
                openModalSet(false);
            } else successSet(false);
          loadingSet(false);
        } catch (error) {}
    };
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const initialValues = {
        name: "",
        email: "",
        phone: "",
        terms_accepted: false,
        branch: "",
    };
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("Invalid email address!")
            .required("Email is required!"),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid!")
            .min(10, "Phone number can not be less than 10 digits!")
            .max(10, "Phone number can not exceed 10 digits!")
            .required("Phone Number is required!"),
        branch: Yup.string().required(),
        terms_accepted: Yup.boolean().required(
            "Please agree to Privacy Policy!"
        ),
    });
  React.useEffect(() => {
    setTimeout(() => {
      successSet(false);
      console.log('a')
      }, 0)
  }, [success])

    return (
        <>
            <GlobalButton
                display={{ base: "block", md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                onClick={(e) => {
                    openModalSet(true);
                    onOpen(e);
                }}
                label={btnText}
                background="#3950a1"
                _hover={{ background: "#101C32" }}
                {...rest}
            />
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalTitle}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
              <ContactForm success={success} successSet={successSet} loading={loading} validationSchema={validationSchema} initialValues={initialValues} submitHandle={submitHandle} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

import React, { createContext, useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../utils/mutations";
import { LOGIN } from "../utils/mutations";

const CategoriesAndStartContext = createContext();

export const useCategoriesAndStartContext = () => {
    return useContext(CategoriesAndStartContext);
};

export const RenderingCategoriesAndSearchProvider = ({ children }) => {
    const [showCategories, setShowCategories] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const onStartCategoriesClick = () => {
        console.log("Start Reading or Categories clicked.");
        setShowCategories(true);
        setShowSearch(false);
    };

    const onSearchClick = () => {
        console.log("Search clicked.");
        setShowSearch(true);
        setShowCategories(false);
    };

    const onOtherClick = () => {
        console.log("Other clicked.");
        setShowSearch(false);
        setShowCategories(false);
    };

    return (
        <CategoriesAndStartContext.Provider value = {{ showCategories, showSearch, onStartCategoriesClick, onSearchClick, onOtherClick }}>
            {children}
        </CategoriesAndStartContext.Provider>
    );
};

const RegisterModalContext = createContext();

export const useRegisterModalContext = () => {
    return useContext(RegisterModalContext);
};

export const RenderingRegisterModalProvider = ({ children }) => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const onClickOpenRegisterModal = () => {
        console.log("Register clicked.");
        setShowRegisterModal(true);
    };

    const onClickCloseRegisterModal = () => {
        console.log("Close X clicked for closing register modal");
        setShowRegisterModal(false);
    };

    return (
        <RegisterModalContext.Provider value = {{ showRegisterModal, onClickOpenRegisterModal, onClickCloseRegisterModal }}>
            {children}
        </RegisterModalContext.Provider>
    );
};

const LoginModalContext = createContext();

export const useLoginModalContext = () => {
    return useContext(LoginModalContext);
};

export const RenderingLoginModalProvider = ({ children }) => {
    const [showLoginModal, setShowLoginModal] = useState(false);

    const onClickOpenLoginModal = () => {
        console.log("Login from Navbar clicked.")
        setShowLoginModal(true);
    };

    const onClickCloseLoginModal = () => {
        console.log("Close X clicked for closing register modal")
        setShowLoginModal(false);
    };

    return (
        <LoginModalContext.Provider value = {{ showLoginModal, onClickOpenLoginModal, onClickCloseLoginModal }}>
            {children}
        </LoginModalContext.Provider>
    );
};

const ContactUsModalContext = createContext();

export const useContactUsModalContext = () => {
    return useContext(ContactUsModalContext);
};

export const RenderingContactUsModalProvider = ({ children }) => {
    const [showContactUsModal, setShowContactUsModal] = useState(false);

    const onClickOpenContactUsModal = () => {
        console.log("Contact Us clicked.")
        setShowContactUsModal(true);
    };

    const onClickCloseContactUsModal = () => {
        console.log("Close X clicked for closing contact us modal")
        setShowContactUsModal(false);
    };

    return (
        <ContactUsModalContext.Provider value = {{ showContactUsModal, onClickOpenContactUsModal, onClickCloseContactUsModal }}>
            {children}
        </ContactUsModalContext.Provider>
    );
};

const CareersModalContext = createContext();

export const useCareersModalContext = () => {
    return useContext(CareersModalContext);
};

export const RenderingCareersModalProvider = ({ children }) => {
    const [showCareersModal, setShowCareersModal] = useState(false);

    const onClickOpenCareersModal = () => {
        console.log("Careers clicked.")
        setShowCareersModal(true);
    };

    const onClickCloseCareersModal = () => {
        console.log("Close X clicked for closing careers modal")
        setShowCareersModal(false);
    };

    return (
        <CareersModalContext.Provider value = {{ showCareersModal, onClickOpenCareersModal, onClickCloseCareersModal }}>
            {children}
        </CareersModalContext.Provider>
    );
};

export const RegisterFormDataHandler = () => {
    const [registerFormData, setRegisterFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        dOfb: "",
    });

    const HandleRegisterInputChange = (e) => {
        const { id, value } = e.target;
        setRegisterFormData((prevData) => {
            const newData = { ...prevData, [id]: value };
            console.log(newData);
            return newData;
        });
    };

    const [passwordMatchError, setPasswordMatchError] = useState(false);

    const [addUserMutation] = useMutation(REGISTER);
    const [successfulRegistration, setSuccessfulRegistration] = useState(false);

    const handleUserRegistration = async () => {
        console.log("handleUserRegistration function called");

        try {
            const { data } = await addUserMutation({
                variables: {
                    firstName: registerFormData.firstName,
                    lastName: registerFormData.lastName,
                    userName: registerFormData.userName,
                    email: registerFormData.email,
                    password: registerFormData.password,
                    dOfb: registerFormData.dOfb,
                },
            });

            console.log("Registration data:", data, data.addUser.success);

        if (data.addUser.success) {
            setSuccessfulRegistration(true);
        }
            
        } catch (error) {
            console.error("Registration error:", error.message);
        }
    }

    const onClickRegisterButton = (e) => {
        e.preventDefault();
        console.log("Register button clicked.");
        if (registerFormData.password === registerFormData.confirmPassword) {
            console.log("passwordvalidation");
            setPasswordMatchError(false);
            handleUserRegistration();
        } else {
            console.log("no match");
            setPasswordMatchError(true);
        }
    }

    return {
        registerFormData,
        HandleRegisterInputChange,
        onClickRegisterButton,
        handleUserRegistration,
        successfulRegistration,
        passwordMatchError,
    };
};

const SuccessfulRegisterationModalContext = createContext();

export const useSuccessfulRegisterationModalContext = () => {
    return useContext(SuccessfulRegisterationModalContext);
};

export const RenderingSuccessfulRegistrationModal = ({ children }) => {
    const [showSuccessfulRegisterModal, setShowSuccessfulRegisterModal] = useState(false);

    const openSuccessfulRegistration = () => {
        console.log("open success function called");
        setShowSuccessfulRegisterModal(true);
    };

    const onClickCloseSuccessfulRegistrationModal = () => {
        console.log("Close X clicked for closing careers modal")
        setShowSuccessfulRegisterModal(false);
    };

    return (
        <SuccessfulRegisterationModalContext.Provider value = {{ showSuccessfulRegisterModal, onClickCloseSuccessfulRegistrationModal, openSuccessfulRegistration }}>
            {children}
        </SuccessfulRegisterationModalContext.Provider>
    );
};

export const LoginFormDataHandler = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: "",
    });

    const handleLoginInput = (e) => {
        const { id, value } = e.target;
        setLoginFormData((prevData) => {
            const newData = { ...prevData, [id]: value };
            console.log(newData);
            return newData;
        });
    };

    const [loginUserMutataion] = useMutation(LOGIN);
    const [successfulLogin, setSuccessfulLogin] = useState(false);

    const handleUserLogin = async () => {
        console.log("handleUserLogin function called.");

        try {
            const { data } = await loginUserMutataion({
                variables: {
                    email: loginFormData.email,
                    password: loginFormData.password,
                },
            });

            console.log("Login data:", data.login.success);

            if (data.login.success) {
                setSuccessfulLogin(true);
            }

        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    const onClickLoginButton = (e) => {
        e.preventDefault();
        console.log("Login button clicked.");
        handleUserLogin();
    };

    return {
        loginFormData,
        handleLoginInput,
        successfulLogin,
        handleUserLogin,
        onClickLoginButton,
    };
};
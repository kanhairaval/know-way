import React, { createContext, useContext, useState } from "react";

const EventHandlerContext = createContext();

export const useEventHandler = () => {
    return useContext(EventHandlerContext);
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
        <EventHandlerContext.Provider value = {{ showCategories, showSearch, onStartCategoriesClick, onSearchClick, onOtherClick }}>
            {children}
        </EventHandlerContext.Provider>
    );
};
import React, { useState } from "react";

const RenderingCategories = () => {
    const [showCategories, setShowCategories] = useState(false);

    const onStartCategoriesClick = () => {
        console.log("Button Clicked");
        setShowCategories((prevShowCategories) => !prevShowCategories);
    };

    return {
        showCategories,
        onStartCategoriesClick,
    };
};

export default RenderingCategories;
import React, { useState } from "react";
import { PickerOverlay } from "filestack-react-18";

const FileStack = () => {
    const [isPickerOverlayVisible, setIsPickerOverlayVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleVisible = () => {
        setIsPickerOverlayVisible(!isPickerOverlayVisible);
    };

    return (
        <div>
            <button onClick={handleVisible}>Picker Overlay</button>

            <div>
                {isPickerOverlayVisible && (
                    <PickerOverlay
                        apikey="A7IVreh7JQ5eq97vdu6HNz"
                        onSuccess={(result) => {
                            setImageUrl(result.filesUploaded[0].url);
                            setIsPickerOverlayVisible(false);
                        }}
                    />
                )}
            </div>
            {/* you need to store this url to your database */}
            <a href={imageUrl}>click and open image url </a>
        </div>
    );
};

export default FileStack;
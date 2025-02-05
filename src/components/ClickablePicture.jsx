import { useState } from "react";

function ClickablePicture() {
    const [imageIndex, setImageIndex] = useState(0);
    
    const nextImage = () => {
        if (imageIndex < 2) {  
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    }
    
    const previousImage = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(2); // Cycle back to last image
        }
    }

    return (
        <div>   
            {imageIndex === 0 ? (
                <img 
                    onClick={nextImage} 
                    src="https://tinyurl.com/yc5fphhz" 
                    alt="person" 
                />
            ) : (
                <img 
                    onClick={previousImage} 
                    src="https://tinyurl.com/347csr9c" 
                    alt="person" 
                />
            )}
        </div>
    )
}

export default ClickablePicture;


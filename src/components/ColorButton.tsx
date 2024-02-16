import React from "react";
import "./ColorButtonStyle.css";

interface ColorButtonProps {
    col: string;
    action: (col: string) => void;
}

const ColorButton: React.FC<ColorButtonProps> = (props) => {
    return (
        <button
            onClick={() => props.action(props.col)}
            style={{ backgroundColor: props.col }}
        >
            Color Button
        </button>
    );
};

export default ColorButton;

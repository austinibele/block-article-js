import EditorEditor from "./components/editor-editor/Editor";
import Renderer from "./Renderer";

export default function Editor({ onDataChange, data, setData, uploadEndPoint, isEditMode }) {
    const handleDataChange = (updatedData) => {
        setData(updatedData);
        if (onDataChange) {
            onDataChange(updatedData);
        }
    };

    // Define the inline styles
    const outerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '0.25rem', 
        margin: '1.5rem',
    };

    const innerStyle = {
        marginTop: '1.5rem',
        maxWidth: '1000px',
        width: '100%', 
    };

    return (
        <div style={outerStyle}>
            <div style={innerStyle}>
                {isEditMode ? (
                    <EditorEditor data={data} setData={handleDataChange} uploadEndPoint={uploadEndPoint} />
                ) : (
                    <Renderer data={data} />
                )}
            </div>
        </div>
    );
};

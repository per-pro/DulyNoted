import React from "react";

class TextContent extends React.Component {

    render () {
        const { text, annotations, handleMouseUp, handleMouseDown, selectAnnotation } = this.props;
        let annotatedContent = [];
        let prevIndex = 0;
        let key = 0

        for (let i = 0; i < annotations.length; i++) {
            const annotation = annotations[i];
            const content = text.contents.slice(annotation.startIndex, annotation.endIndex)
            let before = text.contents.slice(prevIndex, annotation.startIndex);

            annotatedContent.push(
                <span key={key++} data-indexoffset={prevIndex}>
                    {before}
                </span>
            );

            if (annotation.id === 'new') {
                annotatedContent.push(
                    <span className="content-selected">{content}</span>
                )
            } else {
                annotatedContent.push(
                    <a key={key++}
                        onClick={() => { selectAnnotation(annotation.id) }}
                        className="content-annotated"
                        unselectable="on"
                    >
                        {content}
                    </a>
                )
            }
        
            prevIndex = annotation.endIndex

            if (i === annotations.length - 1) {
                annotatedContent.push(
                    <span key={key++} data-indexoffset={prevIndex}>
                        {text.contents.slice(prevIndex, text.contents.length)}
                    </span>
                )
            }  
        }

        if (annotatedContents.length) {
            return (
                <p className="content-text" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown}>
                    {annotatedContent}
                </p>
            )
        } else {
            return (
                <p className="content-text" onMouseUp={handleMouseUp} onMouseDown={handleMouseDown} data-indexoffset={0}>
                    {this.props.text.content}
                </p>
            )
        }
    }
}

export default TextContent;
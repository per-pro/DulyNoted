import { connect } from "react-redux";
import { deleteAnnotation } from "../../actions/annotation_actions";
import AnnotationShow from "./annotation_show";

const mapSTP = (state, ownProps) => ({
    annotation: state.entities.annotations[ownProps.annotationId],
    text: state.entities.texts[ownProps.match.params.textId],
    currentUserId: state.session.currentUserId,
    selectAnnotation: ownProps.selectAnnotation,
    clearAnnotation: ownProps.clearAnnotation,
});

const mapDTP = (dispatch, ownProps) => ({
    deleteAnnotation: (annotationId) => dispatch(deleteAnnotation(annotationId)),

});

export default connect(mapSTP, mapDTP)(AnnotationShow);
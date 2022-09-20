import {connect} from "react-redux";
import TextIndex from "./text_index";
import { requestAllTexts } from "../../actions/text_actions";

const mapStateToProps = (state, ownProps) => ({
    texts: state.entities.texts
});

const mapDispatchToProps = (dispatch) => ({
    requestAllTexts: ()=> dispatch(requestAllTexts())
});

export default connect(mapStateToProps, mapDispatchToProps)(TextIndex);
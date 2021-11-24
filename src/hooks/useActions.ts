import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreators} from "../store/reducers/action-creators";


//Связывает все экшен креэйторы с диспатчем
export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)

}
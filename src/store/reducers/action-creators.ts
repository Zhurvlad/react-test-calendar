import {AuthActionsCreators} from "./auth/action-creators";
import {EventActionCreators} from "./event/actions-creators";


export const allActionCreators = {
    ...AuthActionsCreators,
    ...EventActionCreators
}
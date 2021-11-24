import {EventAction, EventActionEnum, EventState} from "./types";



const initialState: EventState = {
    guests: [],
    events: []
}

export default function EventReducer(state = initialState, actions:EventAction):EventState {
    switch (actions.type) {
        case EventActionEnum.SET_EVENTS:
            return {
                ...state,
                events: actions.payload
            }
        case EventActionEnum.SET_GUESTS:
            return {
                ...state,
                guests: actions.payload
            }
        default:
            return state
    }
}
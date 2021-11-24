import {EventActionEnum, SetEventsActions, SetGuestsActions} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";


export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsActions  => ({type: EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]):SetEventsActions => ({type: EventActionEnum.SET_EVENTS, payload}),
    fetchGuests: () => async (dispatch: AppDispatch) => {
        try {
            const guests = await UserService.getUsers()
            dispatch(EventActionCreators.setGuests(guests.data))
        } catch (e) {
            console.log(e)
        }
    },

    createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("event") || "[]"
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('event', JSON.stringify(json))
        } catch (e) {
            console.log(e)
        }
    },

    fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
        try {
            const events = localStorage.getItem("event") || "[]"
            const json = JSON.parse(events) as IEvent[];
            const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
            dispatch(EventActionCreators.setEvents(currentUserEvents))
        }catch (e) {

        }
    }

}
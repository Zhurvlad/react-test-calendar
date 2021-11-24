import React, {FC} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event:FC = () => {
    const [visible, setVisible] = React.useState(false)
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    const {fetchGuests, createEvent, fetchEvents} = useActions()

    const toggleVisible = () => {
        setVisible(!visible)
    }

    React.useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const  addNewEvent = (event: IEvent) => {
        setVisible(false)
        createEvent(event)
    }

    return (
        <Layout>
            <div>{JSON.stringify(events)}</div>
           <EventCalendar events={events}/>
           <Row justify={'center'}>
               <Button onClick={() => toggleVisible()}>
                   Добавить событие
               </Button>
           </Row>
            <Modal
                onCancel={() => toggleVisible()}
                footer={null}
                visible={visible}
                title={'Добавить событие'}>
                <EventForm
                guests={guests}
                submit={addNewEvent}
                />
            </Modal>

        </Layout>
    );
};

export default Event;

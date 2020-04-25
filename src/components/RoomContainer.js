import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomList';
import { withRoomConsumer } from '../context';
import Loading from './Loading';

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <RoomsFilter rooms={rooms}></RoomsFilter>
            <RoomsList rooms={sortedRooms}></RoomsList>
        </>
    )
}
export default withRoomConsumer(RoomContainer);
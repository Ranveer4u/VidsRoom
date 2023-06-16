import React from "react";
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'


const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async (element) => {
       const appID = 2005352913;
       const serverSecret = "489844d4c0c112be320defbf1d030a53"; 
       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(), 'Ranveer');
       const zp = ZegoUIKitPrebuilt.create(kitToken);
       zp.joinRoom({
        container:element,
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference
        }
       });
    };

    return <div className="room-page">
        <div ref={myMeeting}/>
    </div>;

};

export default RoomPage;
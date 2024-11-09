import { useContext } from "react";
import { AdminContext } from "../service/AdminContext";
import React from 'react';


export function AdminProfile() {
    const { admin } = useContext(AdminContext);
    return (<>
        <h3>Travels Name:{admin.operator} </h3>
        <h3>Email: {admin.email}</h3>
        <h3>Total Bus Count:{admin.bus.length}</h3>
        <button type="">Edit Profile</button>
        </>

    );
}
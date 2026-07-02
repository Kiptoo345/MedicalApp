import { createContext, useContext, useState, useEffect } from "react";

const AppointmentsContext = createContext(null);


const STORAGE_KEY = "medibook-appointments";


export function AppointmentsProvider({ children }) {
    const [appointments, setAppointments] = useState(() => {
    // Load saved appointments from localStorage on first render
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved? JSON.parse(saved): [];
});


// Whenever appointments change, save them to localStorage
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify (appointments));
    }, [appointments]);

    function bookAppointment(newAppointment) {
        setAppointments ((prev) => [...prev, newAppointment]);
    }

    function cancelAppointment (appointmentId) {
        setAppointments ((prev) =>
            prev.filter((appt) => appt.id !== appointmentId)
        );
    }


    const value = {
        appointments,
        bookAppointment,
        cancelAppointment,
    };

    return (
        <AppointmentsContext.Provider value={value}>
            {children}
        </AppointmentsContext.Provider>
    );
}

// Custom hook for easy access in any component
export function useAppointments() {
    const context = useContext(AppointmentsContext);
    if (!context) {
        throw new Error(
            "useAppointments must be used within an AppointmentsProvider"
        );
    }
    return context;
}
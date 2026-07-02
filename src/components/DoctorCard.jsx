import { Link } from "react-router-dom";
import "./DoctorCard.css";

function DoctorCard({ doctor }) {//this is an example of a prop(properties) that basically act as a function argument
    return (
        <div className="doctor-card">
            <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
            <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="speciality">{doctor.specialty}</p>
                <p className="meta">
                    🌟 {doctor.rating} . {doctor.experienceYears} yrs experience
                </p>
                <Link to={`/doctors/${doctor.id}`} className="view-profile-btn">
                    View Profile
                </Link>
            </div>
        </div>
    );
}


export default DoctorCard;
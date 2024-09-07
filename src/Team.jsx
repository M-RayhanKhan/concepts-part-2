import { useState } from "react";

const Team = () => {

    const [team, setTeam] = useState(11);
    const handleAddPlayer = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    
    const handleRemove = ()=>{
        const newTeam = team - 1;
        setTeam(newTeam);
    }


    const teamStyle ={
        margin:'15px',
        padding:'15px',
        border: '2px solid green',
        borderRadius: '15px'
    }
    return (
        <div style={teamStyle}>
          <h3>Players: {team}</h3>
          <button onClick={handleAddPlayer}>Add</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Team;
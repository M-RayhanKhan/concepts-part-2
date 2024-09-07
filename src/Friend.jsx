/* eslint-disable react/prop-types */

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div style={{border: "2px solid purple", padding:"16px", margin:"5px", borderRadius:"15px"}}>
            <h3>Name: {name}</h3>
            <h4>Name: {email}</h4>
        </div>
    );
};

export default Friend;
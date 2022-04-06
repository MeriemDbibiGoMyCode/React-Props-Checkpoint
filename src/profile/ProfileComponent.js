import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  console.log(props);

  // destructuring
  const { fullName, bio, profession, handleName} = props;
  const styleImage={ border: "1px solid",width:"80px",height:"140px"};
  const styleFullName={ color:"red" ,textAlign:"center"};
  const styleBio={ textAlign:"center"};
  const styleProfession={ color:"blue" ,textAlign:"center"};

  return (
    <div>
      <h1 style={styleFullName}>{fullName}</h1>
      <p style={styleBio}>{bio}</p>
      <h3 style={styleProfession}>{profession}</h3>
      <img style={styleImage} src="./profile.jpg" alt="profile" />
      <button onClick={()=>handleName(fullName)}> Cliquez ici </button>
    </div>
  );
};

ProfileComponent.defaultProps={
  fullName:"Il n'y a pas une Props"
}
ProfileComponent.propTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string
}

export default ProfileComponent;

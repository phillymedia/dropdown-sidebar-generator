import React from 'react';

const AddButton = (props) => {
    return (
      <button className={"add-section " + props.class}>+ Add a sidebar</button>
    )
}

export default AddButton;

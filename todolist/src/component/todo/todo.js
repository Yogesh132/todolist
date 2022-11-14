import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);

  //////////////////////////////////////////////////
  const addItem = () => {
    if (!inputdata) {
      alert("Please fill the data");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
    }

    setInputData("");
  };
  /////////////////////////////////////////////////////
  const deleteItem = (itemId) => {
    const values = items.filter((item) => item.id !== itemId);
    setItems(values);
  };
  //////////////////////////////////////////////////////////
  const editItem = (curId) => {
    setInputData(curId.name);

    const editmap = items.map((item) =>
      item.id === curId.id ? { ...item, id: item.id, name: inputdata } : item
    );

    console.log(editmap);
  };

  //     setInput((values) =>
  //     values.map((el) =>
  //       el.id === id
  //         ? {
  //             ...el,
  //             value: e.target.value
  //           }
  //         : el
  //     )
  //   );
  /////////////////////////////////////////////////////////
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://www.sketchappsources.com/resources/source-image/sketch-3-todo-list-app-icon-template.png"
              alt="Todologo"
            />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍🏻 Add Item"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />

            <i className="fa fa-solid fa-plus" onClick={addItem}></i>
          </div>
          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-solid fa-edit"
                      onClick={() => editItem(curElem)}
                    ></i>
                    <i
                      class="fa fa-thin fa-trash-alt"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text>
              {" "}
              <span>CHECKLIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

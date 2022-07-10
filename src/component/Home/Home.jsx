import Logo from "../../asset/logo.png";
import { useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ClearIcon from "@mui/icons-material/Clear";
import "./Home.css";
const Home = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const height = window.innerHeight;
  // const [item,setItem]=useState("");
  const item = "";
  const handleChange = (e, i, item) => {
    setEducation(
      education.map((items, j) => {
        return j === i ? e.target.value : items;
      })
    );
  };
  const handleDelete = (i) => {
    const deleteData = education.filter((item, j) => {
      return j !== i;
    });
    setEducation(deleteData);
  };
  const handleDelete1 = (i) => {
    const deleteData = experience.filter((item, j) => {
      return j !== i;
    });
    setExperience(deleteData);
  };
  const handleChange1 = (e, i, item) => {
    setExperience(
      experience.map((items, j) => {
        return j === i ? e.target.value : items;
      })
    );
  };
  const handleAdd = () => {
    setShow(true);
    setEducation([...education, item]);
  };
  const handleAdd1 = () => {
    setShow1(true);
    setExperience([...experience, item]);
  };
  const handleSave = () => {
    setShow(false);
    setShow1(false);
  };
  return (
    <div
      style={{
        height: height,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "silver",
      }}
    >
      <div
        style={{
          width: 350,
          padding: "0 30px",
          background: "white",
          boxShadow: "5px 10px 18px #888",
        }}
      >
        <Header />
        <Body
          experience={experience}
          education={education}
          Add={handleAdd}
          Change={handleChange}
          Add1={handleAdd1}
          Change1={handleChange1}
          del={handleDelete}
          del1={handleDelete1}
          show={show}
          show1={show1}
          save={handleSave}
        />
      </div>
    </div>
  );
};
export default Home;
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid silver",
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "65%" }} />
      <NotificationsActiveIcon
        style={{
          background: "silver",
          padding: 5,
          borderRadius: 5,
          fontSize: 40,
          marginLeft: 10,
          color: "white",
        }}
      />
      <LocalGroceryStoreIcon
        style={{
          background: "silver",
          padding: 5,
          borderRadius: 5,
          fontSize: 40,
          marginLeft: 10,
          color: "white",
        }}
      />
    </div>
  );
};
const Body = ({
  experience,
  education,
  Add,
  Change,
  Add1,
  Change1,
  del,
  del1,
  show,
  save,
  show1,
}) => {
  return (
    <div style={{ marginBottom: 30 }}>
      <header
        style={{ textAlign: "center", margin: "15px 0", color: "#36366c" }}
      >
        <h4>Education & Experience</h4>
      </header>
      <div>
        <h4 className="heading">Education</h4>
        {education.length > 0 ? (
          <div className="split">
            <div className="fixedheight">
              {education.map((item, i) => {
                return (
                  <div key={i} style={{ marginBottom: 5 }}>
                    {show ? (
                      <div style={{ position: "relative" }}>
                        <input
                          name="item"
                          value={item}
                          key={i}
                          onChange={(e) => Change(e, i, item)}
                          style={{ padding: 10 }}
                        />
                        <button onClick={() => del(i)} className="deleteButton">
                          <ClearIcon className="delete" />
                        </button>
                      </div>
                    ) : (
                      <p className="para">
                        {item.length === 0 ? "Empty" : item}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="buttonParent">
              <button onClick={Add} className="buttonChild">
                <AddBoxIcon className="add" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <p className="noData">no data</p>
            <button onClick={Add} className="addContainer">
              {" "}
              <AddBoxIcon className="add" />
            </button>
          </div>
        )}
        <br />
        <br />
        <h4 className="heading">Experiece</h4>
        {experience.length > 0 ? (
          <div className="split">
            <div className="fixedheight">
              {experience.map((item, i) => {
                return (
                  <div key={i} style={{ marginBottom: 5 }}>
                    {show1 ? (
                      <div style={{ position: "relative" }}>
                        <input
                          name="item"
                          value={item}
                          key={i}
                          onChange={(e) => Change1(e, i, item)}
                          style={{ padding: 10 }}
                        />
                        <button
                          onClick={() => del1(i)}
                          className="deleteButton"
                        >
                          <ClearIcon className="delete" />
                        </button>
                      </div>
                    ) : (
                      <p className="para">
                        {item.length === 0 ? "Empty" : item}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="buttonParent">
              <button onClick={Add1} className="buttonChild">
                <AddBoxIcon className="add" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex">
            <p className="noData">no data</p>
            <button onClick={Add1} className="addContainer">
              {" "}
              <AddBoxIcon className="add" />
            </button>
          </div>
        )}
      </div>
      <div className="saveContainer">
        <button onClick={save} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

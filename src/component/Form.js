import React from "react";
import "../css/form.css";
import { useState } from "react";
export default function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Website, setWebsite] = useState("");
  const [Gender, setGender] = useState("");

  const readName = (event) => {
    setName(event.target.value);
  };
  const readEmail = (event) => {
    setEmail(event.target.value);
  };
  const readWebsite = (event) => {
    setWebsite(event.target.value);
  };
  const readGender = (event) => {
    setGender(event.target.value);
  };
  const RemoveAll = () => {
    if (window.confirm("really want to delete") == true) {
      localStorage.clear();
      setTimeout(() => {
        GetDataupdate();
      }, 0.1);
      GetDataupdate();
    }
  };
  let skill11 = "";
  let skill22 = "";
  let skill33 = "";
  const skill1 = (event) => {
    if (skill11 == "") {
      skill11 = event.target.value;
    } else {
      skill11 = "";
    }
  };
  const skill2 = (event) => {
    if (skill22 == "") {
      skill22 = event.target.value;
    } else {
      skill22 = "";
    }
  };
  const skill3 = (event) => {
    if (skill33 == "") {
      skill33 = event.target.value;
    } else {
      skill33 = "";
    }
  };
  const Singledelete = () => {
    let infostr;
    let task;
    let infobj;
    let index = document.getElementById("deleteitem");

    if (localStorage.getItem("Enrolled") == null) {
      localStorage.setItem("Enrolled", JSON.stringify(task));
    } else {
      infostr = localStorage.getItem("Enrolled");
      infobj = JSON.parse(infostr);
      let deleitem = infobj.splice(index.value, 1);
      if (deleitem.length == 0) {
        alert("Student's ID Not Present ");
      }
    }
    localStorage.setItem("Enrolled", JSON.stringify(infobj));
    index.value = "";
    GetDataupdate();
  };
  const GetDataupdate = async (event) => {
    let info;
    let infoobj;
    let infostr;
    if (localStorage.getItem("Enrolled") == null) {
      info = [];
      localStorage.setItem("Enrolled", JSON.stringify(info));
    } else {
      infostr = localStorage.getItem("Enrolled");
      infoobj = JSON.parse(infostr);
    }
    let str = "";
    await infoobj.forEach((element, index) => {
      let imgicon;
      if (element[3] == "Male") {
        imgicon = "male2nd.jfif";
      } else {
        imgicon = "OIP.jfif";
      }
      str += `<div id="form">
      <div id="Enrolledcontainer">
      <h2 className="head">STUDENT ID</h2>
      <hr/>
      <div  id="stdinfo" id="name" >Name :  ${element[0]}</div>
      <div   id="stdinfo" id="gmail">Email :  ${element[1]}</div>
      <div id="stdinfo" id="website"  >Website : ${element[2]}</div>
      <div  id="stdinfo" id="Gender"  >Gender :  ${element[3]}</div>
      <div  id="stdinfo" id="skillsetrender"  >skillset :</div>
      <ul>
      <li id="skill">${element[4]}</li>
      <li id="skill">${element[5]}</li>
      <li id="skill">${element[6]}</li>
      </ul>
      </div>
      <div id="img">
      <img src="../${imgicon}" alt=""/>
      </div> 
      <input type="submit" id="del" value=ID:${index}></input>
      </div>
      `;
    });
    document.getElementById("set").innerHTML = str;
    localStorage.setItem("Enrolled", JSON.stringify(infoobj));
  };
  GetDataupdate();
  let id = document.getElementById("del");
  const GetData = (event) => {
    let info;
    let infostr;
    if (Name != "" && (Gender == "Male" || Gender == "Female")) {
      if (localStorage.getItem("Enrolled") == null) {
        info = [];
        info.push([Name, Email, Website, Gender, skill11, skill22, skill33]);
        localStorage.setItem("Enrolled", JSON.stringify(info));
      } else {
        infostr = localStorage.getItem("Enrolled");
        info = JSON.parse(infostr);
        info.push([Name, Email, Website, Gender, skill11, skill22, skill33]);
        localStorage.setItem("Enrolled", JSON.stringify(info));
      }
      GetDataupdate();
    } else {
      alert("Fill the deatils first !! ");
    }
  };
  return (
    <>
      <div id="main">
        <form>
          <div id="container">
            <label>
              {" "}
              Name :-{" "}
              <input
                type="text"
                name=""
                id="inputbox"
                placeholder="Enter the name.. "
                value={Name}
                onChange={readName}
                required
              />
            </label>
            <label>
              Email :-{" "}
              <input
                type="email"
                name=""
                id="inputbox"
                placeholder="Enter the Email Id.."
                value={Email}
                onChange={readEmail}
                required
              />
            </label>
            <label>
              Website :-{" "}
              <input
                type="text"
                name=""
                id="inputbox"
                placeholder="Enter the website..."
                value={Website}
                onChange={readWebsite}
              />
            </label>
            <span>
              <label>
                Gender :-
                <label>
                  {" "}
                  Male
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value={"Male"}
                    onChange={readGender}
                    required
                  />
                </label>
                <label>
                  Female
                  <input
                    type="radio"
                    name="gender"
                    id="gender"
                    value={"Female"}
                    onChange={readGender}
                    required
                  />
                </label>
              </label>
            </span>
            <label>
              Skill :-
              <label>
                Java
                <input
                  type="checkbox"
                  name="Java"
                  id="sillset"
                  value={"Java"}
                  onClick={skill1}
                />
              </label>
              <label>
                Python
                <input
                  type="checkbox"
                  name="Python"
                  id="skillset"
                  value={"Python"}
                  onClick={skill2}
                />
              </label>
              <label>
                React Js
                <input
                  type="checkbox"
                  name="React Js"
                  id="skillset"
                  value={"React Js"}
                  onClick={skill3}
                />
              </label>
            </label>
            <input
              type="submit"
              value="Submit here "
              id="submit"
              onClick={GetData}
            />
          </div>
        </form>
        <div className="enrolledstudent" id="set"></div>
      </div>
      <div>
        <center>
          <input
            type="button"
            value="Remove All"
            id="removeall"
            onClick={RemoveAll}
          />
        </center>
      </div>
      <div id="singledele">
        <input
          type="text"
          name=""
          id="deleteitem"
          placeholder="Enter Id want to Delete"
        />
        <input
          type="button"
          value="remove one"
          onClick={Singledelete}
          id="removesingle"
        />
      </div>
    </>
  );
}

import React, { useState, useEffect} from "react";
import axios from "axios";
import "./style.jsx";
import CardUser from "../../components/CardUser";
import { ContainerListUsers } from "./style.jsx";


const Usuarios = () => {

  const [users, setUsers] = useState([{}]);
  const [refresh, setRefresh] = useState(false)
  const [search, setSearch] = useState("")
  const [backupUsers, setBeckupUsers] = useState([{}])
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/person")
      .then((response) => {
        setUsers(response.data); 
        setBeckupUsers(response.data)
      })
      .catch(console.log);
  }, [refresh]);


  function deletePerson(id){
      axios.delete(`http://localhost:3000/person/${id}`)
      .then(()=>{
         setRefresh(!refresh)
      })
      .catch(console.log)
  }

  function getFilter(value){

      setSearch(value)

          let filter = backupUsers.filter((user)=>{
            return (user.name).toLowerCase().includes((value).toLowerCase())
          })
          
      setUsers(filter)
  }

  return (
    <>

      <ContainerListUsers>

        <div>
          <input 
          onChange={(e)=> getFilter(e.target.value)}
          type="text" 
          id="search-user" 
          value={search}
          placeholder="Procure um usuário..." />
        </div>

        {users.sort((a,b)=>{
          
          if(a.name > b.name){
              return 1
          }
          if(a.name < b.name){
            return -1
          }
          return 0
           
        }).map((user, key) => {
          return <CardUser key={key} name={user.name} clickDelete={() => deletePerson(user._id)} clickInfo={`/user/${user._id}`} />;
        })}

      </ContainerListUsers>
      
    </>
  );
};

export default Usuarios;

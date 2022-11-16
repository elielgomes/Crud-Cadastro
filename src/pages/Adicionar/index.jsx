import { useState, useEffect} from "react";
import Form from "../../components/Form";
import axios from "axios";

const User = () => {
  
  const [address, setAddress] = useState({});
  const [formDisabled, setFormDisabled] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCep, setUserCep] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validCep, setValidCep] = useState(false);
  const [validNumber, setValidNumber] = useState(false);

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [editDisabled, setEditDisabled] = useState(false);

  async function getAddress(cep) {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await response.json();
    return data;
  }


  useEffect(()=>{
    if(validName && validEmail && validPhone && validCep && validNumber ){
        setSaveButtonDisabled(false)
    }else{
        setSaveButtonDisabled(true)
    }
  },[validName, validEmail, validPhone, validCep, validNumber])


  function editInfos() {
    setEditDisabled(true);
    setFormDisabled(!formDisabled);
    setSaveButtonDisabled(!saveButtonDisabled);
  }


  async function postData() {

    let userNameArray = userName.split(" ")
    let nameUpperCase = []

    for(let word of userNameArray){
       nameUpperCase.push(word[0].toUpperCase() + word.substring(1))
    }
    
    const newUser = {
      name: nameUpperCase.join(' '),
      email: userEmail,
      phone: userPhone,
      cep: userCep,
      number: userNumber,
    };

    await axios.post(`http://localhost:3000/person`, newUser);

        setSaveButtonDisabled(true);

        setUserName("")
        setUserEmail("")
        setUserPhone("")
        setUserCep("")
        setUserNumber("")
        setAddress({})
  }


    function verifyInputName(name) {

        const regexName = /^([A-Za-z\ç]\s?){3,30}$/;
            setUserName(name);
        if (regexName.test(name)) {
            setValidName(true);
        } else {
            setValidName(false);
        }

    }
  

  function verifyInputEmail(email) {
    const regexEmail = /^([a-zA-Z0-9\_\-\.]+)@[a-z\d]+(\.[a-z]+){1,2}$/;

    setUserEmail(email);

    if (regexEmail.test(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }


  function verifyInputPhone(phone) {
    const regexPhone = /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/;

    setUserPhone(phone);

    if (regexPhone.test(phone)) {
      setValidPhone(true);

    } else {
      setValidPhone(false);
      setSaveButtonDisabled(true);
    }
  }


  function verifyInputCep(cep) {
    const regexCep = /^[0-9]{5}-[0-9]{3}$/;
    setUserCep(cep);

    if (regexCep.test(cep)) {
      getAddress(cep).then((res) => {
        if (res.erro) {
          setAddress({});
          setValidCep(false);
          setSaveButtonDisabled(true);
          alert("Cep inválido!");
        } else {
          setAddress(res);
          setValidCep(true);
        }
      });
    } else {
      setValidCep(false);
    }
  }


  function verifyInputNumber(number) {
    const regexNumber = /[\d]+/g;

    setUserNumber(number);

    if (regexNumber.test(number)) {
      setValidNumber(true);
    } else {
      setValidNumber(false);
    }
  }


  return (
    <>
      <Form
        editClick={() => editInfos()}
        editDisabled={editDisabled}
        btnEditVisible={false}
        validName={validName}
        validEmail={validEmail}
        validPhone={String(validPhone)}
        validCep={String(validCep)}
        validNumber={String(validNumber)}
        name={userName}
        email={userEmail}
        phone={userPhone}
        cep={userCep}
        number={userNumber}
        address={address.logradouro}
        district={address.bairro}
        city={address.localidade}
        uf={address.uf}
        disabled={formDisabled}
        onChangeName={(e) => verifyInputName(e.target.value)}
        onChangeEmail={(e) => verifyInputEmail(e.target.value)}
        onChangePhone={(e) => verifyInputPhone(e.target.value)}
        onChangeCep={(e) => verifyInputCep(e.target.value)}
        onChangeNumber={(e) => verifyInputNumber(e.target.value)}
        saveClick={() => postData()}
        saveDisabled={saveButtonDisabled}
        colorDisabled={saveButtonDisabled}
      />
    </>
  );
};

export default User;

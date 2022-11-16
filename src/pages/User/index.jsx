import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/Form";
import axios from "axios";

const User = () => {

  const [address, setAddress] = useState({});
  const [formDisabled, setFormDisabled] = useState(true);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userCep, setUserCep] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validCep, setValidCep] = useState(true);
  const [validNumber, setValidNumber] = useState(true);

  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [editDisabled, setEditDisabled] = useState(false);

  let { id } = useParams();

  async function getAddress(cep) {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/person/${id}`)
      .then((response) => {
        setUserName(response.data.name);
        setUserEmail(response.data.email);
        setUserPhone(response.data.phone);
        setUserCep(response.data.cep);
        setUserNumber(response.data.number);
        getAddress(response.data.cep)
          .then((res) => {
            setAddress(res);
          })
          .catch(console.log);
      })
      .catch((error) => {
        console.log(error);
        alert("Usuário não encontrado!");
      });
  }, []);

  function editInfos() {
    setEditDisabled(true);
    setFormDisabled(!formDisabled);
    setSaveButtonDisabled(!saveButtonDisabled);
  }

  async function patchData() {
    const newUser = {
      name: userName,
      email: userEmail,
      phone: userPhone,
      cep: userCep,
      number: userNumber,
    };

    formDisabled == true
      ? setFormDisabled(formDisabled)
      : setFormDisabled(!formDisabled);

    await axios.patch(`http://localhost:3000/person/${id}`, newUser);

    setEditDisabled(false);
    setSaveButtonDisabled(true);
  }

  function verifyInputName(name) {
    const regexName = /^([A-Za-z\ç]\s?){3,30}$/;

    setUserName(name);

    if (regexName.test(name)) {
      setValidName(true);
      setSaveButtonDisabled(false);
    } else {
      setValidName(false);
      setSaveButtonDisabled(true);
    }
  }

  function verifyInputEmail(email) {
    const regexEmail = /^([a-zA-Z0-9\_\-\.]+)@[a-z\d]+(\.[a-z]+){1,2}$/;

    setUserEmail(email);

    if (regexEmail.test(email)) {
      setValidEmail(true);
      setSaveButtonDisabled(false);
    } else {
      setValidEmail(false);
      setSaveButtonDisabled(true);
    }
  }

  function verifyInputPhone(phone) {
    const regexPhone = /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}$/;

    setUserPhone(phone);

    if (regexPhone.test(phone)) {
      setValidPhone(true);
      setSaveButtonDisabled(false);
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
          setSaveButtonDisabled(false);
        }
      });
    } else {
      setValidCep(false);
      setSaveButtonDisabled(true);
    }
  }

  function verifyInputNumber(number) {
    const regexNumber = /[\d]+/g;

    setUserNumber(number);

    if (regexNumber.test(number)) {
      setValidNumber(true);
      setSaveButtonDisabled(false);
    } else {
      setValidNumber(false);
      setSaveButtonDisabled(true);
    }
  }

  return (
    <>
      <Form
        editClick={() => editInfos()}
        editDisabled={editDisabled}
        btnEditVisible={true}
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
        saveClick={() => patchData()}
        saveDisabled={saveButtonDisabled}
        colorDisabled={saveButtonDisabled}
      />
    </>
  );
};

export default User;

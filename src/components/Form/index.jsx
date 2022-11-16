import {
  Input,
  InputMask,
  SaveButton,
  ContainerInfoBody,
  ButtonEdit,
} from "./style";

const Form = (props) => {
  return (
    <>
      <ContainerInfoBody>
        <div id="information-board">
          <div id="container-head">
            <ButtonEdit
              onClick={props.editClick}
              disabled={props.editDisabled}
              btnvisible={props.btnEditVisible}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </ButtonEdit>
          </div>

          <form>
            <div>
              <label>Nome: </label>
              <Input
                isvalid={props.validName}
                className="info-name"
                placeholder="Seu nome..."
                type="text"
                value={props.name}
                disabled={props.disabled}
                onChange={(e) => props.onChangeName(e)}
              />

              <label>Email: </label>
              <Input
                isvalid={props.validEmail}
                className="info-email"
                placeholder="example@example.com"
                type="email"
                value={props.email}
                disabled={props.disabled}
                onChange={props.onChangeEmail}
              />
            </div>

            <div>
              <label>Telefone: </label>
              <InputMask
                isvalidmask={props.validPhone}
                mask="(00) 00000-0000"
                placeholder="(00) 0000-0000"
                className="info-phone"
                type="text"
                value={props.phone}
                disabled={props.disabled}
                onChange={props.onChangePhone}
              />

              <label>Cep: </label>

              <InputMask
                isvalidmask={props.validCep}
                mask="00000-000"
                placeholder="00000-000"
                className="info-cep"
                type="text"
                value={props.cep}
                disabled={props.disabled}
                onChange={props.onChangeCep}
              />

              <label>Número: </label>

              <InputMask
                isvalidmask={props.validNumber}
                mask="00000"
                placeholder="123"
                className="info-number"
                type="text"
                value={props.number}
                disabled={props.disabled}
                onChange={props.onChangeNumber}
              />
            </div>

            <div>
              <label>Endereço: </label>
              <span className="info-address">{props.address}</span>
            </div>

            <div>
              <label>Bairro: </label>
              <span className="info-district">{props.district}</span>
            </div>

            <div>
              <label>Cidade: </label>
              <span className="info-city">{props.city} </span>
            </div>

            <div>
              <label>UF: </label>
              <span className="info-uf">{props.uf}</span>
            </div>

            <div id="container-btn-send">
              <SaveButton
                type="button"
                onClick={props.saveClick}
                disabled={props.saveDisabled}
                colordisabled={props.colorDisabled}
              >
                Save
              </SaveButton>
            </div>
          </form>
        </div>
      </ContainerInfoBody>
    </>
  );
};

export default Form;

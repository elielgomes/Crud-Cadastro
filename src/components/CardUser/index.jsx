import ButtonsCard from "../ButtonsCard";
import { Card } from "./style";

const CardUser = (props) => {
  return (

    <Card>
      <span>{props.name}</span>
      <ButtonsCard idUser={props.idUser} clickDelete={props.clickDelete} clickInfo={props.clickInfo} />
    </Card>

  );
};

export default CardUser;

import { FC } from "react";

interface CardProp {
  cardDetail: {
    company: string;
    title: string;
    location_type: string;
    experience: string;
    salary: string;
    job_type: string;
    location: string;
    key_skills: string[];
    posted: string;
    open_to_freshers?: boolean;
  };
}

const Card: FC<CardProp> = ({ cardDetail }) => {
  console.log(cardDetail);
  return <div>Card</div>;
};

export default Card;

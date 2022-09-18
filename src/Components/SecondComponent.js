import { useContext } from "react";
import { data } from "../App/App";
import { DataBase } from "./ContextData";

// useContext를 이용해 데이터를 받을 수 있다

const SecondComponent = () => {
  // createContext를 할당해준 데이터를 가져와 useContext안에 넣어주면
  // getData는 provider value={}안의 데이터를 할당받게 된다

  // const getData = useContext(data);

  // console.log(getData);
  // {text: '데이터1', text2:'데이터2'}
  // console.log(getData.text);
  // '데이터1'

  // 구조 분해 할당을 통해 직관적으로 할당 및 사용이 가능

  // const { text, text2 } = useContext(data);

  // console.log(text, text2);

  // '데이터1','데이터2'

  // ContextData.js의 데이터를 가져왔다
  const getHi = useContext(DataBase);

  console.log(getHi);

  return (
    <>
      <div></div>
    </>
  );
};

export default SecondComponent;

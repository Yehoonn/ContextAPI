import { createContext } from "react";
import { ContextData } from "../Components/ContextData";
import FirstComponent from "../Components/FirstComponent";
import "./App.css";

// ContextAPI를 사용해 데이터를 전역으로 관리, 사용할 수 있다
const data = createContext();

function App() {
  let text = "데이터1";
  let text2 = "데이터2";
  return (
    <>
      {/* value안에 넘겨줄 데이터를 선언 */}
      {/* Provider의 자식컴포넌트 (자식의 자식 컴포넌트까지)라면 데이터를 사용할 수 있다 */}
      <ContextData>
        {/* <data.Provider value={{ text, text2 }}> */}
        <FirstComponent></FirstComponent>
        {/* </data.Provider> */}
      </ContextData>
    </>
  );
}

export { App, data };

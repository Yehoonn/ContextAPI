import { createContext } from "react";

const DataBase = createContext();

const ContextData = ({ children }) => {
  let testData = "하이";
  let testData2 = "헬로우";

  // 이렇게 하나의 js파일 안에서 모든 데이터를 관리할수도 있다
  return (
    <DataBase.Provider value={{ testData, testData2 }}>
      {children}
    </DataBase.Provider>
  );
};

export { ContextData, DataBase };

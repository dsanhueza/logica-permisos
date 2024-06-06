import React from "react";
import RoleViewList from "../components/RoleViewList";

const PageContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "98vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
      }}
    >
      <h1>Formulario de Asignar Rol</h1>
      <RoleViewList />
    </div>
  );
};

export default PageContainer;

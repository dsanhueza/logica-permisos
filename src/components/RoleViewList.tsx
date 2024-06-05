/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import AccessRowItem from "./AccessRowItem";

const VIEW_NAMES = ["Proyectos", "XMen"];

const PERMISSIONS = ["Ver", "Crear", "Editar", "Eliminar"];

const RoleViewList = () => {
  const [assignPerm, setAssignPerm] = useState<any[]>([
    {
      viewId: "view1",
      read: false,
      write: false,
      update: false,
      delete: false,
    },
    {
      viewId: "view2",
      read: false,
      write: false,
      update: false,
      delete: false,
    },
  ]);

  const handleCheckbox = (value: any, view: any, ev: any) => {
    // Controla el flujo para cambiar el checkbox
    console.log(ev.target.checked, value, view);

    setAssignPerm(() => [
      ...assignPerm,
      {
        viewId: view,
        read: value == "Ver" ? ev.target.checked : false,
        write: value == "Crear" ? ev.target.checked : false,
        update: value == "Editar" ? ev.target.checked : false,
        delete: value == "Eliminar" ? ev.target.checked : false,
      },
    ]);
  };

  useEffect(() => {
    console.log("Estado del formulario", assignPerm);
  }, [assignPerm]);

  return (
    <div style={{}}>
      {VIEW_NAMES.map((view) => (
        <div
          style={{
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
            background: "blue",
          }}
        >
          <span>{view}</span>
          <div style={{ display: "flex", gap: "10px" }}>
            {PERMISSIONS.map((perm) => (
              <AccessRowItem viewName={perm} handleCheckbox={(ev) => handleCheckbox(perm, view, ev)}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoleViewList;

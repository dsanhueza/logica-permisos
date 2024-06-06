/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const VIEW_NAMES = [
  { viewId: "view1", name: "XProyectos" },
  { viewId: "view2", name: "XMen" },
];

const RoleViewList = () => {
  const [assignPerm, setAssignPerm] = useState<any[]>([]);

  const handleCheckbox = (
    viewIndex: number,
    permissionIndex: number,
    isChecked: boolean
  ) => {
    const assigns = assignPerm;
    assigns[viewIndex].permissions[permissionIndex].value = isChecked;

    setAssignPerm(() => [...assigns]);
  };

  const setDefaultCheckbox = () => {
    setAssignPerm(() =>
      VIEW_NAMES.map((x) => ({
        viewId: x.viewId,
        name: x.name,
        permissions: [
          { name: "Ver", value: false },
          { name: "Crear", value: false },
          { name: "Editar", value: false },
          { name: "Eliminar", value: false },
        ],
      }))
    );
  };

  // ELIMINAR ESTE USE-EFFECT
  useEffect(() => {
    // REVISAR EN LA CONSOLA EL ESTADO DEL ASSIGNPERM
    console.log("Estado del formulario", assignPerm);
  }, [assignPerm]);
  // ELIMINAR ESTE USE-EFFECT

  useEffect(() => {
    setDefaultCheckbox();
  }, []);

  return (
    <>
      <div
        style={{
          padding: "20px",
          width: "600px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          borderRadius: "10px",
        }}
      >
        {assignPerm &&
          assignPerm.map((view, index) => (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "black",
              }}
            >
              <span>{view.name}</span>
              <div style={{ display: "flex", gap: "15px" }}>
                {view.permissions &&
                  view.permissions.map((perm: any, subIndex: number) => (
                    <div>
                      <span>{perm.name}</span>
                      <input
                        type="checkbox"
                        value={perm.value}
                        onChange={(ev) =>
                          handleCheckbox(index, subIndex, ev.target.checked)
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
      <div style={{ marginTop: "20px", width: '800px' }}>
        {JSON.stringify(assignPerm, null, 2)}
      </div>
    </>
  );
};

export default RoleViewList;

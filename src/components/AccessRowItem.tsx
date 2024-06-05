import React, { FC } from "react";

interface IAccessRowItem {
  viewName: string;
  handleCheckbox: (ev: any) => void;
}

const AccessRowItem: FC<IAccessRowItem> = ({ viewName, handleCheckbox }) => {
  return (
    <div>
      <span>{viewName}</span>
      <input type="checkbox" onChange={handleCheckbox} />
    </div>
  );
};

export default AccessRowItem;

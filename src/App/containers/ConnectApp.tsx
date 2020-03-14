import React from "react";
import { ApiTable } from "@drieam/common";
import { useSelector } from "react-redux";
import { getUserList } from "../store/selectors";
import { useActions } from "../store/useActions";

function ConnectApp() {
  const state = useSelector(getUserList);
  const actions = useActions();
  console.warn(state);
  return (
    <>
      <ApiTable listState={state} fetch={actions.fetchUsers} />
    </>
  );
}

export { ConnectApp };

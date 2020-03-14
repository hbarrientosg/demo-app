import React from "react";
import { Formatter } from '@drieam/ui';
import { ApiTable } from './common';
import { useSelector } from "react-redux";
import { getUserList } from "../store/selectors";
import { useActions } from "../store/useActions";

function ConnectApp() {
  const state = useSelector(getUserList);
  const actions = useActions();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      key: 'number',
    },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      sorter: true,
      key: 'createdAt',
      render: (text: string, _record: any, index: number) => {
        return <Formatter.Date key={index} value={text} />
      },
    },
  ]

  return (
    <>
      <ApiTable listState={state} fetch={actions.fetchUsers} columns={columns} />
    </>
  );
}

export { ConnectApp };

import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Todo</th>
                <th>Waktu</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.todosData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.todo}</td>
                <td>{row.waktu}</td>
                <td>
                    <button onClick={() => {
                        props.removeTodo(index)
                    }}>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {
    const { todosData, removeTodo } = props;
  
    return (
      <table>
        <TableHeader />
        <TableBody todosData={todosData} removeTodo={removeTodo} />
      </table>
    )
  }

export default Table;
import React from 'react'

const UserTable = (props) => {
    console.log('usuarios para pintar:', props.usuarios);
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.usuarios.length > 0 ?
                    props.usuarios.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>
                                <button className="button muted-button"
                                onClick={() =>{props.editRow(item)}}
                                >Edit</button>
                                <button onClick={()=>{props.deleteUser(item.id)}} className="button muted-button">
                                    Delete
                                    </button>
                            </td>
                        </tr>
                    )): (
                        <tr>
                            <td colSpan={3}>No hay usuarios</td>
                        </tr>
                    )
                }


            </tbody>
        </table>
    )
}

export default UserTable
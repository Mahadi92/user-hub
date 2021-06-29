import React, { useEffect, useState } from 'react';

const ProfileList = () => {

    const [headers, setHeaders] = useState([])
    const [rows, setRows] = useState([])

    useEffect(() => {
        fetch('http://localhost/api/list.php')
            .then(res => res.json())
            .then(data => {
                setHeaders(data.data.headers[0])
                setRows(data.data.rows)
            })

    }, [])

    console.log(rows);

    // console.log(headers.headers[0].id);

    return (
        <section className="mt-5">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>

                        <th scope="col">{headers.id?.title}</th>
                        <th scope="col">{headers.name?.title}</th>
                        <th scope="col">{headers.message?.title}</th>
                        <th scope="col">{headers.created_at?.title}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map(row => {
                            return (
                                <tr key={row.id}>
                                    <th scope="row">{row.id}</th>
                                    <td>{row.name}</td>
                                    <td>{row.message}</td>
                                    <td>{row.created_at}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    );
};

export default ProfileList;
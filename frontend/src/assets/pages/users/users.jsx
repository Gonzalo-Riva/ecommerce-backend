import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../../components/user-card/user-card';
import styles from './users.module.css';

const Users = () => {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const handlerSwitchRole = async (userWithNewRole) => {
        try {
            setIsLoading(true);
            await axios.put(
<<<<<<< HEAD
                'https://backend-gonzalo-riva.netlify.app/api/users/',
=======
                'http://localhost:8080/api/users/',
>>>>>>> parent of 4c738d3 (asd2)
                {
                    id: userWithNewRole._id,
                    user: userWithNewRole,
                },
                { withCredentials: true }
            );
<<<<<<< HEAD
            const response = await axios.get('https://backend-gonzalo-riva.netlify.app/api/users', { withCredentials: true });
=======
            const response = await axios.get('http://localhost:8080/api/users', { withCredentials: true });
>>>>>>> parent of 4c738d3 (asd2)

            setUsers(response.data);
        } catch (error) {
            setError(true);
        }
        setIsLoading(false);
    };

    const handlerDeleteUser = async (id) => {
        try {
            setIsLoading(true);
<<<<<<< HEAD
            await axios.delete('https://backend-gonzalo-riva.netlify.app/api/users/' + id, null, { withCredentials: true });
            const response = await axios.get('https://backend-gonzalo-riva.netlify.app/api/users', { withCredentials: true });
=======
            await axios.delete('http://localhost:8080/api/users/' + id, null, { withCredentials: true });
            const response = await axios.get('http://localhost:8080/api/users', { withCredentials: true });
>>>>>>> parent of 4c738d3 (asd2)

            setUsers(response.data);
        } catch (error) {
            setError(true);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
<<<<<<< HEAD
                const response = await axios.get('https://backend-gonzalo-riva.netlify.app/api/users', { withCredentials: true });
=======
                const response = await axios.get('http://localhost:8080/api/users', { withCredentials: true });
>>>>>>> parent of 4c738d3 (asd2)

                setUsers(response.data);
            } catch (error) {
                setError(true);
            }
            setIsLoading(false);
        };

        fetchUsers();
    }, []);

    console.log(users);

    return (
        <div className={styles.container}>
            {isLoading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : error ? (
                <p className={styles.error}>Ha ocurrido un error</p>
            ) : (
                <>
                    <h1 className={styles.heading}>Usuarios</h1>
                    <div className={styles['users-container']}>
                        {users?.map(
                            (user, index) =>
                                user.role !== 'admin' && (
                                    <UserCard
                                        user={user}
                                        key={user.email}
                                        onDelete={() => handlerDeleteUser(user._id)}
                                        onSwitchRole={(newRole) =>
                                            handlerSwitchRole({
                                                ...user,
                                                role: newRole,
                                            })
                                        }
                                    />
                                )
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Users;
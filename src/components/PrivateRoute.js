import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionContext } from '../contexts/SessionContext';

function PrivateRoute(props) {
    const [, setValues] = useSessionContext();
    const navigate = useNavigate();
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('eduez-admin');
        if (user) {
            const data = JSON.parse(user);
            if (data) {
                setValues({
                    isAuth: true,
                    admin: {
                        name: data.name,
                    },
                });
                setIsAuth(true);
            }
        } else {
            navigate('/login');
            setIsAuth(false);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{isAuth && <props.component />}</>;
}

export default PrivateRoute;

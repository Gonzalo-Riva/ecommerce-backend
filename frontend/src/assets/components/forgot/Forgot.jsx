import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Forgotpass() {
    const [Email, setEmail] = useState('');
    const navigate = useNavigate();
    const forgot = async () => {
        const res = await axios
            .post(
                'https://backend-gonzalo-riva.netlify.app/api/session/forgot-password',

                {
                    email: Email,
                }
            )
            .catch(function (error) {
                if (error.response) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salió mal, por favor vuelve a intentarlo!',
                        footer: 'Tip: Revisa los valores ingresados',
                    });

                    console.log(error.response.data);
                    console.log(error.response.status);
                } else if (error.request) {

                    console.log(error.request);
                }
            });
        const data = res.data;
        console.log(data);
        if (data) {
            Swal.fire({
                icon: 'info',
                title: `Se envió un email a la dirección de correo ingresada para generar su nueva contraseña`,
                showConfirmButton: true,
            });
            setTimeout(function () {
                navigate('/');
            }, 3000);
        }
    };

    return (
        <div className="formContainer">
            <form className="formLogin">
                <br />
                <h3 className="texts">Recuperar Contraseña</h3>

                <div className="campos">
                    <div className="mb-3">
                        <label className="texts">Ingrese el email con el que se registró</label>
                        <input
                            value={Email}
                            type="email"
                            className="form-control"
                            placeholder="Ingrese email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="loginButton">
                    <div className="d-grid">
                        <button onClick={forgot} type="button" className="btn btn-primary">
                            Enviar
                        </button>
                    </div>
                </div>
                <br />
                <div className="loginLinks">
                    <p className="forgot-password text-right">
                        <a className="loginLinks" href="/">
                            Iniciar Sesion
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Forgotpass;
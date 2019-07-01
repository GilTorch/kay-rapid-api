import React from 'react';
import { graphql, Mutation, compose } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ACCOUNT_CREATION, AUTH_WITHOUT_SOCIAL_MEDIA, WRITE_AUTH_INFO } from '../queries/queries';
import { Formik } from 'formik';
import uploadImage from '../utils/uploadImageToFileServer'
import ImageSelect from './ImageSelect';
import * as yup from 'yup';
import Loading from './Loading';
import Close from './Close';
import { alertMessages } from '../utils/AlertMessages';
import Error from './Error';

const style = {
    input: {
        correct: {
            color: "green"
        }
    },
    passwordContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        passwordInput: {
            height: "30px"
        },
        iconContainer: {
            width: "20%",
            height: "28px",
            borderTop: "1px solid #bbb",
            borderRight: "1px solid #bbb",
            borderBottom: "1px solid #bbb",
            backgroundColor: "#eee",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
}

// TypeError: yupError.inner is undefined
const schema = yup.object().shape({
    firstName: yup.string("Prenon se yon tèks").required("Prenon se yon chan obligatwa"),
    lastName: yup.string("Non se yon tèks").required("Non se yon chan obligatwa"),
    email: yup.string("Imèl se yon tèks").email("Sa w mete a pa yon imèl").required("Imèl se yon chan obligatwa"),
    phone1: yup.string().min(8, "Telefon ou dwe gen 8 karakte pou pi piti"),
    password: yup.string().min(8, "Modpas ou dwe o mwen 8 karakte").required("Modpas se yon chan obligatwa"),
    passwordConfirm: yup.string().required("Konfime Modpas la")
        .oneOf([yup.ref('password'), null], "Paswod yo pa menm")
})

class SignUp extends React.Component {

    state = {
        profilePicture: null,
        password: {
            type: "password",
            hidden: true,
            visibleIcon: "eye"
        },
        passwordConfirm: {
            type: "password",
            hidden: true,
            visibleIcon: "eye"
        }
    }

    handleProfileImage = (event, name) => {
        this.setState({
            [name]: event[0]
        })
    }


    handlePasswordVisibleState = (passwordField) => {
        const hidden = !this.state[passwordField].hidden;
        this.setState({
            [passwordField]: {
                type: hidden ? "password" : "text",
                hidden,
                visibleIcon: hidden ? "eye" : "eye-slash"
            }
        })
    }

    isCorrect = (fieldName, touched, errors) => {
        return (errors[fieldName] === undefined && touched[fieldName]) ? <FontAwesomeIcon style={style.input.correct} icon="check-circle" /> : null
    }

    render() {

        let { profilePicture, password, passwordConfirm } = this.state;
        const { handleProfileImage, handlePasswordVisibleState, isCorrect } = this;
        const { history, signIn, writeUserAuthInfoToCache } = this.props;

        return (
            <Mutation mutation={ACCOUNT_CREATION}>
                {(signup, { loading, error }) => (
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone1: "",
                            password: "",
                            passwordConfirm: ""
                        }}

                        onSubmit={async (values, { setSubmitting }) => {
                            if (profilePicture) {
                                await uploadImage([profilePicture], "profilePicture", (label, response) => {
                                    profilePicture = response.secure_url;
                                })
                            } else {
                                profilePicture = "../images/no-profile.png"
                            }

                            signup({
                                variables: { email: values.email, password: values.password, firstName: values.firstName, lastName: values.lastName, phone1: values.phone1, profilePicture: profilePicture },
                                update: (store, { data: { signup } }) => {
                                    signIn({
                                        variables: { email: values.email, password: values.password },
                                        update: (store, { data: { login } }) => {
                                            let userObject = {
                                                __typename: "UserAuthInfo",
                                                id: login.user.id,
                                                token: login.token,
                                                firstName: login.user.firstName,
                                                lastName: login.user.lastName,
                                                email: login.user.email,
                                                profilePicture: login.user.profilePicture.url
                                            };
                                            setSubmitting(false)
                                            writeUserAuthInfoToCache({ variables: { userAuthInfo: userObject } });
                                        }
                                    }).then(() => { 
                                        history.push('/profile') 
                                    })
                                }
                            })



                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            touched,
                            errors,
                            values,
                            isSubmitting
                        }) => (
                                <div className="stack-screen account-creation-screen">
                                    <Close history={this.props.history} />
                                    {error && alert.error(alertMessages.errors.general, { containerId: 'A' }) && null}
                                    {loading && (<Loading />)}
                                    <form onSubmit={handleSubmit} className="account-creation-screen__form">
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">Foto Pwofil</label>
                                            <ImageSelect
                                                name="profilePicture"
                                                numberOfImagesAllowed={1}
                                                handleImage={(event, name) => { handleProfileImage(event, name) }}
                                            />
                                        </div>
                                        <div style={style.formGroup} className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">
                                                Non {isCorrect("lastName", touched, errors)}
                                            </label>
                                            <input name="lastName" placeholder="Tanpri mete non ou "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onSubmit={handleSubmit}
                                                value={values.lastName}
                                                type="text"
                                                className="account-creation-screen__input"
                                            />
                                            {errors.lastName && <Error>{errors.lastName}</Error>}

                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">
                                                Prenon {isCorrect("firstName", touched, errors)}
                                            </label>
                                            <input name="firstName" placeholder="Tanpri mete prenon ou "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onSubmit={handleSubmit}
                                                value={values.firstName}
                                                type="text"
                                                className="account-creation-screen__input"
                                            />
                                            {errors.firstName && <Error>{errors.firstName}</Error>}
                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">Nimewo telefòn</label>
                                            <input name="phone1" placeholder="Tanpri mete nimewo telefòn ou "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onSubmit={handleSubmit}
                                                value={values.phone1}
                                                type="text"
                                                className="account-creation-screen__input"
                                            />
                                            {errors.phone1 && <Error>{errors.phone1}</Error>}
                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">
                                                Imèl {isCorrect("email", touched, errors)}
                                            </label>
                                            <input name="email" placeholder="Tanpri mete imèl ou "
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                onSubmit={handleSubmit}
                                                value={values.email}
                                                type="email"
                                                className="account-creation-screen__input"
                                            />
                                            {errors.email && <Error>{errors.email}</Error>}
                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">
                                                Modpas {isCorrect("password", touched, errors)}
                                            </label>
                                            <div style={style.passwordContainer}>
                                                <input
                                                    type={password.type}
                                                    style={style.passwordContainer.passwordInput}
                                                    name="password"
                                                    placeholder="Chwazi yon paswòd"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onSubmit={handleSubmit}
                                                    value={values.password}
                                                    className="account-creation-screen__input"
                                                />
                                                <span
                                                    onClick={() => handlePasswordVisibleState("password")}
                                                    style={style.passwordContainer.iconContainer}>
                                                    <FontAwesomeIcon icon={password.visibleIcon} />
                                                </span>
                                            </div>
                                            {errors.password && <Error>{errors.password}</Error>}
                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <label className="account-creation-screen__label">
                                                Konfime Modpas {isCorrect("passwordConfirm", touched, errors)}
                                            </label>
                                            <div style={style.passwordContainer}>
                                                <input
                                                    type={passwordConfirm.type}
                                                    style={style.passwordContainer.passwordInput}
                                                    name="passwordConfirm"
                                                    placeholder="Chwazi yon paswòd"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    onSubmit={handleSubmit}
                                                    value={values.passwordConfirm}
                                                    className="account-creation-screen__input"
                                                />
                                                <span
                                                    onClick={() => handlePasswordVisibleState("passwordConfirm")}
                                                    style={style.passwordContainer.iconContainer}>
                                                    <FontAwesomeIcon icon={passwordConfirm.visibleIcon} />
                                                </span>
                                            </div>
                                            {errors.passwordConfirm && <Error>{errors.passwordConfirm}</Error>}

                                        </div>
                                        <div className="account-creation-screen__form-group">
                                            <button disabled={loading} id="create-account-button" className="auth-button success-button" type="submit">KREYE KONT LAN</button>
                                        </div>
                                    </form>
                                </div>
                            )}
                    </Formik>
                )
                }
            </Mutation>
        )
    }
}

export default compose(
    graphql(AUTH_WITHOUT_SOCIAL_MEDIA, { name: "signIn" }),
    graphql(WRITE_AUTH_INFO, { name: "writeUserAuthInfoToCache" })
)(SignUp);



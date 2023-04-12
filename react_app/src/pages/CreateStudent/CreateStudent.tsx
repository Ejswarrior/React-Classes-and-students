import styles from './CreateStudent.module.scss';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import { useReducer } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom'

interface State {
    name: string,
    email: string
}

const reducer = (state: State, action: {type: string, evtTarget: string}): State => {
    const { type, evtTarget } = action;

    switch (type) {
        case 'updateName': 
            return {
                ...state,
                name: evtTarget,
                ...action,
            }
    
        case 'updateEmail':
            return {
                ...state,
                email: evtTarget,
                ...action
            }
    
            default:
                throw('Error')
        }
    }

export default function CreateStudentPage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        email: ''
    })


    const _onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try{
            await fetch(`http://localhost:8008/classes/${id}/add-student`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: state.name,
                    email: state.email
                })
            })
        }
        catch(error) {
            console.error(error)
        }
        
        navigate(`/classes/${id}`, {replace: true})
    }

    return (
        <form className={styles.form} onSubmit={_onSubmit}>
            <div className={styles.inputContainer}>
                <h1>Add a Student</h1>
                <label className={styles.label}>Enter Student name</label>
                <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder='name'
                    value={state.name}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => 
                    {dispatch({
                        type: 'updateName',
                        evtTarget: evt.currentTarget.value
                    })}}
                />
            </div>

            <div className={styles.inputContainer}>
                <label className={styles.label}>Enter Student email</label>
                <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder='email'
                    value={state.email}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({
                        type: 'updateEmail',
                        evtTarget: evt.currentTarget.value
                    })}}
                />
            </div>

            <ButtonPrimary type='submit' variation='primary'>Submit</ButtonPrimary>
            <ButtonPrimary onClick={() => navigate(-1)} type='button' variation='secondary'>Back</ButtonPrimary>
        </form>
    )
}
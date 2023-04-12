import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import styles from './UpdateClass.module.scss';
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'

export default function UpdateClassPage() {
    const [title, setTitle] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    const _onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            await fetch(`http://localhost:8008/classes/${id}/update`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                })
            })
        }
        catch(error) {
            console.error(error)
        }
        navigate('/classes', {replace: true})
    }

    return (
        <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={_onSubmit}>
                <h1>Update Class info</h1>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Update Class</label>
                    <input
                        required
                        type="text"
                        className={styles.titleInput}
                        placeholder='title'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {setTitle(evt.currentTarget.value)}}
                    />
                </div>

                <ButtonPrimary type='submit' variation='primary'>Submit</ButtonPrimary>
                <Link to='/classes'><ButtonPrimary type='button' variation='secondary'>Back</ButtonPrimary></Link>
            </form>
        </div>
    )
}
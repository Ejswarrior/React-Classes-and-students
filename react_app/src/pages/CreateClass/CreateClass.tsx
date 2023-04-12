import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary'
import styles from './CreateClass.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateClassPage() {
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    const _onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        try {
            await fetch('http://localhost:8008/classes', {
                method: 'POST',
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
                <h1>Create a new class</h1>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Enter class title</label>
                    <input
                        required
                        type="text"
                        className={styles.input}
                        placeholder='title'
                        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {setTitle(evt.currentTarget.value)}}
                    />
                </div>

                <ButtonPrimary type='submit' variation='primary'>Submit</ButtonPrimary>
                <ButtonPrimary onClick={() => navigate(-1)} type='button' variation='secondary'>Back</ButtonPrimary>
            </form>
        </div>
    )
}
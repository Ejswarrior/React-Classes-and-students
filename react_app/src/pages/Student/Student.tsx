import styles from './Student.module.scss';
import {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom'
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';
import { StudentListItemProps } from '../../components/StudenList/StudentListItem';

interface StudentPageProps extends StudentListItemProps {
    
}
export default function StudentPage() {

    const [data, setData] = useState<StudentPageProps>([])
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            const res = await fetch(`http://localhost:8008/classes/student/${id}`)
            const data = await res.json()
            setData(data)
        }
        getData()
      }, [])
    
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Student Info</h1>
            <div className={styles.studentInfo}>
                <p className={styles.name}>Name: {data.name}</p>
                <p className={styles.email}>Email: {data.email}</p>
            </div>

            <Link to='/classes'><ButtonPrimary type='button' variation='primary'>Home</ButtonPrimary></Link>
        </div>
    )
}
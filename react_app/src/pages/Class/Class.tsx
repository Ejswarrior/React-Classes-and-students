import StudentList from '../../components/StudenList/StudentLists';
import { StudentListItemProps } from '../../components/StudenList/StudentListItem';
import styles from './Class.module.scss';
import { useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';

interface ClassProps {
    title: string;
    students: StudentListItemProps[];
}

export default function ClassPage() {
    const [data, setData] = useState<ClassProps>([])
    const {id} = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8008/classes/${id}`)
                const data = await res.json()
                setData(data)
            }
            catch(error) {
                console.error(error)
            }
        }

        getData()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>{data.title}</h1>
                <div className={styles.buttonGroup}>
                    <Link to='/classes'><button className={styles.homeButton}>Home</button></Link>
                    <Link to={`/classes/${id}/add-student`}><button className={styles.addButton}>Add Student</button></Link>
                </div>
            </div>
            <div className={styles.classList}>
                {data.students && 
                    <StudentList data={data.students}/>
                }
            </div>
        </div>
    )
}
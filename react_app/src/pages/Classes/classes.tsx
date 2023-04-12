import ClassCard, {ClassCardProps} from "../../components/ClassCard/ClassCards";
import { StudentListItemProps } from "../../components/StudenList/StudentListItem";
import styles from './classes.module.scss';
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom";

interface ClassProps extends ClassCardProps {
    students: StudentListItemProps[];
}
export default function ClassesPage() {

    const [data, setData] = useState<ClassProps[]>([])

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8008/classes`)
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
                <h1 className={styles.title}>Classes</h1>
                <Link to="/classes/create-class"><button className={styles.addButton}>Add Class</button></Link>
            </div>
            <div className={styles.classesContainer}>
                {data && data.map((item: ClassProps) => {
                    return <ClassCard id={item.id} title={item.title} studentTotal={item.students.length} />
                })}
            </div>
        </div>
    )
}
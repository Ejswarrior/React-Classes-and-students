import styles from'./StudentList.module.scss';
import { FcConferenceCall, FcEditImage, FcEmptyTrash } from 'react-icons/fc';
import { Link } from 'react-router-dom'

export interface StudentListItemProps {
    /**
     * Student's Id
     */
    id: string;
    /**
     * Name of Student
     */
    name: string;
    /**
     * Student Email
     */
    email: string;
    /**
     * onClick event handler
     */
    onClick?: () => void;
}
export default function StudentListItem(props: StudentListItemProps) {
    const {id, name, email} = props

    const onClickDelete = async () => {
        try {
            await fetch(`http://localhost:8008/classes/student/delete`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                })
            })
        }
        catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <Link className={styles.linkContainer} to={`/classes/student/${id}`} replace={true}>
                <li  className={styles.listContainer}>
                        <div className={styles.studentDetails}>
                            <div className={styles.name}>{name}</div>
                            <div className={styles.email}>{email}</div>
                        </div>
                    <div className={styles.buttonIconContainer}>
                        <Link to={`/classes/student/${id}/update`}><button className={styles.iconButton}><FcEditImage /></button></Link>
                        <button onClick={onClickDelete} className={styles.iconButton}><FcEmptyTrash /></button>
                    </div>
                </li>
            </Link>
        </>
    )
}
import styles from './ClassCard.module.scss';
import { FcConferenceCall, FcEditImage, FcEmptyTrash } from 'react-icons/fc';
import {Link, useNavigate} from 'react-router-dom'

export interface ClassCardProps {
    id: string;
    /**
     * Title for ClassCard
     */
    title: string;
    /**
     * Number of students in class
     */
    studentTotal: number;
    /**
     * onClick event handler
     */
    onClick?: () => void;
}

export default function ClassCard(props: ClassCardProps) {
    const { id, title, studentTotal, onClick } = props;

    const navigate = useNavigate()
    
    const onClickDelete = async (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        try{
            await fetch('http://localhost:8008/classes/delete', {
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
        navigate(0, {replace: true})
    }
    return (
        <div onClick={onClick} className={styles.classCard}>
            <Link to={`/classes/${id}`}><img className={styles.classImage} src='/classroom.png' alt='Class room'/></Link>
            <div className={styles.classDetails}>
                <p className={styles.title}>{title}</p>
                <div className={styles.icon}>
                    <FcConferenceCall />
                    <div className={styles.studentNumber}>{studentTotal}</div>
                </div>
                <div className={styles.buttonIconContainer}>
                    <Link to={`/classes/${id}/update`}><button className={styles.iconButton}><FcEditImage /></button></Link>
                    <button onClick={onClickDelete} className={styles.iconButton}><FcEmptyTrash /></button>
                </div>
            </div>
        </div>
    )
}
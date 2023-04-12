import styles from './StudentList.module.scss';
import StudentListItem, { StudentListItemProps } from './StudentListItem';

interface StudentListProps {
    /**
     * Array of Students to create a the student list
     */
    data: StudentListItemProps[]
}
export default function StudentList(props: StudentListProps) {
    const { data } = props
    return (
            <ul className={styles.list}>
                <h2>Students</h2>
                {data && data.map((item: StudentListItemProps, index: number) => (
                    <div className={styles.listItemContainer}>
                        <div>{index + 1}:</div>
                        <StudentListItem key={index + 1} {...item}/>
                    </div>
                ))}
            </ul>
    )
}
import styles from './ClassList.module.scss'

export interface ClassListItemProps {
    title: string;
}

export default function ClassListItem(props: ClassListItemProps) {
    const { title } = props
    
    return (
        <li className={styles.classListItem}>
            <p className={styles.title}>{title}</p>
        </li>
    )
}
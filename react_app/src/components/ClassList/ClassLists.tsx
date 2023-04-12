import styles from './ClassList.module.scss';
import ClassListItem, { ClassListItemProps } from './ClassListItem';

interface ClassListProps {
    /**
     * Array of ClassListItem Props
     */
    data: ClassListItemProps[];
}

export default function ClassList(props: ClassListProps) {
    const { data } = props
    return (
        <ul className={styles.classList}>
                {data && data.map((item: ClassListItemProps, index: number) => (
                    <ClassListItem key={index + 1} {...item}/>
                ))}
        </ul>
    )
}
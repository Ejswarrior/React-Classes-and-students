import styles from './Students.module.scss';
import { useEffect, useState } from 'react';

export default function StudentsPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8008/students`)
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

    )
}
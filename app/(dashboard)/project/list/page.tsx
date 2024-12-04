import Link from 'next/link';
import styles from './project.module.css'

export default function ProjectList() {
    return (
      <main>
        <h1>ProjectList</h1>

        <ul className={styles.ul}>
            <li>
                <Link href='/project/jobit'>
                    JobIt
                </Link>
            </li>
            <li>
                <Link href='/project/carrent'>
                    Car Rent
                </Link>
            </li>
            <li>
                <Link href='/project/hipnode'>
                    hipnode
                </Link>
            </li>

        </ul>
      </main>
    );
  }
import axios from "axios";
import styles from '../styles/Home.module.css';

export async function getStaticProps() {
    const { data } = await axios.get('https://api.covid19api.com/total/country/vietnam');
    return {
        props: {
            posts: data
        }
    };
}

const Hơme = ({ posts}) => {
    console.log(posts)
    return(
    <>
    <h1>VIET NAM COVID-19 INFORMATION</h1>
    <div className={styles.container}>
    <main className={styles.main}>
    <table className={styles.table}>
        <thead>
        <tr className={styles.tr}>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Confirmed</th>
            <th className={styles.th}>Active</th>
            <th className={styles.th}>Recovered</th>
            <th className={styles.th}>Deaths</th>
        </tr>
        </thead>
        <tbody>
        {posts.map(data => (
            <tr className={styles.tr} key={data.id}>
            <td className={styles.td}>{data.Date}</td>
            <td className={styles.td}>{data.Confirmed}</td>
            <td className={styles.td}>{data.Active}</td>
            <td className={styles.td}>{data.Recovered}</td>
            <td className={styles.td}>{data.Deaths}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </main>
</div>
</>
    )
}

export default Hơme;
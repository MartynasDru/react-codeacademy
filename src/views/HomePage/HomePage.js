import styles from './home-page.module.scss';

export const HomePage = () => {
    const homePageStyles = {
        color: 'pink',
        backgroundColor: 'red',
        padding: '1rem 2rem'
    }

    console.log(styles);

    return (
        <div>
            <h1 className={styles.title}>Home page</h1>
        </div>
    )
}
import { Wrapper, Title } from './AboutPageStyled';

export const AboutPage = () => {

    const randomNumber = Math.random() * 100;

    return (
        <Wrapper>
            {/* <h1 className={styles.title}>About page</h1> */}
            <Title randomNumber={randomNumber}>About page</Title>
        </Wrapper>
    )
}
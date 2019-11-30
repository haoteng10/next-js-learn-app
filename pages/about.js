import Layout from '../components/layout';

const About = () => (
    <Layout>
        <div>
            <h1>About</h1>
            <p>This is a website designed for me to practice React.</p>
        </div>

        <style jsx>{`
            div {
                width: 100%;
            }

            h1,p {
                text-align: center;
            }
        `}</style>
    </Layout>
);

export default About;
import Nav from './nav';
import Head from 'next/head';

const layout = (props) => (
    <div>
        <Head>
            <title>Home</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav/>
        {props.children}
    </div>
);

export default layout;
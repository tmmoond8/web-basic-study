import Head from 'next/head';
import kangaroo from '../static/kangaroo-c.png';

export default function Page1() {
  return (
    <div>
      <p>This is home page</p>
      <img src={kangaroo}/>
      <Head>
        <title>page1</title>
      </Head>
      <Head>
        <meta name="description" content="hello world" />
      </Head>
      <style jsx>
        {`p {
          color: blue;
          font-size: 18pt;
        }`}
      </style>
    </div>
  )
}
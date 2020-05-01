import { callApi } from '../src/api.js';

export default class Page2 extends React.Component {
  static async getInitialProps({ query, req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    const text = query.text || 'none';
    const data = await callApi();
    const result = {
      text, data, userAgent
    }
    console.log(result);
    return result
  }

  render() {
    const { text, data, userAgent } = this.props;
    return (
      <div>
        <p>this is home page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data is ${data}`}</p>
        <p>{`userAgent is ${userAgent}`}</p>
      </div>
    )
  }
}
export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return {
      statusCode
    };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <div>
        {statusCode === 404 && '페이지를 찾을 수 없습니다.'}
        {statusCode === 500 && '알수 없는 에러가 발생했습니다..'}
        {!statusCode && '클라이언트에서 에러가 발생했습니다.'}
      </div>
    )
  }
}
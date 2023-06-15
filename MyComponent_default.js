const MyComponent = (props) => {
  return <div>내 이름은 {props.name}입니다.</div>;
};

MyComponent.defaultProps = {
  name: '기본이름',
};

export default MyComponent;

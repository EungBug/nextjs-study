// 사용자와 상호관계가 없는 페이지로 서버 컴포넌트로 생성한다.

const Read = async (props) => {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await res.json();

  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
};

export default Read;

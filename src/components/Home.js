import Button from "antd/es/button";
function Home(props) {
  return (
    <>
      {console.log(props.user)}
      Home <Button>Sign Out</Button>
    </>
  );
}

export default Home;

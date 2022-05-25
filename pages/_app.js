import "../css/style.css";

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <script type="text/javascript" src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
    </>
  );
};

export default Root;

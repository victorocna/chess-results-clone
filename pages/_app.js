import "../css/style.css";

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" /> 
      <script type="text/javascript" src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
    </>
  );
};

export default Root;

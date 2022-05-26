import "../css/index.css";

const Root = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
      <script type="text/javascript" src="https://cdn.tailwindcss.com"></script>
      <Component {...pageProps} />
    </>
  );
};

export default Root;

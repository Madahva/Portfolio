import "../styles/ScrollToTopButton.css";

const ScrollToTopButton = () => {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      var toTopBtn = document.getElementById("toTopBtn");
      toTopBtn.style.display = "block";
    } else {
      var toTopBtn = document.getElementById("toTopBtn");
      toTopBtn.style.display = "none";

      toTopBtn.classList.remove("active");
    }
  };

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });

    const toTopBtn = document.querySelector("#toTopBtn");
    toTopBtn.classList.add("active");
  };

  return (
    <span id="toTopBtn" onClick={goToTop}>
      <i className="fa-solid fa-angles-up"></i>
    </span>
  );
};

export default ScrollToTopButton;

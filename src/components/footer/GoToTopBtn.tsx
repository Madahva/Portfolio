import goToTopBtn from "@/assets/footer/goToTop.svg";

export const ScrollToTopButton = () => {
  window.onscroll = function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      const toTopBtn = document.getElementById("toTopBtn");
      toTopBtn!.style.display = "block";
    } else {
      const toTopBtn = document.getElementById("toTopBtn");
      toTopBtn!.style.display = "none";

      toTopBtn!.classList.remove("active");
    }
  };

  const goToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
    });

    const toTopBtn = document.querySelector("#toTopBtn");
    toTopBtn!.classList.add("active");
  };

  return (
    <span id="toTopBtn" onClick={goToTop}>
      <img src={goToTopBtn} className="h-8 lg:h-16 cursor-pointer" alt="Go to top of the page" />
    </span>
  );
};

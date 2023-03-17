export const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={require("../images/logo.png")} />
      <h1 className="sidebar-title--first">NGG</h1>
      <h2 className="sidebar-title--second">Next-Gen Gaming</h2>
      <div className="sidebar-links--home">
        <img
          className="sidebar-links-image--home"
          src={require("../images/home.png")}
        />
        <p className="sidebar-links-title--home">Home</p>
      </div>
      <div className="sidebar-links--search">
        <img
          className="sidebar-links-image--search"
          src={require("../images/search.png")}
        />
        <p className="sidebar-links-title--search">Search</p>
      </div>
      <div className="sidebar-links--review">
        <img
          className="sidebar-links-image--review"
          src={require("../images/review.png")}
        />
        <p className="sidebar-links-title--review">Review</p>
      </div>
      <div className="sidebar-links--news">
        <img
          className="sidebar-links-image--news"
          src={require("../images/news.png")}
        />
        <p className="sidebar-links-title--news">News</p>
      </div>
      <div className="sidebar-links--login">
        <img
          className="sidebar-links-image--login"
          src={require("../images/login.png")}
        />
        <p className="sidebar-links-title--login">Login</p>
      </div>
    </div>
  );
};

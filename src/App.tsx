import "./App.scss";

function App() {
  // const [data, setData] = useState<Item | any>({
  //   id: 0,
  //   title: "",
  //   description: "",
  //   image: "/",
  //   eth: "",
  //   days: "",
  //   avatar: "/",
  //   author: "",
  // });

  // useEffect(() => {
  //   getData().then((p) => setData(p));
  // }, []);

  const data = {
    id: 1,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",

    image: "assets/images/image-equilibrium.jpg",
    eth: "0.041 ETH",
    days: "3 days left",
    avatar: "assets/images/image-avatar.png",
    author: "Jules Wyvern",
  };

  return (
    <div className="card">
      <div className="card__image">
        <img src={data.image} alt="Image" />
      </div>
      <h2 className="card__title">{data.title}</h2>
      <p className="card__text">{data.description}</p>
      <div className="card__data">
        <p className="card__data--eth">
          <svg
            width="11"
            height="18"
            viewBox="0 0 11 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.5 0L10.9961 9.16875L5.5 12.4312L0 9.16875L5.5 0ZM11 10.2165L5.5 18L0 10.2165L5.5 13.479L11 10.2165Z"
              fill="#00FFF8"
            />
          </svg>
          <span>{data.eth}</span>
        </p>
        <p className="card__data--time">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.01"
              x="16"
              y="16"
              width="16"
              height="16"
              transform="rotate(180 16 16)"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.33331 7.99999C1.33331 4.3181 4.31808 1.33333 7.99998 1.33333C9.76809 1.33333 11.4638 2.03571 12.714 3.28595C13.9643 4.53619 14.6666 6.23188 14.6666 7.99999C14.6666 11.6819 11.6819 14.6667 7.99998 14.6667C4.31808 14.6667 1.33331 11.6819 1.33331 7.99999ZM7.99998 8.66666H10.6666C11.0348 8.66666 11.3333 8.36818 11.3333 7.99999C11.3333 7.6318 11.0348 7.33333 10.6666 7.33333H8.66665V5.33333C8.66665 4.96514 8.36817 4.66666 7.99998 4.66666C7.63179 4.66666 7.33331 4.96514 7.33331 5.33333V7.99999C7.33331 8.36818 7.63179 8.66666 7.99998 8.66666Z"
              fill="#8BACD9"
            />
          </svg>
          <span>{data.days}</span>
        </p>
      </div>
      <hr />
      <div className="card__author">
        <div className="card__photo">
          <img src={data.avatar} alt="Avatar" />
        </div>
        <p className="card__creation">
          Creation of <span>{data.author}</span>
        </p>
      </div>
    </div>
  );
}

export default App;

return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
const QuoteOfTheDay = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};
      .then((data) => {
        — {author || "Unknown"}
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((err) => {
        setQuote("Something went wrong.");
        setAuthor("");
      });
  }, []);
      </p>
    </div>
  );
};
      .then((data) => {

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 
export default QuoteOfTheDay;
export default QuoteOfTheDay;
export default QuoteOfTheDay;
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "20px",
        background: "#f4f4f4",
        borderRadius: "8px",
        maxWidth: "400px",
        margin: "20px auto",
      }}
    >
      <h2>Quote of the Day</h2>
      <blockquote style={{ fontStyle: "italic", margin: "10px 0" }}>
        “{quote}”
      </blockquote>
      <p style={{ textAlign: "right", marginTop: "10px" }}>
        — {author || "Unknown"}
      </p>
    </div>
  );
};

export default QuoteOfTheDay;
 

const Questions = () => {
  return (
    <div className="container mt-4 ">
      <div className="card mb-3">
        <div className="card-header">
          <b>Q:1. How does react work?</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>How does it work:</b> While building client-side apps, a team of
            Facebook developers realized that the DOM is slow (The Document
            Object Model (DOM) is an application programming interface (API) for
            HTML and XML documents. It defines the logical structure of
            documents and the way a document is accessed and manipulated.). So,
            to make it faster, React implements a virtual DOM that is basically
            a DOM tree representation in JavaScript. So when it needs to read or
            write to the DOM, it will use the virtual representation of it. Then
            the virtual DOM will try to find the most efficient way to update
            the browser’s DOM. Unlike browser DOM elements, React elements are
            plain objects and are cheap to create. React DOM takes care of
            updating the DOM to match the React elements. The reason for this is
            that JavaScript is very fast and it’s worth keeping a DOM tree in it
            to speed up its manipulation. Although React was conceived to be
            used in the browser, because of its design it can also be used in
            the server with Node.js.
            <br />
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header">
          <b>Q:2.Difference between props and state.</b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>Difference between props and state:</b>
            <br />
            <b>PROPS:</b>The Data is passed from one component to another.
            <br /> It is Immutable (cannot be modified).
            <br />
            Props can be used with state and functional components.
            <br />
            Props are read-only.
            <br />
            <b>STATE:</b>The Data is passed within the component only.
            <br />
            It is Mutable ( can be modified).
            <br /> State can be used only with the state components/class
            component (Before 16.0).
            <br />
            State is both read and write.
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-header">
          <b>
            Q:3.What is the use effect of the data load work without loading?
          </b>
        </div>
        <div className="card-body">
          <h5 className="card-title">Ans:</h5>
          <p className="card-text">
            <b>useEffect use cases:</b>
            Running on state change: validating input field Running on state
            change: live filtering. <br />
            Running on state change: trigger animation on new array value .
            <br />
            Running on props change: update paragraph list on fetched API data
            update.
            <br /> Running on props change: updating fetched API data to get BTC
            updated price.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;

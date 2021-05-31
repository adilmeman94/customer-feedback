import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

function Feedbacks() {
  const list = useSelector((state) => state.feedReducer.list);

  return (
    <div className="App">
      <h1 className="mb-5 mt-5">List of All Feedbacks</h1>

      <div className="col-lg-6 col-md-6 col-sm-10 offset-md-3">
        {list.length ? (
          <table className="table table-success table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Feedback Data</th>
              </tr>
            </thead>
            {list.map((item, index) => {
              console.log(item);
              return (
                <tbody>
                  <tr>
                    <th scope="row" key="item.id">
                      {index + 1}
                    </th>
                    <td className="text">
                      <b> Name:</b> {item.data.name}
                      <br />
                      <b>Email:</b> {item.data.email}
                      <br />
                      <b> Message:</b> {item.data.message}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <div className="container"></div>
        )}
      </div>
    </div>
  );
}

export default Feedbacks;

import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Our passionate team is on a mission to unlock every child’s hidden
            potential — meet the minds behind Upgrade Your Child™.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => {
                const isLastItem =
                  i === props.data.length - 1 && props.data.length % 2 !== 0;

                return (
                  <div
                    key={`${d.name}-${i}`}
                    className={`team col-md-6 col-sm-6 ${
                      isLastItem ? "col-md-offset-3" : ""
                    }`}
                  >
                    <div className="thumbnail text-center">
                      <img
                        src={d.img}
                        alt="..."
                        className="team-img img-responsive center-block"
                        style={{ margin: "0 auto" }}
                      />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p className="text-muted">
                          <strong>{d.job}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};

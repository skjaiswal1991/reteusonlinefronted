import React, { useRef } from "react";
import "./index.css";
import ListMember from "./list";
import ReviewForm from "./review-form";
export default function CovidCompaliance(props) {
  // return <ListMember message={`test message`}></ListMember>;

  return (
    <section id="section-03">
      <div className="total-online-review-inner no-padding">
        <div className="row">
          
          <div className="col-sm-12">
          <div className="covid-sec">
            <h3 className="alt-font">Covid Compliancy</h3>
          </div>
          <div className="covid-inner-sec">
            <ListMember
              message={"Use Facemask /PPE kit by Employees*"}
              stars={4}
            ></ListMember>
            <ListMember
              message={"Use Facemask /PPE kit by Employees*"}
              stars={5}
            ></ListMember>
            <ListMember
              message={"Use Facemask /PPE kit by Employees*"}
              stars={3}
            ></ListMember>
            <ListMember
              message={"Use Facemask /PPE kit by Employees*"}
              stars={5}
            ></ListMember>
            <ListMember
              message={"Use Facemask /PPE kit by Employees*"}
              stars={1}
            ></ListMember>
              <div className="compli-sec-01">
                <ReviewForm></ReviewForm>
              </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

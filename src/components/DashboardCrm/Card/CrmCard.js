import React from "react";
import "./CardText.css";
import Card from "./Card";

function CardText() {
  return (
    <div>
      <div style={{ marginLeft: "-3vh" }}>
        <h2 className="heading2">Overview</h2>
        <div style={{ display: "flex" }}>
          <p className="square"></p>
          <p className="paragraph2">Listed</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p className="paragraph3">Rs. 123456789</p>
            <p className="paragraph4">Estimated Net Worth</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-58vh" }}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "36vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#0A66C2" }} className="square"></p>
          <p className="paragraph2">Enquiry received</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last contacted
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-58vh" }}>
            <Card bgColor="#0A66C2"></Card>
            <Card bgColor="#0A66C2"></Card>
            <Card bgColor="#0A66C2"></Card>
            <Card bgColor="#0A66C2"></Card>
            <Card bgColor="#0A66C2"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#4CB64C" }} className="square"></p>
          <p className="paragraph2">Qualified</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last conversion
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-50vh" }}>
            <Card bgColor="#4CB64C"></Card>
            <Card bgColor="#4CB64C"></Card>
            <Card bgColor="#4CB64C"></Card>
            <Card bgColor="#4CB64C"></Card>
            <Card bgColor="#4CB64C"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#F3A638" }} className="square"></p>
          <p className="paragraph2">Call Scheduled</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last Listed
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-50vh" }}>
            <Card bgColor="#F3A638"></Card>
            <Card bgColor="#F3A638"></Card>
            <Card bgColor="#F3A638"></Card>
            <Card bgColor="#F3A638"></Card>
            <Card bgColor="#F3A638"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#FFE970" }} className="square"></p>
          <p className="paragraph2">On-Site Meeting Scheduled</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last meeting
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-65vh" }}>
            <Card  bgColor="#FFE970"></Card>
            <Card bgColor="#FFE970"></Card>
            <Card bgColor="#FFE970"></Card>
            <Card bgColor="#FFE970"></Card>
            <Card bgColor="#FFE970"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#8B0ED7" }} className="square"></p>
          <p className="paragraph2">Quotation Sent</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last sent
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-45vh" }}>
            <Card bgColor="#8B0ED7"></Card>
            <Card bgColor="#8B0ED7"></Card>
            <Card bgColor="#8B0ED7"></Card>
            <Card bgColor="#8B0ED7"></Card>
            <Card bgColor="#8B0ED7"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#F15C92" }} className="square"></p>
          <p className="paragraph2">Negotiation</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last negotiation
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-50vh" }}>
            <Card bgColor="#F15C92"></Card>
            <Card bgColor="#F15C92"></Card>
            <Card bgColor="#F15C92"></Card>
            <Card bgColor="#F15C92"></Card>
            <Card bgColor="#F15C92"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "-3vh", marginTop: "2vh" }}>
        <div style={{ display: "flex" }}>
          <p style={{ backgroundColor: "#EB0000" }} className="square"></p>
          <p className="paragraph2">Sold</p>
          <div
            style={{ display: "flex", marginTop: "3vh", marginLeft: "3.5vh" }}
          >
            <p style={{ marginTop: "-0.2vh" }} className="paragraph2">
              Last Sold
            </p>
            <p className="paragraph4">1 day ago</p>
          </div>
          <div style={{ display: "flex", marginLeft: "-33vh" }}>
            <Card bgColor="#EB0000"></Card>
            <Card bgColor="#EB0000"></Card>
            <Card bgColor="#EB0000"></Card>
            <Card bgColor="#EB0000"></Card>
            <Card bgColor="#EB0000"></Card>
          </div>
          <div>
            <p
              style={{ marginLeft: "-10vh", width: "60px", marginTop: "38vh" }}
              className="paragraph8"
            >
              View all {">"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardText;

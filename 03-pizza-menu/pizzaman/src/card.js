import React from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Card() {
    return (
        <div className="card shadow mb-5">
            <img className="card-img-top" src="./pizzas/pp-1.jpg" alt="temp" />
            <div className="card-body">
                <h5 className="card-title">User Name</h5>
                <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam, ex quas cupiditate vero earum
                </p>
                <Skill
                    skill={[
                        { name: "html", rank: "primary" },
                        { name: "javascript", rank: "secondary" },
                    ]}
                />
            </div>
        </div>
    );
}

function Skill(props) {
    return (
        <div>
            {props.skill.map((skill) => {
                let temp = `btn btn-${skill.rank}`;
                return <button className={temp}>{skill.name}</button>;
            })}
        </div>
    );
}

export default Card;
